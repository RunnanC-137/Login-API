require("dotenv").config()
const mongoose = require("mongoose")
module.exports = function(){
    mongoose
        .set('strictQuery', true)
        .connect(process.env.MONGO_CONNECTE_URL,
        err => err 
            ? console.log("Houve um erro", err)
            : console.log("Mongo connected"))
}

