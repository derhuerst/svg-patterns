'use strict'

const shortid = require('shortid').generate
const h = require('virtual-dom/h')

const {M, l, c, round, pattern} = require('./helpers')



const tile = (o, s) => {
	if (o % 180 === 0)
		return M(s/2, 0) + l(0, s)
	if (o % 180 === 45)
		return M(0, s) + l(s, -s)
		+ M(-s/4, s/4) + l(s/2, -s/2)
		+ M(s*3/4, s*5/4) + l(s/2, -s/2);
	if (o % 180 === 90)
		return M(0, s/2) + l(s, 0)
	return ''
}



const defaults = {
	size: 10, // size of the pattern
	strokeWidth: 2,
	stroke: '#343434', // any SVG-compatible color
	background: null, // any SVG-compatible color
	orientations: [45]
}

const lines = (opt = {}) => {
	opt = Object.assign({}, defaults, opt)
	if (opt.orientations && !Array.isArray(opt.orientations))
		opt.orientations = opt.orientations ? [opt.orientations] : []
	const children = []

	for (let orientation of opt.orientations)
		children.push(h('path', {
			d: tile(orientation, opt.size),
			stroke: opt.stroke, 'stroke-width': opt.strokeWidth + '',
			'stroke-linecap': 'square'
		}))

	return pattern(
		opt.id || shortid(6),
		opt.size, opt.size,
		children, opt.background
	)
}

module.exports = lines
