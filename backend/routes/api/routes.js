const product = require('./product');
const review = require('./review');
const user = require('./user');
const register = require('./register');
const auth = require('./auth');
const checkToken = require('../../middleware/checkToken')

module.exports = function(app){
	
	app.use('/api/products', product);
	app.use('/api/reviews', review);
	app.use('/api/users', user);
	app.use('/api/register', register);
	app.use('/api', auth);
	app.use(checkToken);	
};