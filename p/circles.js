'use strict'

const dom = require('virtual-dom/h')

const {pattern} = require('../helpers')



const defaults = {
	size: 15, // size of the pattern
	radius: 3,
	complement: true,
	fill: '#545454', // any SVG-compatible color
	strokeWidth: 0,
	stroke: 'none', // any SVG-compatible color
	background: null // any SVG-compatible color
}

const circles = (opt = {}) => {
	opt = Object.assign({}, defaults, opt)
	const s = opt.size

	const children = [
		dom('circle', {
			cx: s/2, cy: s/2, r: opt.radius,
			fill: opt.fill,
			stroke: opt.stroke, 'stroke-width': opt.strokeWidth + ''
		})
	]
	if (opt.complement === true)
		for (let [x, y] of [[0,0], [0, s], [s, s], [s, 0]]) children.push(
			dom('circle', {
				cx: x, cy: y, r: opt.radius,
				fill: opt.fill,
				stroke: opt.stroke, 'stroke-width': opt.strokeWidth + ''
			}))

	Object.assign(opt, {
		width: opt.size, height: opt.size,
		children,
		bg: opt.background
	})
	return pattern(opt)
}

module.exports = circles
