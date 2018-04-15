var mongoose = require("mongoose");

var RstSchema = mongoose.Schema({
  id: String, // unique id from yelp
  name: String,
  categories: [
    {
      alias: String,
      title: String
    }
  ],
  content:String,
  rating: Number,
  review_count: Number,
  location: {
    city: String,
    country: String,
    address2: String,
    address3: String,
    state: String,
    address1: String,
    zip_code: String
  },
  image_url: String,
  price: String,
  _user: {type: mongoose.Schema.Types.ObjectId, ref: 'userModel'},
  reviews:[
    {type: mongoose.Schema.Types.ObjectId, ref: 'reviewModel'}
  ],
  blogs:[
    {type: mongoose.Schema.Types.ObjectId, ref: 'blogModel'}
  ],
  dateCreated: {type: Date, default: Date.now}
}, {collection:'user'});

module.exports = RstSchema;
