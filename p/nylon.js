'use strict'

const dom = require('virtual-dom/h')

const {M, l, pattern} = require('../helpers')



// credit to @riccardoscalco!
// taken from https://github.com/riccardoscalco/textures/blob/ca09566cb9e2dd0bf572639a7e17a9a96717c5e1/textures.coffee#L290

const tile = (s) =>
	  M(0, s/4)   + l(s/4, 0)  + l(0, -s/4)
	+ M(s*3/4, s) + l(0, -s/4) + l(s/4, 0)
	+ M(s/4, s/2) + l(0, s/4)  + l(s/4, 0)
	+ M(s/2, s/4) + l(s/4, 0)  + l(0, s/4)



const defaults = {
	size: 15, // size of the pattern
	fill: 'none', // any SVG-compatible color
	strokeWidth: 1,
	stroke: '#343434', // any SVG-compatible color
	background: null // any SVG-compatible color
}

const nylon = (opt = {}) => {
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

module.exports = nylon
