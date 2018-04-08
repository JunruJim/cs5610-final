var express = require('express');
const bodyParser = require('body-parser');
const app = express();
const path = require('path');
const http = require('http');
var cookieParser = require('cookie-parser');
var session      = require('express-session');

// var db = mongoose.connect('mongodb://chrismzyy@hotmail.com:135246Abcd@ds263847.mlab.com:63847/heroku_khn0t993');

// var connectionString = 'mongodb://yiyangzhang:135246abcd@ds263847.mlab.com:63847/heroku_khn0t993';
var connectionString = 'mongodb://localhost:27017/webdev';
var mongoose = require("mongoose");

mongoose.createConnection(connectionString);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, 'dist')));
app.use(express.static(path.join(__dirname, 'src/assets')));

app.use(cookieParser());
app.use(session({ secret: process.env.SESSION_SECRET }));

//CORS
app.use(function(reg, res, next){
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE, OPTIONS');
  next();
});


const port=process.env.PORT || '5000';
app.set('port', port);

// Create HTTP server
const server = http.createServer(app);

// var mongoose = require('mongoose');
//
// // this is haruko conncection
// // var db = mongoose.connect('mongodb://<dbuser>:<dbpassword>@ds263847.mlab.com:63847/heroku_khn0t993');
// var db = mongoose.connect('mongodb://localhost:27017/webdev');

require("./assignment/app.js")(app);

// For Build: Catch all other routes and return the index file -- BUILDINg
app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});


server.listen( port , function() {
  console.log('Node app is running on port', app.get('port'))});
