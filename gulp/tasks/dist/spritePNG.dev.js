"use strict";

var gulp = require('gulp');

var buffer = require('vinyl-buffer');

var imagemin = require('gulp-imagemin');

var merge = require('merge-stream');

var spritesmith = require('gulp.spritesmith');

module.exports = function spritePNG() {
  // Генерируем спрайт
  var spriteData = gulp.src('dev/img/sprite/png/*.png').pipe(spritesmith({
    imgName: 'sprite.png',
    imgPath: '../img/sprite/sprite.png',
    cssName: 'sprite.sass',
    padding: 5,
    cssVarMap: function cssVarMap(sprite) {
      sprite.name = 'icon-' + sprite.name;
    }
  })); // Оптимизируем спрайт

  var imgStream = spriteData.img.pipe(buffer()).pipe(imagemin()).pipe(gulp.dest('dist/img/sprite/')); // Собираем SASS

  var cssStream = spriteData.css.pipe(gulp.dest('dev/styles/utils/'));
  return merge(imgStream, cssStream);
};