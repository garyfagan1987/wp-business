var gulp      = require('gulp'),
    sass      = require('gulp-sass'),
    sassGlob  = require('gulp-sass-glob'),
    concat    = require('gulp-concat'),
    uglify    = require('gulp-uglify'),
    pump      = require('pump');

// compile sass into CSS & auto-inject into browsers
gulp.task('sass', function() {
    return gulp.src("./src/scss/main.scss")
        .pipe(sassGlob())
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(gulp.dest("./dist/css/"));
});

gulp.task('concat:css', ['sass'], function() {
    return gulp.src([
        './dist/css/main.css'
    ])
    .pipe(concat({ path: 'main.css'}))
    .pipe(gulp.dest('./dist/css'));
});

gulp.task('concat:js', function() {
    return gulp.src([
        './src/js/**/*.js'
    ])
    .pipe(concat({ path: 'main.js'}))
    .pipe(gulp.dest('./dist/js'));
});

gulp.task('uglify:js', ['concat:js'], function (cb) {
    pump([
        gulp.src('./dist/js/**/*.js'),
        uglify(),
        gulp.dest('./dist/js/')
    ], cb);
});

gulp.task('sass:watch', function () {
    gulp.watch('./src/scss/**/*.scss', ['concat:css']);
});

gulp.task('default', ['concat:css', 'uglify:js']);
