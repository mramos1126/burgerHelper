var connection = require('./connection.js');

var tableName = "Burger";

var orm = {


	addBurger: function(character, callback){

		 Creating a routeName so its easy to search. 
		var routeName = character.name.replace(/\s+/g, '').toLowerCase();
		console.log(routeName);

		var s = "INSERT INTO " + tableName + " (burger_name, date) VALUES (?, ?)";

		connection.query(s,[ character.burger_name, character.date], function(err, result) {
            
            callback(result);

        });

	}
}

module.exports = orm;
