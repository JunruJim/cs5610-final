module.exports = function (app) {

  var FaqModel = require("../models/faq/faq.model.server");
  //Post calls
  app.post('/api/user/:userId/faq', createFaq);
  // app.post('/api/faq/:faqId', addFollowUp);
  //Get calls
  app.get('/api/faq', findAllFaqs);
  app.get('/api/faq/:faqId', findFaqById);
  //Put calls
  app.put('/api/faq/:faqId',updateFaq);
  //Delete calls
  app.delete('/api/faq/:faqId', deleteFaq);


  function createFaq(req, res) {
    var userId = req.param['userId'];
    var faq = req.body;
    FaqModel.createFaq(userId, faq)
      .then(function(result){
        console.log("create faq:  " + result);
        res.send(result);
      });
  }

  function addFollowUp(req, res) {
    var faqId = req.params['faqId'];
    var content = req.body;
    FaqModel.addFollowUp(faqId, content).then(
      function(faq) {
        res.json(faq);
      },
      function(err) {
        res.sendStatus(400).send(err);
      }
    );
  }

  function findAllFaqs(req, res) {
    FaqModel.findAllFaqs().then(
      function(faqs) {
        res.json(faqs);
      },
      function(err) {
        res.sendStatus(400).send(err);
      }
    )
  }
  // function findAllFaqsForUser(req, res) {
  //   var userId = req.params['userId'];
  //   FaqModel.findFaqByUser(userId).then(
  //     function (faq) {
  //       res.json(faq);
  //     },
  //     function (err) {
  //       res.sendStatus(400).send(err);
  //     });
  // }

  function findFaqById(req, res) {
    var faqId = req.params['faqId'];
    FaqModel.findFaqById(faqId).then((faq) => res.json(faq));
  }

  function updateFaq(req, res) {
    var faqId = req.params['faqId'];
    var faq = req.body;

    FaqModel.updateFaq(faqId,faq).then(function(faq) {
      if(faq) {
        res.status(200).send(faq);
      } else {
        res.status(404).send('Not find!');
      }
    });
  }

  function deleteFaq(req, res) {
    var faqId = req.params['faqId'];
    FaqModel.deleteFaq(faqId).then(() => (
      res.sendStatus(200)));
  }
}
