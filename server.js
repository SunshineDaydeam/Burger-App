var express=require("express")
var bodyParser=require("body-parser")
var exphbs=require("express-handlebars")

var PORT = process.env.PORT || 3000;

var app=express()

app.use(express.static("public"))
app.use(bodyParser.urlencoded({ extended: true}))
app.use(bodyParser.json());

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var routes = require("./controllers/burger_controllers.js");
app.use(routes);

//TESTING---------------------------------------
// app.get('/', function (req, res) {
//     res.render('index');
// });
//TESTING---------------------------------------



app.listen(PORT, function() {
    console.log("\n**** Burger-App now listening at localhost:" + PORT +" ****\n");
});

// app.get("/", function(){
//     app.get("/", function(req, res) {
//         res.sendFile(path.join(__dirname, "../public/test.html"));
//     });
// })


