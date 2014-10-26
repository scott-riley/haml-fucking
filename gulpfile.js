var gulp = require('gulp');
var watch = require('gulp-watch');
var haml = require('gulp-ruby-haml');
var sass = require('gulp-sass');

gulp.task('haml', function(){
  gulp.src('./haml/**/*.haml')
    .pipe(haml())
    .pipe(gulp.dest('./html'));
});

gulp.task('sass', function(){
	gulp.src('./sass/**/*.scss')
		.pipe(sass())
		.pipe(gulp.dest('./css'));
});

gulp.task('default', ['haml'], function(){
  gulp.watch('./haml/**/*.haml', ['haml']);
  gulp.watch('./sass/**/*.scss', ['sass']);
})
