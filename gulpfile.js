var gulp = require('gulp');
var browsersync = require('browser-sync').create();
var sass = require('gulp-sass');

//Sass Compiler
gulp.task('sass', function() {
    return gulp.src(['node_modules/bootstrap/scss/bootstrap.scss', 'src/scss/*.scss'])
        .pipe(sass())
        .pipe(gulp.dest("src/css"))
        .pipe(browsersync.stream());

});

//Move to js for src.js
gulp.task('js', function() {
    return gulp.src(['node_modules/bootstrap/dist/js/bootstrap.min.js', 'node_modules/jquery/dist/jquery.min.js', 'node_modules/popper.js/dist/umd/popper.min.js'])
        .pipe(gulp.dest("src/js"))
        .pipe(browsersync.stream());

});


//Local service
gulp.task('server', ['sass'], function() {
    browsersync.init({
        server: "./src"

    });

    gulp.watch(['node_modules/bootstrap/scss/bootstrap.scss', 'src/scss/*.scss'], ['sass']);
    gulp.watch("src/*.html").on('change', browsersync.reload);

});

gulp.task('default', ['js', 'server']);