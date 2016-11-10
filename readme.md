# Laravel Elixir Stylint

[![npm version](https://badge.fury.io/js/laravel-elixir-stylint.svg)](https://badge.fury.io/js/laravel-elixir-stylint)

## Install

```sh
npm install laravel-elixir-stylint --save-dev
```

## gulpfile.js
```javascript
var elixir = require('laravel-elixir');

require('laravel-elixir-stylint');

elixir(function(mix) {
  mix.stylint();
});
```

## Stylint config
Type: `Object`

For gulp-stylint config [click here](https://github.com/danielhusar/gulp-stylint)

## Credits
- [gulp-stylint](https://github.com/danielhusar/gulp-stylint)
- [laravel-elixir](https://github.com/laravel/elixir)