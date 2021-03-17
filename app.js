const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const dayjs = require('dayjs');
const fs = require('fs');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const clientRouter = require('./routes/client');
const mainRouter = require('./routes/main');

require('./dbConfig');

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


/*MIDDLEWARES*/
app.use(express.static('public/images'));
app.use((req, res, next) => {

  //Agregar control acceso segun horario
  const currentHour = dayjs().format('HH:mm:ss');
  req.horaActual = currentHour;
  if (req.horaActual <= '08:00:00' || req.horaActual >= '21:00:00') {
    res.render('client/close');
    } else {
    next();
  }

  // fs.appendFile('./request.log', `[${currentDate}]\n\tURL: ${req.url}\n\tMETHOD: ${req.method}\n`, (err) => {
  //   if (err) {
  //     res.send('Ha ocurrido un error en el LOG');
  //   } else {
  //     next();
  //   }
  // })
});


/*FIN MIDDLEWARES*/

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/client', clientRouter);
app.use('/main', mainRouter);

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
