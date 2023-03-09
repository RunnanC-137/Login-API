const express = require("express")
const cors = require("cors")
const createError = require('http-errors');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./configSwagger/swagger.json');

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
//DB connection
require("./db/conn")()
//Routers of the project
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
