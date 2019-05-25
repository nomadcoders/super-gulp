import gulp from "gulp";
import gpug from "gulp-pug";

const routes = {
  pug: {
    src: "src/*.pug",
    dest: "build"
  }
};

export const pug = () =>
  gulp
    .src(routes.pug.src)
    .pipe(gpug())
    .pipe(gulp.dest(routes.pug.dest));

export const dev = gulp.series([pug]);
