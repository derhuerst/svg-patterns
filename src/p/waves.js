'use strict'

const dom = require('virtual-dom/h')

const {M, c, pattern} = require('../helpers')



// credit to @riccardoscalco!
// taken from https://github.com/riccardoscalco/textures/blob/ca09566cb9e2dd0bf572639a7e17a9a96717c5e1/textures.coffee#L294

const tile = (s) =>
	  M(0, s/2)
	+ c(s/8, -s/4, s*3/8, -s/4, s/2, 0)
	+ c(s/8, s/4, s*3/8, s/4, s/2, 0)



const defaults = {
	size: 8, // size of the pattern
	fill: 'none', // any SVG-compatible color
	strokeWidth: .8,
	stroke: '#343434', // any SVG-compatible color
	background: null // any SVG-compatible color
}

const waves = (opt = {}) => {
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

module.exports = waves
