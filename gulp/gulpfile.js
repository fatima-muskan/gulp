const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const autoprefixer = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');

// Compilation Task
gulp.task('sass', function () {
  return gulp.src('scss/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('scss/css'));
});

// Autoprefixing Task
gulp.task('autoprefix', function () {
  return gulp.src('scss/css/**/*.css')
    .pipe(autoprefixer())
    .pipe(gulp.dest('scss/css'));
});

// Compression Task
gulp.task('compress', function () {
  return gulp.src('scss/css/**/*.css')
    .pipe(cleanCSS())
    .pipe(gulp.dest('scss/css'));
});

// Watch Task
gulp.task('watch', function () {
  gulp.watch('scss/**/*.scss', gulp.series('sass', 'autoprefix', 'compress'));
});

// Default Task
gulp.task('default', gulp.series('sass', 'autoprefix', 'compress', 'watch'));
