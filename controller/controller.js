//list of required packages that you want
var mysql = require('mysql');
var mongoose = require("mongoose");
/*var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'samplenode'
});*/

// connection pulling
var pool = mysql.createPool({
    connectionLimit: 100, //important
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'samplenode',
    debug: false
});

var controller = {
    controller_function: function(req, res) {
        //Returing the response to the client with perticular operational output
        res.status(200).json({
                status: 200,
                message: "This is controller function",
                data: "There is no data yet"
            })
            .end(); //Finally Ending the response it is Important .!
    },
    mysql_select: function(req, res) {
        //uncomment the above connection code and comment the below one to execute this function
        connection.connect();

        connection.query('SELECT * from test', function(err, rows, fields) {
            if (!err) {
                console.log('The solution is: ', rows);
                res.status(200).json({
                        status: 200,
                        message: "This is controller function",
                        data: rows
                    })
                    .end();
            } else console.log('Error while performing Query.');
        });

        connection.end();
    },
    handle_database: function(req, res) {

        pool.getConnection(function(err, connection) {
            if (err) {
                res.json({ "code": 100, "status": "Error in connection database" });
                return;
            }

            console.log('connected as id ' + connection.threadId);

            connection.query("select * from test", function(err, rows) {
                connection.release();
                if (!err) {
                    res.json(rows);
                }
            });

            connection.on('error', function(err) {
                res.json({ "code": 100, "status": "Error in connection database" });
                return;
            });
        });
    }
  // https://codeforgeek.com/2015/01/nodejs-mysql-tutorial/
}
module.exports = controller;
