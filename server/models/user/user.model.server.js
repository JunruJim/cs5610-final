var mongoose = require("mongoose");
var UserSchema = require("./user.schema.server");
var userModel = mongoose.model("userModel", UserSchema);
userModel.findUserById = findUserById;
userModel.createUser = createUser;
userModel.deleteUser = deleteUser;
userModel.findUserByCredentials = findUserByCredentials;
userModel.findUserByUserName = findUserByUserName;
userModel.updateUser = updateUser;
// UserModel.findFacebookUser = findFacebookUser;

module.exports = userModel;

function createUser(user) {
  return userModel.create(user);
}

function findUserById(userId) {
  return userModel.findById(userId);
}

function findUserByUserName(username) {
  return userModel.findOne({username: username});
}

function findUserByCredentials(username, password) {
  return userModel.findOne({username: username, password: password});
}

// function findAllUsers(){
//   UserModel.find(function (err, doc) {
//     console.log(docs);
//   })
// }

function updateUser(userId, user) {
  return userModel.update({_id: userId}, user);
}

function deleteUser(userId) {
  return userModel.deleteOne({_id: userId});
}
