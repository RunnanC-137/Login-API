const administrador = (req, res, next) => {
    if (req.usuario.grupo === "administrador") 
        next()
    else res.status(401).json({"error": "Nível de permissão insuficiente"})
}

const normaluser = (req, res, next) => {
    if (["administrador", "normaluser"].indexOf(req.usuario.grupo) !== -1 ) 
        next()
    else res.status(401).json({"error": "Nível de permissão insuficiente"})
}

module.exports = {
    administrador,
    normaluser
}