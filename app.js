require("dotenv").config()
const express = require("express")
const cors = require("cors")
const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
require("./models")
require("./routers")(app)
app.listen(process.env.PORT, err => {
    err 
    ? console.log(err) 
    : console.log(`servidor rodando na porta ${process.env.PORT}`)
})