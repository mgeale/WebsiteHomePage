var gulp = require('gulp');
var minifyHtml = require("gulp-minify-html");
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');

gulp.task('minify-html', function () {
    gulp.src('./*.html') // path to your files
    .pipe(minifyHtml())
    .pipe(gulp.dest('public'));
});
