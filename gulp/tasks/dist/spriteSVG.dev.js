"use strict";

var gulp = require('gulp');

var svgSprite = require('gulp-svg-sprite');

var svgmin = require('gulp-svgmin');

var cheerio = require('gulp-cheerio');

var replace = require('gulp-replace'); // Делаем SVG спрайт


module.exports = function spriteSVG() {
  return gulp.src('dev/img/sprite/svg/*.svg').pipe(svgmin({
    js2svg: {
      pretty: true
    }
  })).pipe(cheerio({
    run: function run($) {
      $('[fill]').removeAttr('fill');
      $('[stroke]').removeAttr('stroke');
      $('[style]').removeAttr('style');
    },
    parserOptions: {
      xmlMode: true
    }
  })).pipe(replace('&gt;', '>')).pipe(svgSprite({
    mode: {
      symbol: {
        sprite: "sprite.svg"
      }
    }
  })).pipe(gulp.dest('dist/img/sprite'));
};