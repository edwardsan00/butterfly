'use strict';
    const   gulp = require('gulp'),
            sass = require('gulp-sass'),
            autoprefixer = require('gulp-autoprefixer'),
            browserSync = require('browser-sync').create();

    gulp.task('sass', () =>{
        return gulp.src('./scss/**/**/*.scss')
            .pipe(sass().on('Error', sass.logError))
            .pipe(autoprefixer({
                browsers: ['last 2 versions']
            }))
            .pipe(browserSync.stream())
            .pipe(gulp.dest('./src/css'));
    });


    gulp.task('server', ['sass'], () =>{
        browserSync.init({
        server: {
            baseDir: "./"
        }
        });
        gulp.watch('./scss/**/**/*.scss', ['sass']);
        gulp.watch("./**/**/*.html").on('change', browserSync.reload);
    });
    gulp.task('default', ['server']);
