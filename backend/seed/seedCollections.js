var User = require('../schemas/user');
var Product = require('../schemas/product');
var Review = require('../schemas/review');

var mongoose = require('mongoose');
var ObjectId = mongoose.Types.ObjectId;

module.exports = function () {

		let products = [];

		products.push(
			new Product ({
				title: "Grand Theft Auto: Vice City", 
				image: "http://img.dotua.org/fsua_items/cover/00/19/48/10/00194886.jpg",
				text: "Lorem ipsum dolor sit amet, lobortis morbi nunc lobortis vestibulum, magna risus mauris ut curabitur ad. Rhoncus mauris lacinia erat lobortis, facilisi dis, totam diam fusce odio, nam consectetuer accumsan. Ornare massa mattis sed, orci consequat varius dignissim sit per ultricies, sit magna in. Sed dignissim nisl ante, leo a molestie elit scelerisque nulla. Accumsan vehicula posuere, libero amet justo vitae vel augue, suspendisse gravida, dictum scelerisque elit feugiat nisl odio. Mi ante rutrum pellentesque pellentesque, dapibus lobortis in mauris consequat laboriosam quis."
			}).toObject()
		);

		products.push(
			new Product ({
				title: "Mafia III", 
				image: "http://img.dotua.org/fsua_items/cover/00/40/61/10/00406164.jpg",
				text: "Lorem ipsum dolor sit amet, lobortis morbi nunc lobortis vestibulum, magna risus mauris ut curabitur ad. Rhoncus mauris lacinia erat lobortis, facilisi dis, totam diam fusce odio, nam consectetuer accumsan. Ornare massa mattis sed, orci consequat varius dignissim sit per ultricies, sit magna in. Sed dignissim nisl ante, leo a molestie elit scelerisque nulla. Accumsan vehicula posuere, libero amet justo vitae vel augue, suspendisse gravida, dictum scelerisque elit feugiat nisl odio. Mi ante rutrum pellentesque pellentesque, dapibus lobortis in mauris consequat laboriosam quis."
			}).toObject()
		);

		products.push(
			new Product ({
				title: "The Walking Dead: Episode 1", 
				image: "http://img.dotua.org/fsua_items/cover/00/15/40/10/00154082.jpg",
				text: "Lorem ipsum dolor sit amet, lobortis morbi nunc lobortis vestibulum, magna risus mauris ut curabitur ad. Rhoncus mauris lacinia erat lobortis, facilisi dis, totam diam fusce odio, nam consectetuer accumsan. Ornare massa mattis sed, orci consequat varius dignissim sit per ultricies, sit magna in. Sed dignissim nisl ante, leo a molestie elit scelerisque nulla. Accumsan vehicula posuere, libero amet justo vitae vel augue, suspendisse gravida, dictum scelerisque elit feugiat nisl odio. Mi ante rutrum pellentesque pellentesque, dapibus lobortis in mauris consequat laboriosam quis."
			}).toObject()
		);

		products.push(
			new Product ({
				title: "Prototype 2", 
				image: "http://img.dotua.org/fsua_items/cover/00/15/43/10/00154379.jpg",
				text: "Lorem ipsum dolor sit amet, lobortis morbi nunc lobortis vestibulum, magna risus mauris ut curabitur ad. Rhoncus mauris lacinia erat lobortis, facilisi dis, totam diam fusce odio, nam consectetuer accumsan. Ornare massa mattis sed, orci consequat varius dignissim sit per ultricies, sit magna in. Sed dignissim nisl ante, leo a molestie elit scelerisque nulla. Accumsan vehicula posuere, libero amet justo vitae vel augue, suspendisse gravida, dictum scelerisque elit feugiat nisl odio. Mi ante rutrum pellentesque pellentesque, dapibus lobortis in mauris consequat laboriosam quis."
			}).toObject()
		);
		
		products.push(
			new Product ({
				title: "Alan Wake's American Nightmare", 
				image: "http://img.dotua.org/fsua_items/cover/00/15/85/10/00158547.jpg",
				text: "Lorem ipsum dolor sit amet, lobortis morbi nunc lobortis vestibulum, magna risus mauris ut curabitur ad. Rhoncus mauris lacinia erat lobortis, facilisi dis, totam diam fusce odio, nam consectetuer accumsan. Ornare massa mattis sed, orci consequat varius dignissim sit per ultricies, sit magna in. Sed dignissim nisl ante, leo a molestie elit scelerisque nulla. Accumsan vehicula posuere, libero amet justo vitae vel augue, suspendisse gravida, dictum scelerisque elit feugiat nisl odio. Mi ante rutrum pellentesque pellentesque, dapibus lobortis in mauris consequat laboriosam quis."
			}).toObject()
		);
		
		products.push(
			new Product ({
				title: "Assassin's Creed III", 
				image: "http://img.dotua.org/fsua_items/cover/00/14/28/10/00142873.jpg",
				text: "Lorem ipsum dolor sit amet, lobortis morbi nunc lobortis vestibulum, magna risus mauris ut curabitur ad. Rhoncus mauris lacinia erat lobortis, facilisi dis, totam diam fusce odio, nam consectetuer accumsan. Ornare massa mattis sed, orci consequat varius dignissim sit per ultricies, sit magna in. Sed dignissim nisl ante, leo a molestie elit scelerisque nulla. Accumsan vehicula posuere, libero amet justo vitae vel augue, suspendisse gravida, dictum scelerisque elit feugiat nisl odio. Mi ante rutrum pellentesque pellentesque, dapibus lobortis in mauris consequat laboriosam quis."
			}).toObject()
		);
		
		products.push(
			new Product ({
				title: "Metal Gear Rising: Revengeance", 
				image: "http://img.dotua.org/fsua_items/cover/00/16/21/10/00162186.jpg",
				text: "Lorem ipsum dolor sit amet, lobortis morbi nunc lobortis vestibulum, magna risus mauris ut curabitur ad. Rhoncus mauris lacinia erat lobortis, facilisi dis, totam diam fusce odio, nam consectetuer accumsan. Ornare massa mattis sed, orci consequat varius dignissim sit per ultricies, sit magna in. Sed dignissim nisl ante, leo a molestie elit scelerisque nulla. Accumsan vehicula posuere, libero amet justo vitae vel augue, suspendisse gravida, dictum scelerisque elit feugiat nisl odio. Mi ante rutrum pellentesque pellentesque, dapibus lobortis in mauris consequat laboriosam quis."
			}).toObject()
		);
		
		products.push(
			new Product ({
				title: "Uncharted 2: Among Thieves", 
				image: "http://img.dotua.org/fsua_items/cover/00/14/50/10/00145078.jpg",
				text: "Lorem ipsum dolor sit amet, lobortis morbi nunc lobortis vestibulum, magna risus mauris ut curabitur ad. Rhoncus mauris lacinia erat lobortis, facilisi dis, totam diam fusce odio, nam consectetuer accumsan. Ornare massa mattis sed, orci consequat varius dignissim sit per ultricies, sit magna in. Sed dignissim nisl ante, leo a molestie elit scelerisque nulla. Accumsan vehicula posuere, libero amet justo vitae vel augue, suspendisse gravida, dictum scelerisque elit feugiat nisl odio. Mi ante rutrum pellentesque pellentesque, dapibus lobortis in mauris consequat laboriosam quis."
			}).toObject()
		);
		
		
		let users = [];

		users.push(
			new User ({
				username: "username1", 
				password: "password1"
			}).toObject()
		);

		users.push(
			new User ({
				username: "username2", 
				password: "password2"
			}).toObject()
		);

		users.push(
			new User ({
				username: "username3", 
				password: "password2"
			}).toObject()
		);

		users.push(
			new User ({
				username: "username4", 
				password: "password2"
			}).toObject()
		);

		users.push(
			new User ({
				username: "username5", 
				password: "password2"
			}).toObject()
		);

		let reviews = [];

		reviews.push(
			new Review ({
				text: "I like it!",
				rate: 5,
				idUser: users[0]._id,
				idEntry: products[0]._id
			}).toObject()
		);

		reviews.push(
			new Review ({
				text: "My favorite game!",
				rate: 5,
				idUser: users[1]._id,
				idEntry: products[0]._id
			}).toObject()
		);

		reviews.push(
			new Review ({
				text: "Best game ever!",
				rate: 5,
				idUser: users[2]._id,
				idEntry: products[0]._id
			}).toObject()
		);

		reviews.push(
			new Review ({
				text: "I love this game!",
				rate: 5,
				idUser: users[3]._id,
				idEntry: products[0]._id
			}).toObject()
		);

		return {
			users: users,
			products: products,
			reviews: reviews
		};
	}
