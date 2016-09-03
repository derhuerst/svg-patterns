# svg-patterns

**Create SVG patterns programmatically to visualize data.**

`svg-patterns` exposes `lines([opt])`, `circles([opt])` and `paths(style, [opt])`.

![a simple pattern](https://cdn.rawgit.com/derhuerst/svg-patterns/master/examples/kitchen-sink.svg)

This library is inspired by [Textures.js](http://riccardoscalco.github.io/textures/) but tries to do a few things differently:

- `svg-patterns` does not limit you in what frontend stack you use. It just returns [virtual-dom nodes](https://github.com/Matt-Esch/virtual-dom#dom-model).
- `svg-patterns` does not require [D3](https://d3js.org/) (`70k`). Including dependencies, it is `5k` minified.

[![npm version](https://img.shields.io/npm/v/svg-patterns.svg)](https://www.npmjs.com/package/svg-patterns)
[![build status](https://img.shields.io/travis/derhuerst/svg-patterns.svg)](https://travis-ci.org/derhuerst/svg-patterns)
[![dependency status](https://img.shields.io/david/derhuerst/svg-patterns.svg)](https://david-dm.org/derhuerst/svg-patterns)
[![dev dependency status](https://img.shields.io/david/dev/derhuerst/svg-patterns.svg)](https://david-dm.org/derhuerst/svg-patterns#info=devDependencies)
![ISC-licensed](https://img.shields.io/github/license/derhuerst/svg-patterns.svg)


## Installing

```shell
npm install svg-patterns
```


## Usage

### Getting Started

```js
const patterns = require('svg-patterns')
const stringify = require('virtual-dom-stringify')

const pattern = patterns.lines({
	stroke: 'darkorange',
	background: '#343434'
})

process.stdout.write(`
	<svg xmlns="http://www.w3.org/2000/svg">
		<defs>${stringify(pattern)}</defs>
		<rect width="200" height="200" style="fill: ${pattern.url()}"/>
	</svg>
`)
```

![a simple pattern](https://cdn.rawgit.com/derhuerst/svg-patterns/master/examples/simple.svg)

### `lines([opt])`

Default `opt`:

```js
const defaults = {
	size: 10, // size of the pattern
	strokeWidth: 2,
	stroke: '#343434', // any SVG-compatible color
	background: null, // any SVG-compatible color
	orientations: [45]
}
```

### `circles([opt])`

Default `opt`:

```js
const defaults = {
	size: 10, // size of the pattern
	radius: 2,
	fill: '#545454', // any SVG-compatible color
	strokeWidth: 0,
	stroke: '#343434', // any SVG-compatible color
	background: null, // any SVG-compatible color
	complement: false
}
```

### `paths(style, [opt])`

`style` must one of `squares`, `nylon`, `waves`, `woven`, `crosses`, `caps`, `hexagons`.

Default `opt`:

```js
const defaults = {
	size: 10, // size of the pattern
	fill: '#545454', // any SVG-compatible color
	strokeWidth: 0,
	stroke: '#343434', // any SVG-compatible color
	background: null // any SVG-compatible color
}
```

## Contributing

If you **have a question**, **found a bug** or want to **propose a feature**, have a look at [the issues page](https://github.com/derhuerst/svg-patterns/issues).
