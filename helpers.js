'use strict'

const h = require('virtual-dom/h')



const round = (x) => Math.round(x * 1000) / 1000

const command = (name) => (...vs) => name + vs.map(round).join(',')

const M = command('M')
const l = command('l')
const c = command('c')



const pattern = (id, width, height, children, background) => {
	if (background) children = [
		h('rect', {width, height, fill: background})
	].concat(children)

	const pattern = h('pattern', {
		id, patternUnits: 'userSpaceOnUse',
		width, height
	}, children)
	pattern.url = () => `url(#${id})`

	return pattern
}

module.exports = {round, M, l, c, pattern}
