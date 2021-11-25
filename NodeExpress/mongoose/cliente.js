const mongoose = require("mongoose");
const Schema  = mongoose.Schema;

const clienteSchema = new Schema({
    nome:  String,
    telefone: String,
    email: String,
    endereco: String
},{
    timestamps: true
});

module.exports = mongoose.model('Cliente',clienteSchema,"clientes");;