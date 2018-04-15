var mongoose = require("mongoose");

var BlogSchema = mongoose.Schema({
  content: String,
  rating: Number,
  image_url: [String],
  title: String,
  _user: {type: mongoose.Schema.Types.ObjectId, ref: 'userModel'},
  _rst: {type: mongoose.Schema.Types.ObjectId, ref: 'rstModel'},
  dateCreated: {type: Date, default: Date.now}
}, {collection:'blog'});

module.exports = BlogSchema;
