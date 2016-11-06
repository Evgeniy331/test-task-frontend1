var Repository = require('../units/Repository');
var Product = require('../schemas/product');

var ProductRepository = function(){
	Repository.prototype.constructor.call(this);
	this.model = Product;
};

ProductRepository.prototype = new Repository();

module.exports = new ProductRepository();