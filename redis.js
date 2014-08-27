// Connect to client
var r = require('redis').createClient()

// Do some stuff with the database
require('chainy')
	.redis({client:r})
	.create()

	// .rhset('table', 'id', 'value')
	// .rget('table', 'id', 'value')

	.set('mytable')
	.log()
	.rhset('id', 'value')
	.log()
	.rget('id', 'value')
	.log()