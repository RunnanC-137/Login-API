const express = require("express")
const router = express.Router()
const usuarioController = require("../controllers/usuario.js")
const permition = require("../middlewares/permissoes")

router.get("/", permition.administrador, usuarioController.list)
router.put("/:id", usuarioController.update)
router.delete("/:id", permition.administrador, usuarioController.delete)

module.exports = router