var createError = require('http-errors');
var express = require('express');

// login
const passport = require('passport');
const expressSession = require('express-session')({
  secret: 'secret',
  resave: false,
  saveUninitialized: false
});

var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const mongosse = require('mongoose');
require('dotenv').config();

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var articlesRouter = require('./routes/articles');

var cors = require('cors');
const username = process.env.USER_NAME;
const password = process.env.PASSWORD;
const dbName = process.env.DB_NAME;

mongosse.connect(`mongodb+srv://${username}:${password}@cluster0.o44iv.mongodb.net/${dbName}?retryWrites=true&w=majority`, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

var app = express();


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(cors());
app.use(logger('dev'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json({ limit: '4MB' }));
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// login 
app.use(expressSession); //TODO can be deleted since we use jwt manually without passport
app.use(passport.initialize());
app.use(passport.session());
//login
const usersSchema = require('./models/Users');
passport.use(usersSchema.createStrategy());

passport.serializeUser(usersSchema.serializeUser());
passport.deserializeUser(usersSchema.deserializeUser());

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/articles', articlesRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
