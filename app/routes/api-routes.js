var orm 			= require ("../config/orm.js");
module.exports = function(app){




	app.post('/api/burger', function(req, res){

		// Take the request...
		var character = req.body;

		// Then send it to the ORM to "save" into the DB.
		orm.addBurger(character, function(){
		});

	})
}
