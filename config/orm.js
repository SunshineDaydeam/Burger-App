var connection = require("../config/connection.js");

// Test--
function printQuestionMarks(num) {
    var arr = [];
  
    for (var i = 0; i < num; i++) {
      arr.push("?");
    }
  
    return arr.toString();
  }
  
  // Helper function to convert object key/value pairs to SQL syntax
  function objToSql(ob) {
    var arr = [];
  
    // loop through the keys and push the key/value as a string int arr
    for (var key in ob) {
      var value = ob[key];
      // check to skip hidden properties
      if (Object.hasOwnProperty.call(ob, key)) {
        // if string with spaces, add quotations (Lana Del Grey => 'Lana Del Grey')
        if (typeof value === "string" && value.indexOf(" ") >= 0) {
          value = "'" + value + "'";
        }
        // e.g. {name: 'Lana Del Grey'} => ["name='Lana Del Grey'"]
        // e.g. {sleepy: true} => ["sleepy=true"]
        arr.push(key + "=" + value);
      }
    }
  
    // translate array of strings to a single comma-separated string
    return arr.toString();
  }




// End Test--

var orm = {
    //Select All Function
    selectAll:function(tableInput, cb){
        var queryString = "SELECT * FROM burgers;";
        connection.query(queryString, function(err, result){
            //If there is an error...
            if (err){throw err;}
            // result = total database
            // console.log(result);
            cb(result);
        })
    },
    //Insert Burger Function
    insertOne:function(table, cols, vals, cb){
        // var queryString = "INSERT INTO burgers(burger_name, devoured) VALUES('test burger', false);"
        var queryString = "INSERT INTO burgers(";
            queryString += cols.toString();
            queryString += ") ";
            queryString += "VALUES (";
            queryString += printQuestionMarks(vals.length);
            // queryString+="'hello burger', false"
            queryString += ") ";
        
            console.log(queryString);
        connection.query(queryString, vals, function(err, result){
            console.log("** " +result.affectedRows + " Changes have been made **");
            cb(result);
        })
    },
    //Update Burger Function
    updateOne:function(table, objColVals, condition, cb){
        var queryString = "UPDATE burgers";
            queryString += " SET ";
            queryString += objToSql(objColVals);
            queryString += " WHERE ";
            queryString += condition;

        console.log(queryString);
        connection.query(queryString, function(err, result) {
            if (err) {throw err;}
            cb(result);
        });
    }
};

module.exports=orm;