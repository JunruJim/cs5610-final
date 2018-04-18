module.exports = function (app) {
  var blogModel = require("../models/blog/blog.model.server");
  var multer = require('multer');
  var upload = multer({ dest: __dirname+'/../../src/assets/uploads' });
  //Post calls
  app.post('/api/user/:userId/blog', createBlog);
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
    var blog = req.body;
    blogModel.createBlog(userId, blog)
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

    var blogId      = req.body.blogId;
    var width         = req.body.width;
    var myFile        = req.file;
    var userId = req.body.userId;

    var originalname  = myFile.originalname; // file name on user's computer
    var filename      = myFile.filename;     // new file name in upload folder
    var path          = myFile.path;         // full path of uploaded file
    var destination   = myFile.destination;  // folder where file is saved to
    var size          = myFile.size;
    var mimetype      = myFile.mimetype;

    // f
    if (blogId === undefined) {
      var blog = {_id: undefined, image_urls: '/uploads/'+filename};
      blogModel.createBlog(userId, blog);
    } else {
      var blog = { image_urls: '/uploads/'+filename };
      blogModel
        .updateBlog(blogId, blog)
        .then(function (stats) {
            res.send(200);
          },
          function (err) {
            res.sendStatus(404).send(err);
          });
    }



    var callbackUrl   = "/blog";
    res.redirect(callbackUrl);
  }

}
