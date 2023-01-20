const express = require("express")
const authentication = require("../middlewares/authentication")
/* Get define All Routers */
/** @param {express} app */

function init(app) {
    app.use("/login", require("./login") )
    app.use(authentication)
    app.use("/usuario", require("./usuario"))
}

module.exports = init