var gulp = require('gulp'), handlebars = require('./lib/gulp-compile-handlebars');

gulp.task('document', function () {
  gulp.src(['templates/index.hbs'])
    .pipe(handlebars({ title: 'Hello' }, { dest: '_build/index.html' }))
    .pipe(gulp.dest('_build'));
});

gulp.task('default', ['document']);
