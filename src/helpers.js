'use strict'

const dom = require('virtual-dom/h')



const shortid = (l) =>
	Math.round(Math.random() * 26 + 10).toString(36)
	+ new Array(l - 1)
		.fill(null)
		.map(() => Math.round(Math.random() * 36).toString(36))
		.join('')

const command = (name) => (...vs) => name + vs.map(Math.round).join(',')

const M = command('M')
const l = command('l')
const c = command('c')
const v = command('v')
const a = command('a')



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

module.exports = {M, l, c, v, pattern, pathPattern}
