var gulp = require('gulp');
var elixir = require('laravel-elixir');

/*
 | Copy files.
 | 'gulp copyf' after bower updates
 |
 */
gulp.task('copyf', function() {
	gulp.src('vendor/bower_components/bootstrap/less/**')
		.pipe(gulp.dest('resources/assets/less/bootstrap'));
	gulp.src('vendor/bower_components/bootstrap/dist/js/bootstrap.js')
		.pipe(gulp.dest('resources/assets/js/'));
	gulp.src('vendor/bower_components/bootstrap/dist/fonts/**')
		.pipe(gulp.dest('public/assets/fonts'));
	gulp.src('vendor/bower_components/jquery/dist/jquery.js')
		 .pipe(gulp.dest('resources/assets/js/'));
});
/*
 |--------------------------------------------------------------------------
 | Elixir Asset Management
 |--------------------------------------------------------------------------
 |
 | Elixir provides a clean, fluent API for defining some basic Gulp tasks
 | for your Laravel application. By default, we are compiling the Sass
 | file for our application, as well as publishing vendor resources.
 |
 */

elixir(function(mix) {
	// Compile Less
    mix.less('app.less').coffee;

    // Combine scripts
    mix.scripts([
    	'js/jquery.js',
    	'js/bootstrap.js'
    ],
    'public/assets/js/admin.js',
    'resources/assets'
    );
    // mix.browserfy('index.js');
});
