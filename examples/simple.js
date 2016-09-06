const lines = require('../p/lines')
const stringify = require('virtual-dom-stringify')

const pattern = lines({
	stroke: 'darkorange',
	background: '#343434'
})

process.stdout.write(`
	<svg xmlns="http://www.w3.org/2000/svg">
		<defs>${stringify(pattern)}</defs>
		<rect width="200" height="200" style="fill: ${pattern.url()}"/>
	</svg>
`)
