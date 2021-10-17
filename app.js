var createError = require('http-errors');
var express = require('express');
var path = require('path');
require("dotenv").config({ path: "./.env" });
var usersRouter = require('./routes/users');
var postsRouter = require('./routes/posts');
var commentsRouter = require('./routes/comments');
const mongoose=require('mongoose');
var cors = require('cors')

var app = express();


app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

var db=process.env.DB_URL;
mongoose.connect(db,
  {useNewUrlParser: true, useUnifiedTopology: true})
  .then(() => {
    console.log("Connected to the database!");
  })
  .catch(err => {
    console.log("Cannot connect to the database!", err);
    process.exit();
  });

app.use('/users', usersRouter);
app.use('/posts', postsRouter);
app.use('/comments', commentsRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  // res.locals.error = req.app.get('env') === 'development' ? err : {};
  res.locals.error = process.env.DEBUG ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.json('Something went wrong');
  res.render('error');
});

module.exports = app;
