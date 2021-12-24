"use strict";

var gulp = require('gulp');

var imageMinify = require('./imageMinify');

var svgSprite = require('./spriteSVG');

var pngSprite = require('./spritePNG');

var styles = require('./styles');

var pug2html = require('./pug');

var script = require('./scripts');

var server = require('browser-sync').create(); // Запуск сервера а также слежка за файлами


module.exports = function serve(cb) {
  server.init({
    server: 'dist',
    notify: false,
    open: true,
    cors: true
  });
  gulp.watch('dev/img/*/*.{gif,png,jpg,svg,webp}', gulp.series(imageMinify)).on('change', server.reload);
  gulp.watch('dev/img/sprite/svg/*.svg', gulp.series(svgSprite)).on('change', server.reload);
  gulp.watch('dev/img/sprite/png/*.png', gulp.series(pngSprite)).on('change', server.reload);
  gulp.watch('dev/**/*.sass', gulp.series(styles)).on('change', server.reload);
  gulp.watch('dev/js/**/*.js', gulp.series(script)).on('change', server.reload);
  gulp.watch('dev/pug/**/*.pug', gulp.series(pug2html));
  gulp.watch('dist/*.html').on('change', server.reload);
  return cb();
};