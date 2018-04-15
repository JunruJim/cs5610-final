
const yelp = require('yelp-fusion');
const apiKey = 'OnR09pM7Fjg06is4fE3q4CCiXz96G5j-LMpVxii78aWzRa_hgSEqTJOE1STY5BSlzItCiL4Qc1H6ONIyEb0XBRuJedt4vIqvArls2SnzZAoikgWbeMw9C5ddaUTNWnYx';

module.exports = function (app) {
  app.get("/api/rst/yelp/search", yelpSearch);
  app.post("/api/rst/yelp", createRstFromYelp);
  app.post("/api/rst/user/:userId", createRstForOwner);

  var rstModel = require("../models/rst/rst.model.server");

  function yelpSearch(req, res) {
    var latitude = req.query["latitude"];
    var longitude = req.query["longitude"];
    var term = req.query["term"];

    console.log(latitude);

    const searchRequest = {
      term: req.query["term"],
      latitude: req.query["latitude"],
      longitude: req.query["longitude"],
    };

    console.log(searchRequest);

    const client = yelp.client(apiKey);

    client.search(searchRequest).then(
      function (response) {
        const result = response.jsonBody.businesses;
        res.send(result);
      }, function (err) {
        res.status(400).send('yelp query failed');
      }
    )
  }

  // create restaurant for specific user (owner)
  function createRstForOwner(req, res) {
    var userId = req.params['userId'];
    var rst = req.body;
    rstModel.createRstForOwner(userId, rst)
      .then(function (rst) {
        res.json(rst);
      }, function(err) {
        res.status(500).json(err);
      });
  }

  // create restaurant from yelp api and the restaurant do not have a referenced _user
  function createRstFromYelp(req, res) {
    var rst = req.body;
    rstModel.createRstWithoutOwner(rst)
      .then(function (rst) {
        res.json(rst);
      }, function(err) {
        res.status(500).json(err);
      });
  }
};
