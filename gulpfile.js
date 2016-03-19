var gulp       = require('gulp'),
    jade       = require('gulp-jade'),
    connect    = require('gulp-connect');

gulp.task('jade', function() {
   return gulp.src('src/*.jade')
      .pipe(jade({pretty: true}))
      .pipe(gulp.dest('dev/'))
      .pipe(connect.reload())
});

gulp.task('connect', function() {
   connect.server({
      livereload: true,
      root: 'dev',
      debug: true
   });
});

gulp.task('watch', function() {
   gulp.watch('src/*.jade', ['jade']);
});

gulp.task('default', ['connect', 'watch']);
