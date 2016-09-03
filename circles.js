'use strict'

const shortid = require('shortid').generate
const h = require('virtual-dom/h')

const pattern = require('./pattern')



const defaults = {
	size: 10,
	radius: 2,
	fill: '#545454',
	strokeWidth: 0,
	stroke: '#343434',
	background: null,
	complement: false
}

const circles = (opt = {}) => {
	opt = Object.assign({}, defaults, opt)
	const s = opt.size

	const children = [
		h('circle', {
			cx: s/2, cy: s/2, r: opt.radius,
			fill: opt.fill,
			stroke: opt.stroke, 'stroke-width': opt.strokeWidth
		})
	]

	if (opt.complement === true)
		for (let [x, y] of [[0,0], [0, s], [s, s], [s, 0]]) children.push(
			h('circle', {
				cx: x, cy: y, r: opt.radius,
				fill: opt.fill,
				stroke: opt.stroke, 'stroke-width': opt.strokeWidth
			}))

	return pattern(opt.id || shortid(6), opt.size, children, opt.background)
}

module.exports = circles
