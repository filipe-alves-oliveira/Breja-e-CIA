const mongoose = require("mongoose");
const Schema  = mongoose.Schema;
const { ObjectId } = require("mongodb");
const vendaSchema = new Schema({
    idFuncionario: ObjectId,
    idProduto: ObjectId,
    idCliente: ObjectId,
    quantidade: Number
},{
    timestamps: true
});

module.exports = mongoose.model('Venda',vendaSchema,"vendas");