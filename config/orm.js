var connection = require("../config/connection.js");

var orm = {
    //Select All Function
    selectAll:function(){
        var queryString = "SELECT * FROM burgers;";
        connection.query(queryString, function(err, result){
            //If there is an error...
            if (err){throw err;}
            // result = total database
            // console.log(result);
        })
    },
    //Insert Burger Function
    insertOne:function(){
        var queryString = "INSERT INTO burgers(burger_name, devoured) VALUES('test burger', false);"
        connection.query(queryString, function(err, result){
            console.log("** " +result.affectedRows + " Changes have been made **");
            orm.selectAll();
        })
        orm.selectAll();
    },
    //Update Burger Function
    updateOne:function(){
        var queryString = "UPDATE burgers SET burger_name = 'banana burger' WHERE id = 6;"
        connection.query(queryString, function(err, result){
            console.log("** " +result.affectedRows + " Changes have been made **");
            orm.selectAll();
        })
    }
};

module.exports=orm;