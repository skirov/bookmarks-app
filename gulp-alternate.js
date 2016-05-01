var gulp = require('gulp');
var ngAnnotate = require('gulp-ng-annotate');
var templateCache = require('gulp-angular-templatecache');
var inlineSource = require('gulp-inline-source');
var processhtml = require('gulp-processhtml');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
// var sass = require('gulp-sass');
var concatCss = require('gulp-concat-css');
var cssmin = require('gulp-cssmin');
// var rename = require('gulp-rename');

var path = {
    DIST: './build',
    HTML_TEMPLATES: './app/components/**/*.html',
    JS: [
        './bower_components/angular/angular.js',
        './bower_components/angular-resource/angular-resource.js',
        './app/*.js',
        './app/**/*.js',
        '.templates/*.js'
    ],
    CSS: './bower_components/bootstrap/dist/css/bootstrap.min.css'
};

gulp.task('templateCache', function() {
  return gulp.src(path.HTML_TEMPLATES)
    .pipe(templateCache({
      module: 'bookmarksApp.templates'
    }))
    .pipe(gulp.dest('./templates'))
});

gulp.task('js', function() {
  return gulp.src(path.JS)
    .pipe(concat('build.js'))
    .pipe(ngAnnotate())
    .pipe(uglify())
    .pipe(gulp.dest(path.DIST))
});

gulp.task('css', function() {
  return gulp.src(path.CSS)
    .pipe(concatCss('style.css'))
    .pipe(cssmin())
    .pipe(gulp.dest(path.DIST))
});

gulp.task('html', function () {
    return gulp.src('index.html')
        .pipe(processhtml({commentMarker: 'process', process: true}))
        .pipe(inlineSource())
        .pipe(gulp.dest(path.DIST));
});

gulp.task('build', ['templateCache', 'html', 'js', 'css']);
