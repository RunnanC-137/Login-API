const express = require("express")
const router = express.Router()
const loginController = require("../controllers/login.js")

router.post("/", loginController.login)
router.post("/new", loginController.create)

module.exports = router