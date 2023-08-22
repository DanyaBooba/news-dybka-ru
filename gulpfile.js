const gulp = require("gulp");
const nunjucks = require("gulp-nunjucks");

// import htmlmin from "gulp-htmlmin";
const cssmin = require("gulp-cssmin");
const concatCss = require("gulp-concat-css");
const autoprefixer = require("gulp-autoprefixer");
const sync = require("browser-sync");

//
// Nunjucks
//

function njk() {
	return gulp
		.src("src/*.html")
		.pipe(nunjucks.compile())
		.pipe(gulp.dest("dist"));
}

//
// Style
//

function css() {
	return gulp
		.src("src/css/*.css")
		.pipe(autoprefixer())
		.pipe(concatCss("index.css"))
		.pipe(cssmin())
		.pipe(gulp.dest("dist/css"))
		.pipe(gulp.src("src/css/_static/**/*.css"))
		.pipe(autoprefixer())
		.pipe(cssmin())
		.pipe(gulp.dest("dist/css"));
}

//
// JS
//

function js() {
	return gulp.src("src/js/**/*.js").pipe(gulp.dest("dist/js"));
}

//
// Fonts
//

function fonts() {
	return gulp.src("src/fonts/**/*").pipe(gulp.dest("dist/fonts"));
}

//
// Images
//

function images() {
	return gulp.src("src/img/**/*").pipe(gulp.dest("dist/img"));
}

//
// Folder more
//

function folder() {
	return gulp
		.src("src/_more/**/*")
		.pipe(gulp.dest("dist/"))
		.pipe(gulp.src("src/_more/.htaccess"))
		.pipe(gulp.dest("dist/"));
}

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
		["src/more/**/*", "src/fonts/**/*", "src/img/**/*"],
		gulp.series(copyFont, copyImg, copyMore)
	);
}

exports.default = gulp.series(njk, watch);
