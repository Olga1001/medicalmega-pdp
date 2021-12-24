const gulp = require('gulp');

// Копируем все шрифты из папки dev в dist

module.exports = function fonts() {
  return gulp.src('dev/fonts/**/*.*')
    .pipe(gulp.dest('dist/fonts'))
};
