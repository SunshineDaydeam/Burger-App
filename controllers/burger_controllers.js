var express=require("express")
var burger = require("../models/burger.js");

var router = express.Router();

//// Routes go here ////

// burger.all();

router.get("/", function(req, res) {
    burger.all(function(data) {
        var hbsObject = {
            burger: data
        };     
        console.log(hbsObject);
    });
    res.render("index", hbsObject);
});






////////////////////////

module.exports = router;
