//list of required packages that you want
var mongoose = require("mongoose");

var controller = {
    controller_function: function(req, res) {
        //Returing the response to the client with perticular operational output
        res.status(200).json({
            status: 200,
            message: "This is controller function",
            data: "There is no data yet"
        })
        .end();//Finally Ending the response it is Important .!
    }
}
module.exports = controller;
