var elixir = require('laravel-elixir');
var gulp = require('gulp');
var stylint = require('gulp-stylint');

var config = elixir.config;

elixir.extend('stylint', function(src, options) {
	var source = src || config.get('assets.css.stylus.folder') + '/**/*.styl';

	var paths = new elixir.GulpPaths().src(source);

  new elixir.Task('stylint', function () {
    return gulp.src(paths.src.path)
			.pipe(stylint(options))
			.pipe(stylint.reporter())
      .pipe(stylint.reporter('fail', { failOnWarning: true }))
			.on('error', this.onError());
  })
	.watch(paths.src.path);
});
