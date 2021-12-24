"use strict";

var gulp = require('gulp');

var buffer = require('vinyl-buffer');

var imagemin = require('gulp-imagemin'); // Минификация и оптимизация изображений


module.exports = function imageMinify() {
  return gulp.src(['dev/img/**/*.{gif,png,jpg,svg,webp}', '!dev/img/sprite/**/*']).pipe(buffer()).pipe(imagemin([imagemin.gifsicle({
    interlaced: true
  }), imagemin.mozjpeg({
    quality: 75,
    progressive: true
  }), imagemin.optipng({
    optimizationLevel: 5
  }), imagemin.svgo({
    plugins: [{
      removeViewBox: true
    }, {
      cleanupIDs: false
    }]
  })])).pipe(gulp.dest('dist/img/'));
};