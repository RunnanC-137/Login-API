const Usuario = require("../models/usuarios.js")

const _list = (req, res) => {
    Usuario.find()
    .then(usuarios => res.json(usuarios))
}
const _update = (req, res) => {
    const { nome, email } = req
    const { id } = req.usuario
    Usuario.findByIdAndUpdate(id, { nome, email })
    .then( usuario => {
        res.json({"message": "usuario atualizado com sucesso", "updatedUser":usuario})
    })
    .catch( err => {
        console.log(err)
        res.status(404).json({"error": {message:"usuario inexistente", code:"002001000", err }})
    })
}

const _update_adm = (req, res) => {
    const { nome, email } = req
    const { id } = req.params
    Usuario.findByIdAndUpdate(id, { nome, email })
    .then( usuario => {
        res.json({"message": "usuario atualizado com sucesso", "updatedUser":usuario})
    })
    .catch( err => {
        console.log(err)
        res.status(404).json({"error": {message:"usuario inexistente", code:"002001000", err }})
    })
}

const _delete = (req, res) => {
    const { id } = req.usuario
    Usuario.findByIdAndDelete(id)
    .then( (usuario) => {
        res.json({"message": "usuario deleteado com sucesso", "deletedUser":usuario})
    })
    .catch( err => {
        console.log(err)
        res.status(404).json({"error": {message:"usuario inexistente", code:"002002000", err }})
    })
}

const _delete_adm = (req, res) => {
    const { id } = req.params
    Usuario.findByIdAndDelete(id)
    .then( (usuario) => {
        res.json({"message": "usuario deleteado com sucesso", "deletedUser":usuario})
    })
    .catch( err => {
        console.log(err)
        res.status(404).json({"error": {message:"usuario inexistente", code:"002002000", err }})
    })
}

module.exports = {
    list: _list,
    update: {
        normal: _update,
        adm: _update_adm
    },
    delete: {
        normal: _delete,
        adm: _delete_adm
    },
    
}