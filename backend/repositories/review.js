var Repository = require('../units/Repository');
var Review = require('../schemas/review');

var ReviewRepository = function(){
	Repository.prototype.constructor.call(this);
	this.model = Review;
};

ReviewRepository.prototype = new Repository();

ReviewRepository.prototype.getAllByProductId = function(id, callback) {

	var model = this.model;

	model
		.find({
			idEntry: id
		})
		.populate('idUser')
		.exec(callback);
};

module.exports = new ReviewRepository();