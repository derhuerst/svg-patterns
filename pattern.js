'use strict'

const h = require('virtual-dom/h')

const pattern = (id, size, children, background) => {

	if (background) children = [
		h('rect', {width: size, height: size, fill: background})
	].concat(children)

	const pattern = h('pattern', {
		id, patternUnits: 'userSpaceOnUse',
		width: size, height: size
	}, children)
	pattern.url = () => `url(#${id})`

	return pattern
}

module.exports = pattern
