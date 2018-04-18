var mongoose = require("mongoose");

var ReviewSchema = require("./review.schema.server");
var reviewModel = mongoose.model('reviewModel', ReviewSchema);

var rstModel = require("../rst/rst.model.server");
var userModel = require("../user/user.model.server");

reviewModel.createReview = createReview;
reviewModel.findReviewById = findReviewById;
reviewModel.findReviewsByRst = findReviewsByRst;
reviewModel.findReviewsByUser = findReviewsByUser;
reviewModel.deleteReview = deleteReview;

module.exports = reviewModel;

function createReview(userId, rstId, review) {
  review._user = userId;
  review._rst = rstId;
  return reviewModel.create(review)
    .then(function(responseReview) {
      userModel.findUserById(responseReview._user)
        .then(function(user) {
          user.reviews.push(responseReview);
          return user.save();
        });
      rstModel.findRstById(responseReview._rst)
        .then(function(rst) {

          // update rating and review_count
          if (review.rating) {
            rst.rating = (rst.rating * rst.review_count + review.rating) / (rst.review_count + 1);
            rst.review_count++;
          }
          rst.reviews.push(responseReview);
          return rst.save();
        })
      ;
      return responseReview;
    });
}

function findReviewById(reviewId) {
  return reviewModel.findById(reviewId);
}

function findReviewsByRst(rstId) {
  return reviewModel.find({_rst: rstId})
    .populate('_rst')
    .exec();
}

function findReviewsByUser(userId) {
  return reviewModel.find({_user: userId})
    .populate('_user')
    .exec();
}

function deleteReview(reviewId) {
  reviewModel.findById(reviewId)
    .then(function(review) {
      userModel.findUserById(review._user)
        .then(function(user) {
          user.reviews.pull({_id: reviewId});
          user.save();
        });
      rstModel.findRstById(review._rst)
        .then(function(rst) {

          // update rating and review_count
          if (review.rating) {
            rst.rating = (rst.rating * rst.review_count - review.rating) / (rst.review_count - 1);
            rst.review_count--;
          }
          rst.reviews.pull(({_id: reviewId}));
          rst.save();
        });
    });
  return reviewModel.deleteOne({_id: reviewId});
}
