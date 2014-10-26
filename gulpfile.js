var gulp = require('gulp');
var watch = require('gulp-watch');
var haml = require('gulp-ruby-haml');

gulp.task('haml', function(){
  gulp.src('./haml/**/*.haml')
    .pipe(haml())
    .pipe(gulp.dest('./html'));
});

gulp.task('default', ['haml'], function(){
  gulp.watch('./haml/**/*.haml', ['haml']);
})
