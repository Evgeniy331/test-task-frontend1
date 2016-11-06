var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var productSchema = new Schema({
	title: String,
	image: String,
	text: String
});

module.exports = mongoose.model('Product', productSchema);