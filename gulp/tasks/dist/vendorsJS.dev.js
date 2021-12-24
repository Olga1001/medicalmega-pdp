"use strict";

var gulp = require('gulp');

var concat = require('gulp-concat');

var vendorsScripts = ['node_modules/svg4everybody/dist/svg4everybody.min.js'];

module.exports = function vendors(cb) {
  return vendorsScripts.length ? gulp.src(vendorsScripts).pipe(concat('libs.js')).pipe(gulp.dest('dist/js/')) : cb();
};