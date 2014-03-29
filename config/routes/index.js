module.exports.routes = {
	'root' : {
		verb : 'get',
 		to : 'home',
 		action : 'index'
	},
	'/home' : {
		resources : 'home'
	}
}
