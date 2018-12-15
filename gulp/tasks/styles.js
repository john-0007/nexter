const gulp = require("gulp")
const autoprefixer = require('gulp-autoprefixer')
const sass = require('gulp-sass')

gulp.task("styles",() => {
  return gulp.src("./app/assets/styles/styles.scss")
  .pipe(sass())
  .on("error", function(errorInfo) {
    this.emit("end");
    console.log(errorInfo.toString())
  })
  .pipe(autoprefixer({
    browsers: ['last 2 versions'],
    cascade: false
  }))
  .pipe(gulp.dest("./app/temp/styles"))
})