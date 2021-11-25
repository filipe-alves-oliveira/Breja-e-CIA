const mongoose = require("mongoose");
const Schema  = mongoose.Schema;

const produtoSchema = new Schema({
    nome:  String,
    preco: Number,
    quantEstq: Number
},{
    timestamps: true
});

module.exports = mongoose.model('Produto',produtoSchema,"produtos");;