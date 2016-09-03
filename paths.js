'use strict'

const shortid = require('shortid').generate
const h = require('virtual-dom/h')

const pattern = require('./pattern')



const round = (x) => Math.round(x * 1000) / 1000

const path = (parts, close) => parts
	.map((p) => 'number' === typeof p ? Math.round(p * 1000) / 1000 : p)
	.join(' ')
	+ (close ? 'z' : '')

// credit to @riccardoscalco!
// taken from https://github.com/riccardoscalco/textures/blob/ca09566cb9e2dd0bf572639a7e17a9a96717c5e1/textures.coffee#L278-L306

const squares = (s) => path([
	'M',s/4,s/4,
	'l',s/2,0, 'l',0,s/2, 'l',-s/2,0
], true)

const nylon = (s) => path([
	'M',0,s/4, 'l',s/4,0, 'l',0,-s/4,
	'M',s*3/4,s, 'l',0,-s/4, 'l',s/4,0,
	'M',s/4,s/2, 'l',0,s/4, 'l',s/4,0,
	'M',s/2,s/4, 'l',s/4,0, 'l',0,s/4
])

// slightly adapted
const waves = (s) => path([
	'M',0,s/2,
	'c',s/8,-s/4,s*3/8,-s/4,s/2,0,
	'c',s/8,s/4,s*3/8,s/4,s/2,0
])

const woven = (s) => path([
	'M',s/4,s/4, 'l',s/2,s/2,
	'M',s*3/4,s/4, 'l',s/2,-s/2,
	'M',s/4,s*3/4, 'l',-s/2,s/2,
	'M',s*3/4,s*5/4, 'l',s/2,-s/2,
	'M',-s/4,s/4, 'l',s/2,-s/2
])

const crosses = (s) => path([
	'M',s/4,s/4, 'l',s/2,s/2,
	'M',s/4,s*3/4, 'l',s/2,-s/2
])

const caps = (s) => path([
	'M',s/4,s*3/4, 'l',s/4,-s/2, 'l',s/4,s/2
])

const styles = {squares, nylon, waves, woven, crosses, caps, hexagons}



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
		stroke: opt.stroke, 'stroke-width': opt.strokeWidth + '',
		'stroke-linecap': 'square'
	})]

	return pattern(opt.id || shortid(6), opt.size, children, opt.background)
}

module.exports = paths
