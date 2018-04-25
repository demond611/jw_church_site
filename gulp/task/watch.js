var gulp = require('gulp'),
watch = require('gulp-watch'),
browserSync = require('browser-sync').create();


gulp.task('watch', function () {

	browserSync.init({
		notify: false,
		server:{
			baseDir: "app"
		}
	});


	watch('./app/**/*.html', function(){
		browserSync.reload();
	});

});