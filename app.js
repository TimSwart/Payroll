let express = require('express');
let path = require('path');
let favicon = require('serve-favicon');
let logger = require('morgan');
let cookieParser = require('cookie-parser');
let bodyParser = require('body-parser');

require('dotenv-safe').load();
require('strict-mode');

let db = require('./db_config');
let exU = require('./express_utils');
let app = express();

db.connect();
exU.setApp(app);

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
// app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// define valid routes
app.use('/', require('./routes/index'));
exU.addRoute('not_implemented');
exU.addRoute('get_all_employees');
exU.addRoute('get_employee_info');
exU.addRoute('get_employee_work_history');


// catch 404 and forward to error handler
app.use((req, res, next) => {
  let err = new Error('Route Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  if (process.env.ENVIRONMENT === 'development') {
    res.locals.error = err;
  } else {
    res.locals.error = {
      "status" : (err.status || 500),
      "message" : "Something went wrong."
    };
  }

  // render the error page
  res.status(err.status || 500).render('pages/error');
});


exU.shutdownHandler(() => {
  console.log("Performing shutdown...");
  db.disconnect();
  process.exit();
});

module.exports = app;
