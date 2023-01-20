require("dotenv").config()
const mongoose = require("mongoose")
mongoose.set('strictQuery', true)
mongoose.connect(process.env.MONGO_CONNECTE_URL,
    err => err 
        ? console.log("Houve um erro", err)
        : console.log("Mongo connected"))
