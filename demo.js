'use strict'

const stringify = require('virtual-dom-stringify')
const patterns = require('./index.js')



const type = document.querySelector('#demo-type')
const opt = document.querySelector('#demo-options')
const defs = document.querySelector('#demo-target defs')

const defaults = {
	id: 'demo-pattern',
	size: 20
}

const render = () => {
	const t = type.value.split(',')
	const o = Object.assign({}, defaults, JSON.parse(opt.value))

	const pattern = t.length === 1 ? patterns[t[0]](o) : patterns[t[0]](t[1], o)
	defs.innerHTML = stringify(pattern)
}

type.addEventListener('change', render)
opt.addEventListener('change', render)
opt.addEventListener('keypress', () => setTimeout(render, 5))
setTimeout(render, 0)
