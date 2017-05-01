//packages
var express = require("express");
var bodyparser = require("body-parser");
var controller = require("./controller/controller.js");
//files

var app = express();
port = process.env.PORT || 8080;

//use
app.use(bodyparser());

//methods
app.use("/*", function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Method", "GET,POST,PUT,DELETE,OPTION");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

//routes
app.all("/*", require("./routes/route"));
app.listen(port, function() {
    console.log("Server listening on the port" + port);
});
