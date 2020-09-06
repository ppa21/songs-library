var express = require("express");
var Song = require("./models/songs");

var data = [
  { title: "White America", duration: "5:02" },
  { title: "Welcome to Hell", duration: "4:34" },
  { title: "The Plan", duration: "4:49" },
  { title: "God's Plan", duration: "3:22" },
  { title: "DNA", duration: "4:02" },
];

function seedDB() {
  Song.remove({}, function (err) {
    if (err) {
      console.log(err);
    } else {
      Song.create(data, function (err, songs) {
        if (err) {
          console.log(err);
        } else {
          console.log(songs);
        }
      });
    }
  });
}

module.exports = seedDB;
