'use strict'

const dom = require('virtual-dom/h')

const {M, l, pattern} = require('../helpers')



const tile = (o, s) => {
	if (o % 180 === 0)
		return M(s/2, 0) + l(0, s)
	if (o % 180 === 45)
		return M(0, s) + l(s, -s)
		+ M(-s/4, s/4) + l(s/2, -s/2)
		+ M(s*3/4, s*5/4) + l(s/2, -s/2);
	if (o % 180 === -45)
		return M(s, s) + l(-s, -s)
		+ M(s*5/4, s/4) + l(-s/2, -s/2)
		+ M(s/4, s*5/4) + l(-s/2, -s/2);
	if (o % 180 === 90)
		return M(0, s/2) + l(s, 0)
	return ''
}



const defaults = {
	size: 8, // size of the pattern
	strokeWidth: .7,
	stroke: '#343434', // any SVG-compatible color
	background: null, // any SVG-compatible color
	orientations: [45] // can be any combination of 0, 45, -45, 90
}

const lines = (opt = {}) => {
	opt = Object.assign({}, defaults, opt)
	const orientations = opt.orientations
		? Array.isArray(opt.orientations)
			? opt.orientations : [opt.orientations]
		: [0,45]

	Object.assign(opt, {
		width: opt.size, height: opt.size,
		bg: opt.background,
		children: orientations.map((orientation) =>
			dom('path', {
				d: tile(orientation, opt.size),
				stroke: opt.stroke, 'stroke-width': opt.strokeWidth + '',
				'stroke-linecap': 'square'
			}))
	})
	return pattern(opt)
}

module.exports = lines
