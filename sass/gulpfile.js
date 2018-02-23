var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', function () {
  return gulp.src('assets/styles/sass/styles.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('assets/styles/css'))
});


gulp.task('default', function () {
    gulp.watch('assets/styles/sass/**', ['sass']); 
});