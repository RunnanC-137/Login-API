const administrador = (req, res, next) => {
    if (req.usuario.grupo === "administrador") 
        next()
    else res.status(401).json({"error": {message:"Nível de permissão insuficiente", code:"004001000"}})
}


module.exports = {
    administrador
}