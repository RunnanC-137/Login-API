require("dotenv").config()
const Usuario = require("../models/usuarios.js")
const bcrytpjs = require("bcryptjs")
const jwt = require("jsonwebtoken")
const Joi = require("@hapi/joi")

const validation = (reqbody) => Joi.object({
    senha: Joi.string().required().min(6).max(400), 
    email: Joi.string().required().min(3).max(50), 
    nome: Joi.string().required().min(3).max(100)
}).validate(reqbody)

const create = (req, res) => {
    const { senha, email, nome } = req.body
    if (!email || !senha || !nome) 
        res.status(400).json({ "error": "O campo de matricula e senha são obrigatorios" })
    const { error } = validation(req.body)
    const hashSenha = bcrytpjs.hashSync(senha)
    if (error) 
        res.status(400).json({"error": error.message})
    else Usuario.findOne({ email })
    .then( usuario => {
        if (usuario) 
            res.status(400).json({"error": `este email ${email}, ja está em uso`})
        else Usuario.findOne({ nome })
        .then( usuario => {
            if (usuario) 
                res.status(400).json({"error": `este nome ${nome}, ja está em uso`})
            else new Usuario({
                senha: hashSenha, 
                email, 
                nome
            }).save()
                .then( usuario => res.json(usuario) )
                .catch( err => {
                    console.log(err)
                    res.status(400).json(err)
                })
        })
    })
    
}


const login = (req, res) => {
    const { senha, email } = req.body
    if (!email|| !senha) 
        res.status(400).json({ "error": "O campo de matricula e senha são obrigatorios" })
    Usuario.findOne({ email })
    .then( usuario => {
        if (!usuario) res.status(404).json({"error":"senha ou email incoretos"})
        else if (bcrytpjs.compareSync(senha, usuario.senha)) {
            //Gerando token
            const token = jwt.sign(
                { id: usuario.id },
                process.env.TOKEN_SECRET,
                { expiresIn: process.env.TOKEN_EXPIREIN }
            )
            res.header("athorization-token", token)
            res.json("usuario logado")
        }
        else res.status(404).json({"error":"senha ou email incoretos"})
    })
}



module.exports = {
    login,
    create
}