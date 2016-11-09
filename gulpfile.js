const gulp = require('gulp')
const babel = require('gulp-babel')
const rename = require('gulp-rename')

gulp.task('default', () => {
  return gulp.src('src.js')
    .pipe(babel({
        presets: ['es2015']
    }))
    .pipe(rename('logger.js'))
    .pipe(gulp.dest('.'))
})
