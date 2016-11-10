# Laravel Elixir Stylint

[![npm version](https://badge.fury.io/js/laravel-elixir-stylint.svg)](https://badge.fury.io/js/laravel-elixir-stylint)

## Install

```sh
npm install laravel-elixir-stylint --save-dev
```

## Usage

### Lint all files in 'stylus' folder
```javascript
var elixir = require('laravel-elixir');

require('laravel-elixir-stylint');

elixir(function(mix) {
  mix.stylint();
});
```
### Lint specific files
```javascript
var elixir = require('laravel-elixir');

require('laravel-elixir-stylint');

elixir(function(mix) {
  mix.stylint([
    'resources/assets/stylus/fileA.styl',
    'resources/assets/stylus/fileB.styl'
  ]);
});
```

### Options
```javascript
var options = {config: '.stylintrc'}

elixir(function(mix) {
  mix.stylint([
    'resources/assets/stylus/fileA.styl',
    'resources/assets/stylus/fileB.styl'
  ], options);
});
```


## Stylint options
Type: `Object`

For stylint options [click here](https://github.com/SimenB/stylint#options)

## Credits
- [gulp-stylint](https://github.com/danielhusar/gulp-stylint)
- [laravel-elixir](https://github.com/laravel/elixir)