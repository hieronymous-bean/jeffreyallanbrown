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

gulp.task('mainBuild', series('compileViews'));