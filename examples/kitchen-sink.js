'use strict'

const patterns = require('../index')
const stringify = require('virtual-dom-stringify')
const h = require('virtual-dom/h')



const lines1 = patterns.lines({
	size: 10,
	strokeWidth: 1,
	orientations: [0, 45],
	stroke: '#fdf5e6',
	background: '#343434'
})

const circles = patterns.circles({
	size: 15,
	radius: 3,
	complement: true,
	fill: '#c0392b',
	background: '#fdf5e6'
})

const squares = patterns.paths('squares', {
	fill: 'none',
	strokeWidth: .9,
	stroke: '#fdf5e6',
	background: '#2980b9'
})

const nylon = patterns.paths('nylon', {
	size: 15,
	strokeWidth: 1,
	stroke: '#343434',
	fill: 'none',
	background: '#c0392b'
})

const waves = patterns.paths('waves', {
	strokeWidth: 1,
	fill: 'none',
	stroke: '#fdf5e6',
	background: '#343434'
})

const woven = patterns.paths('woven', {
	strokeWidth: 1.2,
	stroke: '#c0392b',
	background: '#fdf5e6'
})

const crosses = patterns.paths('crosses', {
	size: 10,
	strokeWidth: .8,
	stroke: '#fdf5e6',
	background: '#2980b9'
})

const caps = patterns.paths('caps', {
	size: 9,
	strokeWidth: 1,
	stroke: '#343434',
	fill: 'none',
	background: '#c0392b'
})

const hexagons = patterns.paths('hexagons', {
	strokeWidth: 1,
	fill: 'none',
	stroke: '#fdf5e6',
	background: '#343434'
})

const rhombic = patterns.paths('rhombic3d', {
	size: 14,
	strokeWidth: 1,
	fill: 'none',
	stroke: '#c0392b',
	background: '#fdf5e6'
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
			woven, crosses, caps, hexagons, rhombic
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
		rect(4, 1, rhombic)
	])
))
