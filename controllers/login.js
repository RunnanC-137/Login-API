const Usuario = require("../models/usuario.js")
const bcrytpjs = require("bcryptjs")
const jwt = require("jsonwebtoken")
const Joi = require("@hapi/joi")
const { secret, expiresIn } = require("../config/configAuth")

const validation = (reqbody) => Joi.object({
    senha: Joi.string().required().min(6).max(400), 
    email: Joi.string().required().min(3).max(50), 
    nome: Joi.string().required().min(3).max(100)
}).validate(reqbody)

const create = (req, res) => {
    const { senha, email, nome } = req.body
    if (!email || !senha || !nome) 
        res.status(400).json({ "error":{ message: "O campo de matricula e senha são obrigatorios", code:"001008000", err} })
    const { error } = validation(req.body)
    const hashSenha = bcrytpjs.hashSync(senha)
    if (error) 
        res.status(400).json({"error":{ message: error.message, code:"001002000", err }})
    else Usuario.findOne({ email })
    .then( usuario => {
        if (usuario) 
            res.status(400).json({"error": {message:`este email ${email}, ja está em uso`, code:"001003000", err }})
        else Usuario.findOne({ nome })
        .then( usuario => {
            if (usuario) 
                res.status(400).json({"error": {message:`este nome ${nome}, ja está em uso`, code:"001004000", err }})
            else Usuario.create({
                senha: hashSenha, 
                email, 
                nome,
                grupo: (nome && senha) == "administrador" 
                    ? "administrador" 
                    : "normaluser"
            }).then( usuario => res.json(usuario) )
            .catch( err => {
                console.log(err)
                res.status(400).json({"error": {message: "falha ao tentar criar o usuário", code:"001005000", err }})
            })
        })
    })
    
}


const login = (req, res) => {
    const { senha, email } = req.body
    if (!email|| !senha) 
        res.status(400).json({ "error": { message:"O campo de matricula e senha são obrigatorios", code:"001006000", err } })
    Usuario.findOne({ email })
    .then( usuario => {
        if (!usuario) res.status(404).json({"error":{ message:"senha ou email incoreto",code:"001007000" }})
        else if (bcrytpjs.compareSync(senha, usuario.senha)) {
            //Gerando token
            const token = jwt.sign(
                { id: usuario.id },
                secret,
                { expiresIn }
            )
            
            res
            .header("athorization-token", token)
            .cookie('token', token, { httpOnly: true })
            .json("usuario logado")
            
        }
        else res.status(404).json({"error":{message:"senha ou email incoreto", code:"001008000" }})
    })
}



module.exports = {
    login,
    create
}