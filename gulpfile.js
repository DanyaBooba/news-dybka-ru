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

function style() {
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
// Watcher
//

function watch() {
	gulp.watch("src/**/*.html", njk);
}

exports.default = gulp.series(njk, watch);

exports.style = style;
