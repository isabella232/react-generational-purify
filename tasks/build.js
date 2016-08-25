const del = require('del');
const gulp = require('gulp');
const plugins = require('gulp-load-plugins')();
const runSequence = require('run-sequence');

gulp.task('copy-files', () => {
  return gulp.src(['package.json', 'README.md'], {base: '.'})
    .pipe(gulp.dest('dist'));
});

gulp.task('build-js', () => {
  return gulp.src(['index.js'], {base: '.'})
    .pipe(plugins.babel())
    .pipe(gulp.dest('dist'));
});

gulp.task('clean', (done) => {
  del(['dist/'])
    .then(() => done(), done);
});

gulp.task('build', ['clean'], (done) => {
  runSequence(['build-js', 'copy-files'], done);
});
