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
	ratio: round(Math.tan(Math.PI/6) + 1/Math.cos(Math.PI/6)),
	path: (s) => {
		const x = s * Math.tan(Math.PI/6) * .5
		const e = s * .5 / Math.cos(Math.PI/6)
		return M(0, s/2) + l(x, s/2) + l(e, 0) + l(x, -s/2)
			+ l(-x, -s/2) + l(-e, 0) + l(-x, s/2) + 'Z'
			+ M(x+e+x, s/2) + l(e, 0)
	}
}

const rhombic = {
	ratio: 1,
	path: (s) =>
		  M(0, 0) + l(s/2, s) + l(s/2, -s)
		+ M(0, s) + l(s/2, -s) + l(s/2, s)
}

const rhombic3d = {
	ratio: 1.5,
	path: (s) => {
		const w = s * 1.5 / 4
		const h = s / 4
		return ''
		// 1. vertical
		+ M(1*w, 0*h) + l(0, 1*h)
		+ M(3*w, 0*h) + l(0, 1*h)
		// 2. vertical
		+ M(0*w, 1*h) + l(0, 2*h)
		+ M(2*w, 1*h) + l(0, 2*h)
		+ M(4*w, 1*h) + l(0, 2*h)
		// 3. vertical
		+ M(1*w, 3*h) + l(0, 1*h)
		+ M(3*w, 3*h) + l(0, 1*h)
		// 1. zig-zag
		+ M(0*w, 1*h) + l(1*w, -1*h) + l(1*w,  1*h) + l(1*w, -1*h) + l(1*w,  1*h)
		// 2. zig-zag
		+ M(0*w, 2*h) + l(1*w, -1*h) + l(1*w,  1*h) + l(1*w, -1*h) + l(1*w,  1*h)
		+ M(0*w, 2*h) + l(1*w,  1*h) + l(1*w, -1*h) + l(1*w,  1*h) + l(1*w, -1*h)
		// 3. zig-zag
		+ M(0*w, 3*h) + l(1*w,  1*h) + l(1*w, -1*h) + l(1*w,  1*h) + l(1*w, -1*h)
	}
}

const styles = {squares, nylon, waves, woven, crosses, caps, hexagons, rhombic, rhombic3d}



const defaults = {
	size: 10, // size of the pattern
	fill: '#545454', // any SVG-compatible color
	strokeWidth: 0,
	stroke: '#343434', // any SVG-compatible color
	background: null // any SVG-compatible color
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
