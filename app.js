require("dotenv").config()
const express = require("express")
const cors = require("cors")
var createError = require('http-errors');

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
require("./models")
require("./routers")(app)

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    next(createError(404));
});
  
// error handler
app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;

    // render the error page
    res.status(err.status || 500);
    res.json({message: res.locals.message});
});
  
module.exports = app;
