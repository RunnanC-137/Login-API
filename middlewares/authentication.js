require("dotenv").config()
const jwt = require("jsonwebtoken")
const Usuario = require("../models/usuarios")
module.exports = (req, res, next) => {
    const token = req.header("athorization-token")
    if (!token) res.status(401).json({"error":"Token inexistente"})
    else jwt.verify(token, process.env.TOKEN_SECRET, function(err, decoded) {
            if (err) { 
                console.log(err)
                res.status(401).json({"error":"Token invalido"})
            }
            else Usuario.findById(decoded.id, "-senha")
                .then(usuario => {
                    //delete usuario.sennha
                    console.log(usuario)
                    req.usuario = usuario
                    next()
                }).catch(err => {
                    console.log(err)
                    res.status(401).json({"error":"Token invalido"})
                })
            
        })
        
    
}