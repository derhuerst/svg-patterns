'use strict'

const dom = require('virtual-dom/h')

const {M, l, pattern} = require('../helpers')



// credit to @riccardoscalco!
// taken from https://github.com/riccardoscalco/textures/blob/ca09566cb9e2dd0bf572639a7e17a9a96717c5e1/textures.coffee#L303

const tile = (s) =>
	  M(s/4, s/4)   + l(s/2, s/2)
	+ M(s/4, s*3/4) + l(s/2, -s/2)



const defaults = {
	size: 10, // size of the pattern
	fill: 'none', // any SVG-compatible color
	strokeWidth: .8,
	stroke: '#343434', // any SVG-compatible color
	background: null // any SVG-compatible color
}

const crosses = (opt = {}) => {
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

module.exports = crosses
