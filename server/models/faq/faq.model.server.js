var mongoose = require("mongoose");

var userModel = require("../user/user.model.server");
var FaqSchema = require("./user.schema.server");
var faqModel = mongoose.model("faqModel", FaqSchema);

faqModel.findFaqById = findFaqById;
faqModel.createFaq = createFaq;
faqModel.deleteFaq = deleteFaq;
faqModel.findFaqByUser = findFaqByUser;
// faqModel.updateFaq = updateFaq;

module.exports = faqModel;

function findFaqById(faqId) {
  return faqModel.findById(faqId);
}

function createFaq(userId, faq) {
  faq._user = userId;
  return faqModel.create(faq)
    .then(function(responseFaq) {
      userModel.findUserById(responseFaq._user)
        .then(function(user) {
          user.faqs.push(responseFaq);
          return user.save();
        });
      return responseFaq;
    });
}

function deleteFaq(faqId) {
  user = faqModel.findFaq(faqId).then(function(faq) {
    userModel.findUserById(faq._user).then(function(user){
      user.faqs.pull({_id:faqId});
      user.save();
    })
  });
  return faqModel.remove({_id: faqId});
}

function findFaqByUser(userId) {
  return faqModel.find({"_user": userId})
  //.populate('developerId')
    .populate('_user', 'username')
    .exec();
}

function addFollowUp(faqId) {

}
