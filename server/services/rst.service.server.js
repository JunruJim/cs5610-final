
const yelp = require('yelp-fusion');
const apiKey = 'OnR09pM7Fjg06is4fE3q4CCiXz96G5j-LMpVxii78aWzRa_hgSEqTJOE1STY5BSlzItCiL4Qc1H6ONIyEb0XBRuJedt4vIqvArls2SnzZAoikgWbeMw9C5ddaUTNWnYx';

module.exports = function (app) {
  app.get("/api/rst/yelp/search", yelpSearch);

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
};
