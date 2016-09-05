'use strict'

const shortid = require('shortid').generate
const dom = require('virtual-dom/h')



const round = (x) => Math.round(x * 1000) / 1000

const command = (name) => (...vs) => name + vs.map(round).join(',')

const M = command('M')
const l = command('l')
const c = command('c')



const pattern = (_) => {
	const {width, height, bg} = _
	let {children} = _
	const id = _.id || shortid(6)

	if (bg) children = [
		dom('rect', {
			width: width + '', height: height + '',
			fill: bg
		})
	].concat(children || [])

	const pattern = dom('pattern', {
		id, width, height,
		patternUnits: 'userSpaceOnUse'
	}, children)

	pattern.url = () => `url(#${id})`
	return pattern
}

const pathPattern = (_) => {
	const {d, stroke, strokeWidth, children} = _
	const path = dom('path', {
		d, stroke, 'stroke-width': strokeWidth + '',
		'stroke-linecap': 'square'
	})
	_ = Object.assign({}, _, {
		children: [path].concat(children || [])
	})
	return pattern(_)
}

module.exports = {round, M, l, c, pattern, pathPattern}
