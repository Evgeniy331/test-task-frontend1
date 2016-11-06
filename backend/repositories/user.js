var Repository = require('../units/Repository');
var User = require('../schemas/user');

var UserRepository = function(){
	Repository.prototype.constructor.call(this);
	this.model = User;
};

UserRepository.prototype = new Repository();

UserRepository.prototype.getAllUsernames = function(callback){
	var model = this.model;
	var query = model.find({}, { _id: 0, username: 1});
	query.exec(callback);
};

UserRepository.prototype.getByUsernameAndPassword = function(username, password, callback) {
	var model = this.model;

	var options = {
		username: username,
		password: password,
	};

	model
		.findOne(options)
		.select("username")
		.exec(callback);
};

module.exports = new UserRepository();