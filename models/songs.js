var mongoose = require("mongoose");

var songsSchema = new mongoose.Schema({
  title: String,
  duration: String,
});

module.exports = mongoose.model("Song", songsSchema);
