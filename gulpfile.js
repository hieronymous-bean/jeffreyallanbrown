// Import Required Packages //
// ------------------------------
const gulp = require('gulp');
const { series } = require('gulp');
const sass = require('gulp-dart-sass');
const pug = require('gulp-pug');
const sourcemaps = require('gulp-sourcemaps');
const del = require('del');
const concat = require('gulp-concat');
var header = require('gulp-header');
const merge = require('merge-stream');
const cleanCSS = require('gulp-clean-css');


// Constants //
// ------------------------------

/* Directories */
const dirs = {
    app: 'src/',
    assets: 'assets/',
    dist: 'dist/'
};

/* Paths */
const paths = {
    app: {
        assets: dirs.app + dirs.assets,
        scss: dirs.app + dirs.assets + 'scss/',
        css: dirs.app + dirs.assets + 'css/',
        js: dirs.app + dirs.assets + 'js/',
        vendors: dirs.app + dirs.assets + 'vendors/',
        fonts: dirs.app + dirs.assets + 'fonts/',
        images: dirs.app + dirs.assets + 'images/'
    },
    dist: {
        assets: dirs.dist + dirs.assets,
        css: dirs.dist + dirs.assets + 'css/',
        js: dirs.dist + dirs.assets + 'js/',
        fonts: dirs.dist + dirs.assets + 'fonts/',
        images: dirs.dist + dirs.assets + 'images/'
    }
}

/* Stamp Branding */
const app = require('./package.json');
const banner = [
    '/*!',
    ` * ${app.name} - ${app.version}`,
    ` * @author ${app.author} - ${app.repository.url} `,
    ` * Copyright (c) ${new Date().getFullYear()}`,
    ' */',
    ''].join('\n');


// Intial Setup & Vendor Tasks //
// ------------------------------



// Build Files //
// ------------------------------
gulp.task('buildCoreCSS', () => {
    return gulp.src(['./src/assets/css/**/**.css','./src/assets/css/**.css'])
    .pipe(gulp.dest('./dist/assets/css'));
});

gulp.task('buildCoreJS', () => {
    return gulp.src([
        './src/assets/vendors/**.js',
        './src/assets/scripts/**.js'])
    .pipe(gulp.dest('./dist/assets/js'));
});

gulp.task('buildCoreImages', () => {
    return gulp.src(['./src/assets/img/**'])
    .pipe(gulp.dest('./dist/assets/img'));
});

gulp.task('buildCoreFonts', () => {
    return gulp.src(['./src/assets/fonts/**'])
    .pipe(gulp.dest('./dist/assets/fonts'));
});

gulp.task('buildCoreFiles', series('buildCoreCSS','buildCoreJS','buildCoreImages','buildCoreFonts'));


// Compile Views //
// ------------------------------

gulp.task('buildCoreView', function buildHTML() {
    return gulp.src('./src/index.pug')
    .pipe(pug({
      pretty: true
    }))
    .pipe(gulp.dest('./dist/pages'));
  });

gulp.task('compileViews', series('buildCoreView'));




// Full Build //
// ------------------------------

gulp.task('mainBuild', series('buildCoreFiles','compileViews'));