"use strict";

var gulp = require('gulp');

var htmlValidator = require('gulp-w3c-html-validator');

var plumber = require('gulp-plumber');

var pug = require('gulp-pug');

var argv = require('yargs').argv;

var gulpif = require('gulp-if'); // Преобразуем Pug в HTML


module.exports = function pug2html() {
  return gulp.src('dev/pug/*.pug').pipe(plumber()).pipe(pug({
    pretty: true
  })).pipe(plumber.stop()).pipe(gulpif(argv.prod, htmlValidator())).pipe(gulp.dest('dist'));
};