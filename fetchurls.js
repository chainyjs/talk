require('chainy').require('set map feedr').create()
	.set(process.argv.slice(2))
	.map(function(url, next){
		this.create().set(url).feed().done(next)
	})