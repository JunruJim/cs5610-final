module.exports = function (app) {
  var reviewModel = require("../models/review/review.model.server");

  app.post('/api/user/:userId/rst/:rstId/review', createReview);
  app.get('/api/review/:reviewId', findReviewById);
  app.get('/api/user/:userId/review', findReviewsByUser);
  app.get('/api/rst/:rstId/review', findReviewsByUser);
  app.delete('/api/review/:reviewId', deleteReview);

  function createReview(req, res) {
    var userId = req.param['userId'];
    var rstId = req.param['rstId'];
    var review = req.body;
    reviewModel.createReview(userId, rstId, review)
      .then(function(createdReview){
        res.json(createdReview);
      }, function(err) {
        res.status(500).json(err);
      });
  }

  function findReviewById(req, res) {
    var reviewId = req.params['reviewId'];
    reviewModel.findReviewById(reviewId)
      .then(function(review) {
        if (review) {
          res.json(review);
        } else {
          res.status(404);
          res.json(review);
        }
      }, function(err) {
        res.status(500).json(err);
      });
  }

  function findReviewsByUser(req, res) {
    var userId = req.params['userId'];
    reviewModel.findReviewsByUser(userId)
      .then(function(reviews) {
        res.json(reviews);
      }, function(err) {
        res.status(500).json(err);
      });
  }

  function findReviewsByRst(req, res) {
    var rstId = req.params['rstId'];
    reviewModel.findReviewsByRst(rstId)
      .then(function(reviews) {
        res.json(reviews);
      }, function(err) {
        res.status(500).json(err);
      });
  }

  function deleteReview(req, res) {
    var reviewId = req.params['reviewId'];
    reviewModel.deleteReview(reviewId)
      .then(function() {
          res.sendStatus(200);
        }
      );
  }
};
