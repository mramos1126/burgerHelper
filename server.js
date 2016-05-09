var express = require('express');
var bodyParser = require('body-parser');

console.log("Burger Helper at your service!");
var app = express();
//Serve static content for the app from the "public" directory in the application directory.
app.use(express.static(__dirname + '/public'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type:'application/vnd.api+json'}));


require("./app/routes/api-routes.js")(app)
require("./app/routes/html-routes.js")(app)


var port = 3400;
app.listen(port);