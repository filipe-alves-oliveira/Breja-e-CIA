const mongoose = require("mongoose");
const Schema  = mongoose.Schema;

const funcionarioSchema = new Schema({
    nome:  String,
    email: String,
    senha: String
},{
    timestamps: true
});

module.exports = mongoose.model('Funcionario',funcionarioSchema,"funcionarios");;