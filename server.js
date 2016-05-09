var express = require('express');
var bodyParser = require('body-parser');
var methodOverride = require('method-override')
console.log("Burger Helper at your service!");
var app = express();
//Serve static content for the app from the "public" directory in the application directory.
app.use(express.static(__dirname + '/public'));

// parse application/x-www-form-urlencoded 
app.use(bodyParser.urlencoded({
    extended: false
}))
//require("./app/routes/api-routes.js")(app)
require("./app/routes/html-routes.js")(app)


var port = 3400;
app.listen(port);