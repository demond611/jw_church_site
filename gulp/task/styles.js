var gulp = require('gulp'),
postcss = require('gulp-postcss'),
cssImport = require('postcss-import'),
mixins = require('postcss-mixins'),
cssvars = require('postcss-simple-vars'),
nested = require('postcss-nested'),
autoprefix = require('autoprefixer');


gulp.task( 'styles', function () {

	return gulp.src( './app/assets/styles/main.css' )
		.pipe( postcss([cssImport, mixins, cssvars, nested, autoprefix]) )
		.on( 'error', function (errorInfo) {
			console.log( "Errors: " + errorInfo.toString() + "\n" );
			// ENDS TASK CALL SUCCESSFULLY ALWAYS
			this.emit("end");
		})
		.pipe( gulp.dest('./app/temp/styles') );

});