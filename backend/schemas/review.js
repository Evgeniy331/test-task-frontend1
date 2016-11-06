var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
	text: String,
	rate: {
		type: Number,
		default: 1,
		min: 1
	},
	idUser: {
		type: Schema.Types.ObjectId,
		ref: 'User',
		required: true
	},
	idEntry: {
		type: Schema.Types.ObjectId,
		ref: 'Product',
		required: true
	}
});

module.exports = mongoose.model('Review', userSchema);