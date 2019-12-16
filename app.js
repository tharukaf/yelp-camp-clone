var express = require("express");
var app = express();
var bodyParser = require("body-parser");
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}));

var campgrounds = [
		{name: "salmon creek", image: "https://www.photosforclass.com/download/pixabay-691424?webUrl=https%3A%2F%2Fpixabay.com%2Fget%2F50e9d4474856b108f5d084609620367d1c3ed9e04e50744e732f7adc944fcc_960.jpg&user=Free-Photos"},
		{name: "granite hill", image: "https://www.photosforclass.com/download/pixabay-1851092?webUrl=https%3A%2F%2Fpixabay.com%2Fget%2F57e8d0424a5bae14f6da8c7dda793f7f1636dfe2564c704c72297bd59f4ec751_960.jpg&user=Pexels"},
		{name: "dawsons creek", image: "https://www.photosforclass.com/download/pixabay-4303359?webUrl=https%3A%2F%2Fpixabay.com%2Fget%2F52e3d5404957a514f6da8c7dda793f7f1636dfe2564c704c72297bd59f4ec751_960.jpg&user=chanwity"},
	];


app.get("/", function(req, res){
	res.render("landing");
});

app.get("/campgrounds", function(req, res){
	res.render("campgrounds", {campgrounds: campgrounds});
});

app.get("/campgrounds/new", function(req, res){
	res.render("new");
});

app.post("/campgrounds", function(req, res){
	var name = req.body.name;
	var image = req.body.image;
	var newCampground = {name: name, image: image};
	campgrounds.push(newCampground);
	res.redirect("/campgrounds");
});



app.listen(3000, function(){
	console.log("Server started at port 3000");
});