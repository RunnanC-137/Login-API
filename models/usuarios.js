const { Schema, model } = require("mongoose")

module.exports = model(
    "Usuario", 
    new Schema({
        nome: { type: String, required: true, minlength: 3, maxlength: 50 },
        email: { type: String, required: true, minlength: 3, maxlength: 100 },
        senha: { type: String, required: true, minlength: 3, maxlength: 200 },
        grupo: { type: String, default: "normaluser"},
        createdAt: { type: Date, default: Date.now },
    })
)