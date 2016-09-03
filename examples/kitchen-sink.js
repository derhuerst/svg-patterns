'use strict'

const patterns = require('../index')
const stringify = require('virtual-dom-stringify')
const h = require('virtual-dom/h')



const lines1 = patterns.lines({
	size: 10,
	strokeWidth: 1,
	stroke: 'darkorange',
	background: '#343434',
	orientations: [0, 45]
})

const circles = patterns.circles({
	size: 15,
	radius: 2,
	strokeWidth: 1,
	complement: true
})

const squares = patterns.paths('squares', {
	background: '#c0392b',
	fill: 'none',
	stroke: '#fff',
	strokeWidth: 1
})

const nylon = patterns.paths('nylon', {
	size: 15,
	fill: 'none',
	strokeWidth: 1
})

const waves = patterns.paths('waves', {
	background: '#2980b9',
	fill: 'none',
	stroke: '#fff',
	strokeWidth: 1
})

const woven = patterns.paths('woven', {
	background: '#2980b9',
	stroke: '#fff',
	strokeWidth: 1
})

const crosses = patterns.paths('crosses', {
	background: '#343434',
	size: 8,
	stroke: 'darkorange',
	strokeWidth: .6
})

const caps = patterns.paths('caps', {
	fill: 'none',
	size: 7,
	strokeWidth: .7
})

const hexagons = patterns.paths('hexagons', {
	background: '#343434',
	stroke: 'darkorange',
	fill: 'none',
	strokeWidth: 1
})

const lines2 = patterns.lines({
	size: 4,
	strokeWidth: .5,
	stroke: '#000',
	orientations: [90]
})



const rect = (x, y, pattern) => h('rect', {
	width: 100, height: 100,
	x: x * 100 + '', y: y * 100 + '',
	style: {fill: pattern.url()}
})

process.stdout.write(stringify(
	h('svg', {
		width: 1000, height: 400, viewBox: '0 0 500 200',
		xmlns: 'http://www.w3.org/2000/svg'
	}, [
		h('defs', [
			lines1, circles, squares, nylon, waves,
			woven, crosses, caps, hexagons, lines2
		]),
		rect(0, 0, lines1),
		rect(1, 0, circles),
		rect(2, 0, squares),
		rect(3, 0, nylon),
		rect(4, 0, waves),
		rect(0, 1, woven),
		rect(1, 1, crosses),
		rect(2, 1, caps),
		rect(3, 1, hexagons),
		rect(4, 1, lines2)
	])
))
