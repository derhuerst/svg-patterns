'use strict'

const dom = require('virtual-dom/h')

const {M, l, pattern} = require('../helpers')



const tile = (s) => {
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

const ratio = 1.5



const defaults = {
	size: 14, // size of the pattern
	fill: 'none', // any SVG-compatible color
	strokeWidth: .6,
	stroke: '#343434', // any SVG-compatible color
	background: null // any SVG-compatible color
}

const rhombic3d = (opt = {}) => {
	opt = Object.assign({}, defaults, opt)

	Object.assign(opt, {
		width: opt.size * ratio, height: opt.size,
		bg: opt.background,
		children: [dom('path', {
			d: tile(opt.size),
			fill: opt.fill,
			stroke: opt.stroke, 'stroke-width': opt.strokeWidth + '',
			'stroke-linecap': 'square'
		})]
	})
	return pattern(opt)
}

module.exports = rhombic3d
