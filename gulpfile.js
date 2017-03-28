var gulp = require('gulp');
var less = require('gulp-less');
// var plumber = require('gulp-plumber');
// var autoprefixer = require('gulp-autoprefixer');
// var htmlmin = require('gulp-htmlmin');
// var cssmin = require('gulp-cssmin');
// var rename = require('gulp-rename');
 
 // ==================minify-css==================
// gulp.task('cssmin', function () {
//     gulp.src('src/css/**/*.css')
//         .pipe(cssmin())
//         .pipe(rename({suffix: '.min'}))
//         .pipe(gulp.dest('dist'));
// });

// ==================minify-html==================
// gulp.task('minify-html', function() {
// return gulp.src('src/*.html')
//  .pipe(htmlmin({collapseWhitespace: true, minifyJS:true,removeComments:true}))
// .pipe(gulp.dest('dist'));
// });

// ==================LESS COMPILE==================
gulp.task('less', function(){
  return gulp.src('./src/less/**/*.less')
    // .pipe(plumber())
    .pipe(less())
    .pipe(gulp.dest('./src/css'))
});

gulp.task('watch', function() {
    gulp.watch('./src/less/**/*.less', ['less']);
});
// ==================autoprefixer==================
// gulp.task('autoprefixer', function () {
//     return gulp.src('src/css/**/*.css')
//         .pipe(autoprefixer({
//             browsers: ['last 16 versions'],
//             cascade: false
//         }))
//         .pipe(gulp.dest('src/css'));
// });

gulp.task('default', ['watch']);

