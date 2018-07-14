var express=require("express")
var router = express.Router();
var burger = require("../models/burger.js");
//// Routes go here ////

//---GET REQUEST
router.get("/", function(req, res) {
    burger.all(function(data) {
        var hbsObject = {
            burger: data
        };     
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

//---POST REQUEST
router.post("/api/burgers", function(req, res) {
    burger.create(["burger_name", "devoured"], [req.body.burger_name, req.body.devoured], function(result) {
      // Send back the ID of the new quote
      res.json({ id: result.insertId });
    });
});

//---PUT REQUEST

router.put("/api/burgers/:id", function(req, res) {
    console.log("hey it worked...")
    var condition = "id = " + req.params.id;
  
    console.log("condition", condition);
  
    burger.update(
      {
        devoured: req.body.devoured
      },
      condition,
      function(result) {
        if (result.changedRows === 0) {
          // If no rows were changed, then the ID must not exist, so 404
          return res.status(404).end();
        }
        res.status(200).end();
  
      }
    );
  });





////////////////////////

module.exports = router;
