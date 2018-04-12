var gulp      = require('gulp'),
    sass      = require('gulp-sass'),
    sassGlob  = require('gulp-sass-glob'),
    concat    = require('gulp-concat');

// compile sass into CSS & auto-inject into browsers
gulp.task('sass', function() {
    return gulp.src("./stylesheets/scss/main.scss")
        .pipe(sassGlob())
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(gulp.dest("./stylesheets/css/"));
});

gulp.task('minify', ['sass'], function() {
    return gulp.src([
        './stylesheets/css/main.css'
    ])
    .pipe(concat({ path: 'main.css'}))
    .pipe(gulp.dest('./stylesheets/css'));
});

gulp.task('sass:watch', function () {
    gulp.watch('./stylesheets/src/**/*.scss', ['minify']);
});

gulp.task('default', ['minify']);
