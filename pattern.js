'use strict'

const h = require('virtual-dom/h')

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

module.exports = pattern
