# [svg-patterns](https://derhuerst.github.io/svg-patterns/)

**Create SVG patterns programmatically to visualize data,** to [help color-blind people](https://web.archive.org/web/20171016120330/http://betweentwobrackets.com/data-graphics-and-colour-vision/) and because it looks nice.

[![npm version](https://img.shields.io/npm/v/svg-patterns.svg)](https://www.npmjs.com/package/svg-patterns)
[![build status](https://api.travis-ci.org/derhuerst/svg-patterns.svg?branch=master)](https://travis-ci.org/derhuerst/svg-patterns)
![ISC-licensed](https://img.shields.io/github/license/derhuerst/svg-patterns.svg)
![minimum Node.js version](https://img.shields.io/node/v/svg-patterns.svg)
[![support me via GitHub Sponsors](https://img.shields.io/badge/support%20me-donate-fa7664.svg)](https://github.com/sponsors/derhuerst)
[![chat with me on Twitter](https://img.shields.io/badge/chat%20with%20me-on%20Twitter-1da1f2.svg)](https://twitter.com/derhuerst)

![a simple pattern](examples/kitchen-sink.svg)

This library is inspired by [Textures.js](http://riccardoscalco.github.io/textures/) but tries to do a few things differently:

- `svg-patterns` does not limit you in which frontend stack you use. It just returns [virtual-dom nodes](https://github.com/Matt-Esch/virtual-dom#dom-model).
- Because [Textures.js](http://riccardoscalco.github.io/textures/) includes [D3](https://d3js.org/), it weighs `216k + 8k`. `svg-patterns` weighs `19k`.


## Installing

```shell
npm install svg-patterns
```


## Usage

**`svg-patterns` exposes several styles, which you can customize by passing an object. The following list shows all styles, including their default options.** You can [fiddle with them on the website](https://derhuerst.github.io/svg-patterns/).

### Getting Started

If you load a style via `require('svg-patterns/p/style')`, the bundle will be smaller. But you can also load it via `require('svg-patterns').style`.

```js
const lines = require('svg-patterns/p/lines')
const stringify = require('virtual-dom-stringify')

const pattern = lines({
	stroke: 'darkorange',
	background: '#343434',
	orientations: [45]
})

process.stdout.write(`
	<svg xmlns="http://www.w3.org/2000/svg">
		<defs>${stringify(pattern)}</defs>
		<rect width="200" height="200" style="fill: ${pattern.url()}"/>
	</svg>
`)
```

![a simple pattern](https://cdn.rawgit.com/derhuerst/svg-patterns/master/examples/simple.svg)

### `caps` style

```js
const defaults = {
	size: 9, // size of the pattern
	fill: 'none', // any SVG-compatible color
	strokeWidth: .9,
	stroke: '#343434', // any SVG-compatible color
	background: null // any SVG-compatible color
}
```

### `circles` style

```js
const defaults = {
	size: 15, // size of the pattern
	radius: 3,
	complement: true,
	fill: '#545454', // any SVG-compatible color
	strokeWidth: 0,
	stroke: 'none', // any SVG-compatible color
	background: null // any SVG-compatible color
}
```

### `crosses` style

```js
const defaults = {
	size: 10, // size of the pattern
	fill: 'none', // any SVG-compatible color
	strokeWidth: .8,
	stroke: '#343434', // any SVG-compatible color
	background: null // any SVG-compatible color
}
```

### `hexagons` style

```js
const defaults = {
	size: 10, // size of the pattern
	fill: 'none', // any SVG-compatible color
	strokeWidth: 1,
	stroke: '#343434', // any SVG-compatible color
	background: null // any SVG-compatible color
}
```

### `lines` style

```js
const defaults = {
	size: 8, // size of the pattern
	strokeWidth: .7,
	stroke: '#343434', // any SVG-compatible color
	background: null, // any SVG-compatible color
	orientations: [45] // can be any combination of 0, 45, -45, 90
}
```

### `nylon` style

```js
const defaults = {
	size: 15, // size of the pattern
	fill: 'none', // any SVG-compatible color
	strokeWidth: 1,
	stroke: '#343434', // any SVG-compatible color
	background: null // any SVG-compatible color
}
```

### `rhombic` style

```js
const defaults = {
	size: 12, // size of the pattern
	fill: 'none', // any SVG-compatible color
	strokeWidth: .9,
	stroke: '#343434', // any SVG-compatible color
	background: null // any SVG-compatible color
}
```

### `rhombic3d` style

```js
const defaults = {
	size: 14, // size of the pattern
	fill: 'none', // any SVG-compatible color
	strokeWidth: .6,
	stroke: '#343434', // any SVG-compatible color
	background: null // any SVG-compatible color
}
```

### `squares` style

```js
const defaults = {
	size: 10, // size of the pattern
	fill: 'none', // any SVG-compatible color
	strokeWidth: .9,
	stroke: '#343434', // any SVG-compatible color
	background: null // any SVG-compatible color
}
```

### `waves` style

```js
const defaults = {
	size: 8, // size of the pattern
	fill: 'none', // any SVG-compatible color
	strokeWidth: .8,
	stroke: '#343434', // any SVG-compatible color
	background: null // any SVG-compatible color
}
```

### `woven` style

```js
const defaults = {
	size: 9, // size of the pattern
	fill: 'none', // any SVG-compatible color
	strokeWidth: 1,
	stroke: '#343434', // any SVG-compatible color
	background: null // any SVG-compatible color
}
```


## See also

- [`svg-world-map`](https://github.com/derhuerst/svg-world-map) – Render a world map with a pin at a specific location.
- [`svg-radar-chart`](https://github.com/derhuerst/svg-radar-chart) – A reusable radar chart in SVG.


## Contributing

If you have a question or need support using `svg-patterns`, please double-check your code and setup first. If you think you have found a bug or want to propose a feature, use [the issues page](https://github.com/derhuerst/svg-patterns/issues).
