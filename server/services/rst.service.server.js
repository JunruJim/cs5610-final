var yelp = require('yelp-fusion');

module.exports = function (app) {
  const apiKey = 'OnR09pM7Fjg06is4fE3q4CCiXz96G5j-LMpVxii78aWzRa_hgSEqTJOE1STY5BSlzItCiL4Qc1H6ONIyEb0XBRuJedt4vIqvArls2SnzZAoikgWbeMw9C5ddaUTNWnYx';

  app.get("/api/rst/yelp/search", yelpSearch);


  function yelpSearch(req, res) {

    var latitude = req.query["latitude"];
    var longitude = req.query["longitude"];
    var term = req.query["term"];

  }
};
