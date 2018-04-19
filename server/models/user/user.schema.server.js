var mongoose = require("mongoose");

var UserSchema = mongoose.Schema({
  username: String,
  password: String,
  firstname:String,
  lastname: String,
  email: String,
  userType: {type: String, enum: ['owner', 'customer', 'professional', 'support', 'admin']},
  facebook : {
    token: String,
    id: String,
  },
  rsts:[
    {type: mongoose.Schema.Types.ObjectId, ref: 'rstModel'}
  ],
  reviews:[
    {type: mongoose.Schema.Types.ObjectId, ref: 'reviewModel'}
  ],
  faqs:[
    {type: mongoose.Schema.Types.ObjectId, ref: 'faqModel'}
  ],
  blogs:[
    {type: mongoose.Schema.Types.ObjectId, ref: 'blogModel'}
  ],
  dateCreated: {type: Date, default: Date.now}
}, {collection:'user'});

module.exports = UserSchema;
