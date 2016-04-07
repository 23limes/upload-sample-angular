'use strict';

var path = require('path');
var gulp = require('gulp');
var conf = require('./conf');
var gulpNgConfig = require('gulp-ng-config');

gulp.task('target:production', function () {
  gulp.src(path.join(conf.paths.src, '/app/app.config.json'))
  .pipe(gulpNgConfig('UploadSample.config', {
      environment: 'production'
    }))
  .pipe(gulp.dest(path.join(conf.paths.src, '/app/')))
});

gulp.task('target:staging', function () {
  gulp.src(path.join(conf.paths.src, '/app/app.config.json'))
  .pipe(gulpNgConfig('UploadSample.config', {
      environment: 'staging'
    }))
  .pipe(gulp.dest(path.join(conf.paths.src, '/app/')))
});

gulp.task('target:development', function () {
  gulp.src(path.join(conf.paths.src, '/app/app.config.json'))
  .pipe(gulpNgConfig('UploadSample.config', {
      environment: 'development'
    }))
  .pipe(gulp.dest(path.join(conf.paths.src, '/app/')))
});
