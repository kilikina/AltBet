/*
 |
 | Initialize plugins
 |
 */
var gulp = require('gulp');

/*
 |
 | Environment configuration
 |
 */
 var config = {
 	env: 'prod'
 }

var elixir = require('laravel-elixir');

var bower = './vendor/bower_components/';

var paths = [
	bower + 'bootstrap/less',
	bower + 'bootstrap/fonts'
];

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
    mix.less('app.less', 'public/css', { paths: paths })
    	.scripts([
    		'jquery/dist/jquery.min.js',
    		'bootstrap/dist/js/bootstrap.min.js',
    		], 'public/js/vendor.js', bower)
    	.copy('resources/assets/js/app.js', 'public/js/app.js')
    	.copy(bower + 'bootstrap/fonts', 'public/fonts');
    // mix.browserfy('index.js');
});
