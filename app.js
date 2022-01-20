const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const date = require(__dirname + "/date.js")

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(express.static("public"));

app.set("view engine", "ejs");

var items = [];

app.get("/", function (req, res) {
    
    let day = date.getDate();

    res.render("list", {
        kindOfDay: day,
        newListItem: items
    });

})

app.post("/", function (req, res) {
    var item = req.body.newItem;
    items.push(item);
    res.redirect("/");
})

app.get("/about", function(req,res) {
    res.render("about")
})

app.listen(3000, function (params) {
    console.log("Server started on port 3000")
})

/*
    switch (currentDay) {
        case 0:
            day = "Sunday";
            break;
        case 1:
            day = "Monday";
            break;
        case 2:
            day = "Tuesday";
            break;
        case 3:
            day = "Wednesday";
            break;
        case 4:
            day = "Thursday";
            break;
        case 5:
            day = "Friday";
            break;
        case 6:
            day = "Saturday";
            break;
        default:
        console.log("Error");

    }
*/