var Elixir = require('laravel-elixir');
var gulp = require('gulp');
var stylint = require('gulp-stylint');

var config = Elixir.config;

Elixir.extend('stylint', function(src, options) {
	var source = src || config.get('assets.stylus.folder') + '/**/*.styl';

	var paths = new Elixir.GulpPaths().src(source);

  var onError = function (err) {
		new Elixir.Notification().error(err, 'Stylus Lint failed!');
		this.emit('end');
	};

  new Elixir.Task('stylint', function () {
		this.log(paths.src);

    return gulp.src(paths.src.path)
			.pipe(stylint(options))
			.pipe(stylint.reporter())
			.on('error', onError)
			.pipe(new Elixir.Notification('Styl Lint succeeded!'));
  })
	.watch(paths.src.path);
});
