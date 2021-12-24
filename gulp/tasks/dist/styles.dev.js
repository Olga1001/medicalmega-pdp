"use strict";

var gulp = require('gulp');

var plumber = require('gulp-plumber');

var sass = require('gulp-sass');

var cleanCSS = require('gulp-clean-css');

var sourcemaps = require('gulp-sourcemaps');

var autoprefixer = require('gulp-autoprefixer');

var argv = require('yargs').argv;

var gulpif = require('gulp-if'); // Работаем со стилями


module.exports = function styles() {
  return gulp.src('dev/styles/styles.sass').pipe(plumber()).pipe(gulpif(!argv.prod, sourcemaps.init())).pipe(sass()).pipe(autoprefixer({
    overrideBrowserslist: ["last 4 version"],
    cascade: false
  })).pipe(gulpif(argv.prod, cleanCSS({
    debug: true,
    compatibility: '*'
  }, function (details) {
    console.log("".concat(details.name, ": Original size:").concat(details.stats.originalSize, " - Minified size: ").concat(details.stats.minifiedSize));
  }))).pipe(gulpif(!argv.prod, sourcemaps.write())).pipe(gulp.dest('dist/css'));
};