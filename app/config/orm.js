var connection = require('./connection.js');

var tableName = "Burger";

var orm = {


	addBurger: function(character){

		// var routeName = character.name.replace(/\s+/g, '').toLowerCase();

		var s = "INSERT INTO " + tableName + " (burger_name) VALUES (?)";
			console.log('NEWBURGER',character.newBurger)
		connection.query(s, [character.newBurger], function(err, result) {
          //console.log('result', result);
          res.json(result);
        });

	}
	

module.exports = orm;
