var gulp      = require('gulp'),
    sass      = require('gulp-sass'),
    uglify    = require("gulp-uglify"),
    imagemin  = require('gulp-imagemin'),
    sassGlob  = require('gulp-sass-glob'),
    concat    = require('gulp-concat');

// compile sass into CSS & auto-inject into browsers
gulp.task('sass', function() {
    return gulp.src("./src/stylesheets/main.scss")
        .pipe(sassGlob())
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(gulp.dest("./dist/stylesheets/"));
});

gulp.task('minify', ['sass'], function() {
    return gulp.src([
        './dist/stylesheets/main.css'
    ])
    .pipe(concat({ path: 'main.css'}))
    .pipe(gulp.dest('./dist/stylesheets'));
});

gulp.task('sass:watch', function () {
    gulp.watch('./src/stylesheets/**/*.scss', ['minify']);
});

gulp.task('default', ['minify']);
