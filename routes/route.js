var express = require("express");
var router = express.Router();
var controller = require("../controller/controller");
//routes
router.get("/api_url", controller.controller_function);
router.get("/mysql_select", controller.mysql_select);
router.get("/poolConnection", controller.handle_database);
module.exports = router;
