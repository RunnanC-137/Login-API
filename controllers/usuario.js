const Usuario = require("../models/usuarios.js")

const _list = (req, res) => {
    Usuario.find()
    .then(usuarios => res.json(usuarios))
}
const _update = (req, res) => {
    
}
const _delete = (req, res) => {
    const { id } = req.params
    Usuario.findByIdAndDelete(id)
    .then( usuario => {
        res.json({"message": "usuario deleteado com sucesso"})
    })
}

module.exports = {
    list: _list,
    update: _update,
    delete: _delete,
    
}