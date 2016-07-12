var gulp = require('gulp');
var bs = require('browser-sync').create();

// our browser-sync config + nodemon chain
gulp.task('browser-sync', function() {
    bs.init(null, {
        proxy: "http://localhost:3000",
        browser: "chromium-browser",
        port: 4000,
    });
});

// the real action
gulp.task('default', ['browser-sync'], function () {
    gulp.watch('./views/**/*.ejs', bs.reload);
    gulp.watch('./public/**/*.js', bs.reload);
    gulp.watch('./public/**/*.sass', bs.reload);
    gulp.watch('./routes/*.js', bs.reload);
    gulp.watch('./*.js', bs.reload);
    gulp.watch('./public/**/*.png', bs.reload);
});