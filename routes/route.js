var express = require("express");
var router = express.Router();
var controller = require("../controller/controller");
//routes
router.get("/api_url", controller.controller_function);

module.exports = router;
