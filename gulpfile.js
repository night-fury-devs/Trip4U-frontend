var gulp = require('gulp');
var uglify = require('gulp-uglify');
var ts = require('gulp-typescript');

var tsProject = ts.createProject('tsconfig.json', { sortOutput: true });

var paths = {
    destination: 'dist',
    resultFile: 'app.js'
};

gulp.task('default', ['build']);

gulp.task('build', function () {
    var tsResult = tsProject.src()
        .pipe(ts(tsProject));

    return tsResult.js
            .pipe(uglify())
            .pipe(gulp.dest(paths.destination));

});