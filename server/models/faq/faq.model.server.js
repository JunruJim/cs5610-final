var mongoose = require("mongoose");
var FaqSchema = require("./user.schema.server");
var faqModel = mongoose.model("faqModel", FaqSchema);

faqModel.findFaqById = findFaqById;
faqModel.createFaq = createFaq;
faqModel.deleteFaq = deleteFaq;
faqModel.findFaqByUser = findFaqByUser;
// faqModel.updateFaq = updateFaq;

module.exports = faqModel;

function findFaqById() {
  return faqModel.
}
