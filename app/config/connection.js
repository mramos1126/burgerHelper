var mysql = require('mysql');
var connection = mysql.createConnection({
    port: 3306,
    host: 'izm96dhhnwr2ieg0.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
    user: 'f7w4xjm27lj2fq9s',
    password: 'gefunded2gwjla6g',
    database: "f1c22j58ck7r427f"
});


connection.connect(function(err) {
    if (err) {
        console.error('error connecting: ' + err.stack);
        return;
    }
    console.log('connected as id ' + connection.threadId);
});

module.exports = connection;