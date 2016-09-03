'use strict'

const shortid = require('shortid').generate
const h = require('virtual-dom/h')

const {M, l, c, round, pattern} = require('./helpers')



// credit to @riccardoscalco!
// taken from https://github.com/riccardoscalco/textures/blob/ca09566cb9e2dd0bf572639a7e17a9a96717c5e1/textures.coffee#L278-L306

const squares = {
	ratio: 1,
	path: (s) =>
		M(s/4, s/4) + l(s/2, 0) + l(0, s/2) + l(-s/2, 0) + 'z'
}

const nylon = {
	ratio: 1,
	path: (s) =>
		  M(0, s/4)   + l(s/4, 0)  + l(0, -s/4)
		+ M(s*3/4, s) + l(0, -s/4) + l(s/4, 0)
		+ M(s/4, s/2) + l(0, s/4)  + l(s/4, 0)
		+ M(s/2, s/4) + l(s/4, 0)  + l(0, s/4)
}

// slightly adapted
const waves = {
	ratio: 1,
	path: (s) =>
		  M(0, s/2)
		+ c(s/8, -s/4, s*3/8, -s/4, s/2, 0)
		+ c(s/8, s/4, s*3/8, s/4, s/2, 0)
}

const woven = {
	ratio: 1,
	path: (s) =>
		  M(s/4, s/4)     + l(s/2, s/2)
		+ M(s*3/4, s/4)   + l(s/2, -s/2)
		+ M(s/4, s*3/4)   + l(-s/2, s/2)
		+ M(s*3/4, s*5/4) + l(s/2, -s/2)
		+ M(-s/4, s/4)    + l(s/2, -s/2)
}

const crosses = {
	ratio: 1,
	path: (s) =>
		  M(s/4, s/4)   + l(s/2, s/2)
		+ M(s/4, s*3/4) + l(s/2, -s/2)
}

const caps = {
	ratio: 1,
	path: (s) =>
		M(s/4, s*3/4) + l(s/4, -s/2) + l(s/4, s/2)
}

const hexagons = {
	ratio: round(Math.tan(Math.PI/6) + Math.cos(Math.PI/6)),
	path: (s) => {
		const x = s * Math.tan(Math.PI/6) * .5
		const e = s * .5 / Math.cos(Math.PI/6)
		return M(0, s/2) + l(x, s/2) + l(e, 0) + l(x, -s/2)
			+ l(-x, -s/2) + l(-e, 0) + l(-x, s/2) + 'Z'
			+ M(x+e, s/2) + l(e, 0)
	}
}

const styles = {squares, nylon, waves, woven, crosses, caps, hexagons}



const defaults = {
	size: 10,
	fill: '#545454',
	strokeWidth: 0,
	stroke: '#343434',
	background: null
}

const paths = (style, opt = {}) => {
	if (!(style in styles)) throw new Error('unknown style')
	style = styles[style]
	opt = Object.assign({}, defaults, opt)

	const children = [h('path', {
		d: style.path(opt.size),
		fill: opt.fill,
		stroke: opt.stroke, 'stroke-width': opt.strokeWidth + '',
		'stroke-linecap': 'square'
	})]

	return pattern(
		opt.id || shortid(6),
		opt.size * style.ratio, opt.size,
		children, opt.background
	)
}

module.exports = paths
