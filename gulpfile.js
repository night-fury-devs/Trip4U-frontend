var gulp = require('gulp');
var uglify = require('gulp-uglify');
var del = require('del');
var tsconfig = require('gulp-tsconfig-files');
var ts = require('gulp-typescript');

var tsProject = ts.createProject('tsconfig.json', {sortOutput: true});

var paths = {
    resources: ['**/*.html', '**/*.css', '!node_modules/**', 'systemjs.config.js', 'package.json', '**/*.jpg'],
    sources: ['app/**/*.ts', 'typings/index.d.ts'],
    destination: 'dist'
};

var tsconfigOpts = {
    posix: true
};

gulp.task('default', ['build', 'copy-resources']);

gulp.task('build', function () {
    gulp.src(paths.sources)
        .pipe(tsconfig(tsconfigOpts));
    
    var tsResult = tsProject.src()
        .pipe(ts(tsProject));

    return tsResult.js
        .pipe(uglify())
        .pipe(gulp.dest(paths.destination));
});

gulp.task('copy-resources', function () {
    return gulp.src(paths.resources)
        .pipe(gulp.dest(paths.destination));
});

gulp.task('clean', function () {
    return del(paths.destination);
});