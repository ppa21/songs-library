var express = require("express");
var router = express.Router();
var Song = require("../models/songs");

router.get("/", function (req, res) {
  res.render("index");
});

router.get("/view", function (req, res) {
  Song.find({}, function (err, songs) {
    if (err) {
      console.log(err);
    } else {
      res.render("view", { songs: songs });
    }
  });
});

router.get("/new", function (req, res) {
  res.render("new");
});

router.post("/", function (req, res) {
  Song.create(req.body.song, (err, song) => {
    if (err) {
      console.log(err);
    } else {
      res.redirect("/songs/view");
    }
  });
});

router.get("/:id/edit", function (req, res) {
  var id = req.params.id;

  Song.findById(id, function (err, song) {
    if (err) {
      console.log(err);
    } else {
      res.render("edit", { song: song });
    }
  });
});

router.post("/:id", function (req, res) {
  console.log(req.body.song);
  Song.findByIdAndUpdate(req.params.id, req.body.song, function (err, song) {
    if (err) {
      console.log(err);
    } else {
      res.redirect("/songs/view");
    }
  });
});

router.delete("/:id", function (req, res) {
  Song.findByIdAndRemove(req.params.id, function (err) {
    if (err) {
      console.log(err);
    } else {
      res.redirect("/songs/view");
    }
  });
});

module.exports = router;
