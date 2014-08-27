require('chainy-core').require('jquery').create()
	.jquery('#id') // task
	.val('some value') // task
	.click(function(){  // task
		window.alert('My value is: '+this.val())
	})