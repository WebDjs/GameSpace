'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass');
const concatCss = require('gulp-concat-css');
const uglifyCss = require('gulp-uglifycss');

gulp.task('css:compress', function () {
    gulp.src('./public/styles/*.css')
        .pipe(uglifyCss({
            "maxLineLen": 80,
            "uglyComments": true
        }))
        .pipe(gulp.dest('./public/out'))
});

gulp.task('css:concat', function () {
    return gulp.src('./public/styles/css/*.css')
        .pipe(concatCss("bundle.css"))
        .pipe(gulp.dest('./public/styles'));
});

gulp.task('sass:compile', function () {
    return gulp.src('./public/styles/sass/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./public/styles/css'));
});

gulp.task('sass:watch', function () {
    gulp.watch('./public/styles/sass/**/*.scss', ['sass:compile', 'css:concat']);
});