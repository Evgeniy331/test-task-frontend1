module.exports = {
	uri: 'mongodb://localhost/products-app',
	opts: {
		server: { 
			auto_reconnect: true,
			poolSize: 40
		},
		user: 'root'
	}
};