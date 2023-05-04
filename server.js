var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const methodOverride = require('method-override')

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
const skillsRouter = require('./routes/skills')

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(function (req, res, next) {

	// res.locals is a way to send vars to templates
	// {}
	res.locals.time = new Date().toLocaleTimeString()
	// {time: 11:15}

	// to move to the next `app.use` in our flow of this file
	// we NEED to call next()
	next()
})

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(methodOverride('_method'))

app.use('/', indexRouter);
app.use('/users', usersRouter);
// Best practice is to name your router start here
app.use('/skills', skillsRouter)

// app.get('/hello', function () {
//   // code doing it's do
// })

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
