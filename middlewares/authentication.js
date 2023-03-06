const jwt = require("jsonwebtoken")
const Usuario = require("../models/usuario")
const { secret } = require("../config/configAuth")

module.exports = (req, res, next) => {
    const token = req.header("athorization-token")
    if (!token) res.status(401).json({"error": {message:"Token inexistente", code:"003001000" }})
    else jwt.verify(token, secret, function(err, decoded) {
            if (err) { 
                console.log(err)
                res.status(401).json({"error": {message:"Token invalido", code:"003002000", err }})
            }
            else Usuario.findById(decoded.id, "-senha")
                .then(usuario => {
                    req.usuario = usuario
                    next()
                }).catch(err => {
                    console.log(err)
                    res.status(401).json({"error": {message:"Usuario inexistente", code:"003003000", err }})
                })
            
        })
        
    
}