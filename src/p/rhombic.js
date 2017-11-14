'use strict'

const dom = require('virtual-dom/h')

const {M, l, pattern} = require('../helpers')



const tile = (s) =>
	  M(0, 0) + l(s/2, s) + l(s/2, -s)
	+ M(0, s) + l(s/2, -s) + l(s/2, s)



const defaults = {
	size: 12, // size of the pattern
	fill: 'none', // any SVG-compatible color
	strokeWidth: .9,
	stroke: '#343434', // any SVG-compatible color
	background: null // any SVG-compatible color
}

const rhombic = (opt = {}) => {
	opt = Object.assign({}, defaults, opt)

	Object.assign(opt, {
		width: opt.size, height: opt.size,
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

module.exports = rhombic
