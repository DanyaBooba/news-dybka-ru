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
		.src("src/*.html") // Исключить: layout
		.pipe(nunjucks.compile())
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
		.pipe(gulp.src("src/app/css/_static/**/*.css"))
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

//
// Default Task
//

exports.default = gulp.series(
	gulp.parallel(njk, css, js, fonts, folder, images),
	gulp.parallel(watch, server)
);
