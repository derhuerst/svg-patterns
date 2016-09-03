'use strict'

const shortid = require('shortid').generate
const h = require('virtual-dom/h')

const pattern = require('./pattern')



const round = (x) => Math.round(x * 1000) / 1000

const path = (parts, close) =>
	parts.map((part) => part[0] + round(part[1]) + ',' + round(part[2]))
	.join('')
	+ (close ? 'z' : '')

const squares = (s) => path([
	, ['M', s/4, s/4]
	, ['l', s/2, 0], ['l', 0, s/2], ['l', -s/2, 0]
], true)

const nylon = (s) => path([
	  ['M', 0, s/4], ['l', s/4, 0], ['l', 0, -s/4]
	, ['M', s*3/4, s], ['l', 0, -s/4], ['l', s/4, 0]
	, ['M', s/4, s/2], ['l', 0, s/4], ['l', s/4, 0]
	, ['M', s/2, s/4], ['l', s/4, 0], ['l', 0, s/4]
], false)

const styles = {squares, nylon}



const defaults = {
	size: 10,
	fill: '#545454',
	strokeWidth: 0,
	stroke: '#343434',
	background: null
}

const paths = (style, opt = {}) => {
	if (!(style in styles)) throw new Error('unknown style')
	opt = Object.assign({}, defaults, opt)

	const children = [h('path', {
		d: styles[style](opt.size),
		fill: opt.fill,
		stroke: opt.stroke, 'stroke-width': opt.strokeWidth,
		'stroke-linecap': 'square'
	})]

	return pattern(opt.id || shortid(6), opt.size, children, opt.background)
}

module.exports = paths
