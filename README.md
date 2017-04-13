# Laravel Elixir Stylint

[![npm](https://img.shields.io/npm/v/laravel-elixir-stylint.svg)](https://www.npmjs.com/package/laravel-elixir-stylint)
[![npm](https://img.shields.io/npm/dt/laravel-elixir-stylint.svg)](https://www.npmjs.com/package/laravel-elixir-stylint)
[![npm](https://img.shields.io/npm/dm/laravel-elixir-stylint.svg)](https://www.npmjs.com/package/laravel-elixir-stylint)
[![npm](https://img.shields.io/npm/l/laravel-elixir-stylint.svg)](http://opensource.org/licenses/MIT)

Laravel Elixir Stylus Lint Extension based on [Stylint](https://github.com/SimenB/stylint):

## Installation

```sh
$ npm install laravel-elixir-stylint --save-dev
```

## Usage

In gulpfile.js:
```javascript
// Include Laravel Elixir
var elixir = require('laravel-elixir');

// Include the extension
require('laravel-elixir-stylint');

// Lint all files under 'stylus' folder
elixir(function(mix) {
  mix.stylint();
});
```
## Sources

Type: `String` or `Array`

```javascript
elixir(function(mix) {
  mix.stylint([
    'resources/assets/stylus/fileA.styl',
    'resources/assets/stylus/fileB.styl'
  ]);
});
```

## Options
```javascript
var options = { config: '.stylintrc' }

elixir(function(mix) {
  mix.stylint([
    'resources/assets/stylus/fileA.styl',
    'resources/assets/stylus/fileB.styl'
  ], options);
});
```

## Stylint Options
Type: `Object`

See [stylint options ](https://github.com/SimenB/stylint#options)

## Credits
- [gulp-stylint](https://github.com/danielhusar/gulp-stylint)
- [laravel-elixir](https://github.com/laravel/elixir)

## License

Laravel Elixir Stylint is open-sourced software licensed under the [MIT license](http://opensource.org/licenses/MIT)
