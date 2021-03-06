var prod =  process.env.NODE_ENV === 'prod';
var express = require('express');
var path = require('path');

var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var prod =  process.env.NODE_ENV === 'prod';

var index = require('./routes/index');
var users = require('./routes/users');
var staffroutes = require('./routes/staffroutes');
var barroutes = require('./routes/barroutes')
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
if (prod) {
    app.use(express.static(path.join(__dirname, 'dist')));
} else {
    app.use(express.static(path.join(__dirname, 'build')));

}    // CHANGED
app.use("/public", express.static(__dirname + "/public"));  // NEW

}     // CHANGED
app.use("/public", express.static(__dirname + "/public"));


app.use('/', index);
app.use('/users', users);


//app.get('/stafflist', staffroutes.findAll);
//app.get('/stafflist/:id', staffroutes.search);
app.delete('/staff/:id', staffroutes.deleteStaff);
app.get('/staff/:id', staffroutes.findOne);

app.get('/staff', staffroutes.findAll);
// app.get('/staff', staffroutes.findAll);
app.post('/staff', staffroutes.newStaff);
app.put('/staff/:id/update', staffroutes.updateRateOfPay);
app.put('/staff/:id', staffroutes.incrementDaysAbscent);

app.delete('/bar/:id', barroutes.deleteBar);
app.get('/bar/:id', barroutes.findOne);
app.get('/bar', barroutes.findAll);
app.post('/bar', barroutes.addBar);
app.put('/bar/:id/update', barroutes.updateBarEarnings);



// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
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
