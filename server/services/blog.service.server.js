module.exports = function (app) {
  var blogModel = require("../models/blog/blog.model.server");
  //Post calls
  app.post('/api/user/:userId/rst/:rstId/blog', createBlog);
  app.post ("/api/upload", upload.single('myFile'), uploadImage);
  //Get calls
  app.get('/api/blog/:blogId', findBlogById);
  app.get('/api/blog', findAllBlog);
  //Put calls
  app.put('/api/blog/:blogId',updateBlog);
  //Delete calls
  app.delete('/api/blog/:blogId', deleteBlog);


  function createBlog(req, res) {
    var userId = req.param['userId'];
    var rstId = req.param['rstId'];
    var blog = req.body;
    blogModel.createBlog(userId, rstId, blog)
      .then(function(result){
        console.log("create blog:  " + result);
        res.send(result);
      });
  }

  function findAllBlog(req, res) {
    blogModel.findAllBlog().then(
      function(blog) {
        res.json(blog);
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

  function findBlogById(req, res) {
    var blogId = req.params['blogId'];
    blogModel.findBlogById(blogId)
      .then(function(blog) {
      res.json(blog);
    })
  }

  function updateBlog(req, res) {
    var blogId = req.params['blogId'];
    var blog = req.body;

    blogModel.updateFaq(blogId,blog).then(function(blog) {
      if(blog) {
        res.status(200).send(blog);
      } else {
        res.status(404).send('Not find!');
      }
    });
  }

  function deleteBlog(req, res) {
    var blogId = req.params['blogId'];
    blogModel.deleteBlog(blogId)
      .then(function() {
          res.sendStatus(200);
        }
      );
  }

  function uploadImage(req, res) {

    var widgetId      = req.body.widgetId;
    var width         = req.body.width;
    var myFile        = req.file;
    var userId = req.body.userId;
    var websiteId = req.body.websiteId;
    var pageId = req.body.pageId;

    var originalname  = myFile.originalname; // file name on user's computer
    var filename      = myFile.filename;     // new file name in upload folder
    var path          = myFile.path;         // full path of uploaded file
    var destination   = myFile.destination;  // folder where file is saved to
    var size          = myFile.size;
    var mimetype      = myFile.mimetype;

    // find widget by id
    if (widgetId === undefined) {
      var widget = {_id: undefined, type: 'IMAGE', pageId: pageId,size: size,text: 'text', width:'100%',
        url:'/uploads/'+filename};
      WidgetModel.createWidget(pageId, widget)
    } else {
      var widget = { url: '/uploads/'+filename };
      WidgetModel
        .updateWidget(widgetId, widget)
        .then(function (stats) {
            res.send(200);
          },
          function (err) {
            res.sendStatus(404).send(err);
          });
    }



    var callbackUrl   = "/user/"+ userId+ "/website/" + websiteId + "/page/" + pageId+ "/widget";
    res.redirect(callbackUrl);
  }
}
}
