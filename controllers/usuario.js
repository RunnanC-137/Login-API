const bcrytpjs = require("bcryptjs")
const Usuario = require("../models/usuario.js")

const _list = (req, res) => {
    Usuario.find()
    .then(usuarios => res.json(usuarios))
}

const _update = (req, res) => {
    const { nome, email } = req.body
    const { id } = req.usuario
    Usuario.findByIdAndUpdate(id, { nome, email })
    .then( usuario => {
        res.json(usuario)
    })
    .catch( err => {
        console.log(err)
        res.status(404).json({"error": {message:"usuario inexistente", code:"002001000", err }})
    })
}

const _update_password = (req, res) => {
    const { senha } = req.body
    const { id } = req.usuario
    if (!senha) 
        res.status(400).json({ "error": { message:"O campo de senha é obrigatorio", code:"001006000" } })
    else if (bcrytpjs.compareSync(senha, req.usuario.senha)) {
        Usuario.findByIdAndUpdate(id, { senha })
        .then( usuario => {
            res.json(usuario)
        })
        .catch( err => {
            console.log(err)
            res.status(404).json({"error": {message:"usuario inexistente", code:"002001000", err }})
        })
    } else res.status(404).json({"error":{message:"senha ou email incoreto", code:"001008000" }})
    
}

const _update_adm = (req, res) => {
    const { nome, email, senha } = req.body
    const { id } = req.params
    Usuario.findByIdAndUpdate(id, { nome, email, senha })
    .then( usuario => {
        res.json(usuario)
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
        res.json(usuario)
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
        res.json(usuario)
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
        password: _update_password,
        adm: _update_adm
    },
    delete: {
        normal: _delete,
        adm: _delete_adm
    },
    
}