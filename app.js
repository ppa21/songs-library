var express = require("express");
var app = express();
var mongoose = require("mongoose");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");
var seedDB = require("./seeds");

var indexRouter = require("./routes/index");
var songsRouter = require("./routes/songs");

mongoose.connect("add in your mongodb url here");
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride("_method"));

app.use("/", indexRouter);
app.use("/songs", songsRouter);
seedDB();

app.listen(3000, function () {
  console.log("starting server...");
});

/*
RESTful Routes

index:    /songs

new:      /songs/new 
create:   /songs

show:     /songs/:id

edit:     /songs/:id/edit
update:   /songs/:id

delete:   /songs/:id

*/
