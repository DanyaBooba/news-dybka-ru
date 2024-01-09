const gulp = require("gulp");
const nunjucks = require("gulp-nunjucks");
const nunjucksRender = require("gulp-nunjucks-render");
const sitemap = require("gulp-sitemap");

const cssmin = require("gulp-cssmin");
const concatCss = require("gulp-concat-css");
const autoprefixer = require("gulp-autoprefixer");
const sync = require("browser-sync");

const fs = require("fs");
const feed = require("@zadkiel/gulp-feed");

const pages = JSON.parse(fs.readFileSync("pages.json", "utf8"));

//
// Nunjucks
//

function njk() {
	return gulp
		.src(["src/*.html", "src/posts/**/*.html"])
		.pipe(
			nunjucksRender({
				path: ["src/layouts/"],
			})
		)
		.pipe(gulp.dest("dist"))
		.pipe(gulp.src("src/pages/**/*.html"))
		.pipe(
			nunjucksRender({
				path: ["src/layouts/"],
			})
		)
		.pipe(gulp.dest("dist"));
}

//
// Style
//

function css() {
	return gulp
		.src("src/app/css/*.css")
		.pipe(autoprefixer())
		.pipe(concatCss("index.css"))
		.pipe(cssmin())
		.pipe(gulp.dest("dist/css"))
		.pipe(gulp.src("src/app/css/_static/*.css"))
		.pipe(autoprefixer())
		.pipe(cssmin())
		.pipe(gulp.dest("dist/css"));
}

//
// JS
//

function js() {
	return gulp.src("src/app/js/**/*.js").pipe(gulp.dest("dist/js"));
}

//
// Fonts
//

function fonts() {
	return gulp.src("src/app/fonts/**/*").pipe(gulp.dest("dist/fonts"));
}

//
// Images
//

function images() {
	return gulp.src("src/app/img/**/*").pipe(gulp.dest("dist/img"));
}

//
// Post Image
//

function imagesPost() {
	return gulp
		.src([
			"src/posts/**/*.jpg",
			"src/posts/**/*.png",
			"src/posts/**/*.jfif",
			"src/posts/**/*.webp",
			"src/posts/**/*.jpeg",
		])
		.pipe(gulp.dest("dist"));
}

//
// Folder more
//

function folder() {
	return gulp.src("src/app/more/**/*").pipe(gulp.dest("dist"));
}

//
// Sitemap
//

function sitemapCreate() {
	return gulp
		.src(["src/pages/**/*.html", "src/*.html", "src/posts/**/*.html"])
		.pipe(
			sitemap({
				siteUrl: "https://news.dybka.ru",
				changefreq: "weekly",
				priority: "0.5",
			})
		)
		.pipe(gulp.dest("dist"));
}

//
// pages.json
//

const pagesJson = (done) => {
	const pages = fs.readFileSync("pages.json", "utf8");
	fs.writeFileSync("dist/js/pages.json", pages);
	done();
};

//
// Feed XML

function feedXML() {
	return feed(pages, {
		transform: (post) => post,
		render: {
			"rss.xml": "rss2",
		},
	}).pipe(gulp.dest("assets/"));
}

//

//
// Server
//

function server() {
	sync.init({
		ui: false,
		notify: false,
		server: {
			baseDir: "dist",
		},
	});
}

//
// Watcher
//

function watch() {
	gulp.watch("src/**/*.html", njk);
	gulp.watch("src/**/*.css", css);
	gulp.watch("src/**/*.js", js);
	gulp.watch(
		["src/app/more/**/*", "src/app/fonts/**/*", "src/app/img/**/*"],
		gulp.parallel(folder, fonts, images, imagesPost)
	);
}

//
// Default Task
//

exports.default = gulp.series(
	gulp.parallel(
		njk,
		css,
		js,
		fonts,
		folder,
		images,
		imagesPost,
		gulp.parallel(sitemapCreate, pagesJson, feedXML)
	),
	gulp.parallel(watch, server)
);
