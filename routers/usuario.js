const express = require("express")
const router = express.Router()
const usuarioController = require("../controllers/usuario.js")
const permition = require("../middlewares/permitions")

router.get("/", permition.administrador, usuarioController.list)
router.put("/:id", permition.administrador, usuarioController.update.adm)
router.put("/", usuarioController.update.normal)
router.delete("/:id", permition.administrador, usuarioController.delete.adm)
router.delete("/", usuarioController.delete.normal)

module.exports = router