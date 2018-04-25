var gulp = require('gulp'),
postcss = require('gulp-postcss'),
cssImport = require('postcss-import'),
mixins = require('postcss-mixins'),
cssvars = require('postcss-simple-vars'),
nested = require('postcss-nested'),
autoprefixer = require('autoprefixer');


gulp.task( 'styles', function () {
	return gulp.src('./app/assets/styles/main.css')
		.pipe( postcss([cssImport, mixins, cssvars, nested, autoprefixer]) )
		.pipe( gulp.dest('./app/temp/styles') );
});