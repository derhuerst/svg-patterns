'use strict'

const patterns = require('../index')
const toHTML = require('vdom-to-html')
const h = require('virtual-dom/h')



const lines1 = patterns.lines({
	stroke: '#fdf5e6',
	background: '#343434'
})

const circles = patterns.circles({
	fill: '#c0392b',
	background: '#fdf5e6'
})

const squares = patterns.squares({
	stroke: '#fdf5e6',
	background: '#2980b9'
})

const nylon = patterns.nylon({
	stroke: '#343434',
	background: '#c0392b'
})

const waves = patterns.waves({
	stroke: '#fdf5e6',
	background: '#343434'
})

const woven = patterns.woven({
	stroke: '#c0392b',
	background: '#fdf5e6'
})

const crosses = patterns.crosses({
	stroke: '#fdf5e6',
	background: '#2980b9'
})

const caps = patterns.caps({
	stroke: '#343434',
	background: '#c0392b'
})

const hexagons = patterns.hexagons({
	stroke: '#fdf5e6',
	background: '#343434'
})

const rhombic = patterns.rhombic({
	stroke: '#c0392b',
	background: '#fdf5e6'
})

const rhombic3d = patterns.rhombic3d({
	stroke: '#fdf5e6',
	background: '#2980b9'
})



const rect = (x, y, pattern) => h('rect', {
	width: 100, height: 100,
	x: x * 100 + '', y: y * 100 + '',
	style: {fill: pattern.url()}
})

process.stdout.write(toHTML(
	h('svg', {
		width: 1000, height: 600, viewBox: '0 0 500 300',
		xmlns: 'http://www.w3.org/2000/svg'
	}, [
		h('defs', [
			lines1, circles, squares, nylon, waves,
			woven, crosses, caps, hexagons, rhombic,
			rhombic3d
		]),
		rect(0, 0, lines1),
		rect(1, 0, circles),
		rect(2, 0, squares),
		rect(3, 0, nylon),
		rect(0, 1, waves),
		rect(1, 1, woven),
		rect(2, 1, crosses),
		rect(3, 1, caps),
		rect(0, 2, hexagons),
		rect(1, 2, rhombic),
		rect(2, 2, rhombic3d)
	])
))
