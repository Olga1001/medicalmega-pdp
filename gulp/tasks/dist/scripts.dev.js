"use strict";

var gulp = require('gulp');

var babel = require('gulp-babel');

var uglify = require('gulp-uglify');

var eslint = require('gulp-eslint');

var argv = require('yargs').argv;

var gulpif = require('gulp-if'); // Работа со скриптами


module.exports = function script() {
  return gulp.src('dev/js/*.js').pipe(eslint()).pipe(eslint.format()).pipe(babel({
    presets: ['@babel/env']
  })).pipe(gulpif(argv.prod, uglify())).pipe(gulp.dest('dist/js/'));
};