'use strict'

const dom = require('virtual-dom/h')

const {M, l, round, pattern} = require('../helpers')



// credit to @riccardoscalco!
// taken from https://github.com/riccardoscalco/textures/blob/ca09566cb9e2dd0bf572639a7e17a9a96717c5e1/textures.coffee#L307

const tile = (s) => {
	const x = s * Math.tan(Math.PI/6) * .5
	const e = s * .5 / Math.cos(Math.PI/6)
	return M(0, s/2) + l(x, s/2) + l(e, 0) + l(x, -s/2)
		+ l(-x, -s/2) + l(-e, 0) + l(-x, s/2) + 'Z'
		+ M(x+e+x, s/2) + l(e, 0)
}

const ratio = round(Math.tan(Math.PI/6) + 1/Math.cos(Math.PI/6))



const defaults = {
	size: 10, // size of the pattern
	fill: 'none', // any SVG-compatible color
	strokeWidth: 1,
	stroke: '#343434', // any SVG-compatible color
	background: null // any SVG-compatible color
}

const hexagons = (opt = {}) => {
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

module.exports = hexagons
