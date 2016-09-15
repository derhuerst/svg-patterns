const lines = require('../p/lines')
const toHTML = require('vdom-to-html')

const pattern = lines({
	stroke: 'darkorange',
	background: '#343434',
	orientations: [45]
})

process.stdout.write(`
	<svg xmlns="http://www.w3.org/2000/svg">
		<defs>${toHTML(pattern)}</defs>
		<rect width="200" height="200" style="fill: ${pattern.url()}"/>
	</svg>
`)
