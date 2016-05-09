var connection = require('./connection.js');

var tableName = "Burger";

var orm = {


	addBurger: function(character, callback){

		 
		var routeName = character.name.replace(/\s+/g, '').toLowerCase();
		console.log(routeName);

		var s = "INSERT INTO " + tableName + " (burger_name) VALUES (?)";

		connection.query(s,[character.burger_name], function(err, result) {
            console.log(character.burger_name);
            callback(result);

        
        });

	}
}

module.exports = orm;
