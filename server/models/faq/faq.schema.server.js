var mongoose = require("mongoose");

var FaqSchema = mongoose.Schema({
  question: String,
  followups: {
    contents: String,
    _user: {type: mongoose.Schema.Types.ObjectId, ref: 'userModel'}
  },
  _user: {type: mongoose.Schema.Types.ObjectId, ref: 'userModel'},
  dateCreated: {type: Date, default: Date.now}
}, {collection:'user'});

module.exports = FaqSchema;
