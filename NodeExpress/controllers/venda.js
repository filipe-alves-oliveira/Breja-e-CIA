const Venda = require('../models/venda');
const handleVenda = require("../models/vendaHandlers/handleVenda")

// Rotas para venda lista todas as vendas com lookUp, e registro de venda com regra de negocio
module.exports = app => {
    app.get('/venda', async(req,res) => {
        const response = await Venda.find(); 
        const finalResponse = []
        response.forEach(doc => {
            finalResponse.push({_id:doc._id, quantidade: doc.quantidade, funcionario: doc.resultFun[0].nome, produto: doc.resultProd[0].nome, cliente: doc.resultCli[0].nome})
        })
        res.status(200).send(finalResponse);
    })
    app.post('/venda', async (req,res) => {
        // verifica se a venda pode ser feita e ja subtrai do estoque caso possa
        let result = await handleVenda(req.body.idProduto,req.body.quantidade);
        if(result.status === 400){
            res.status(400).send(result.response)
            return
        } 
        // insere a venda na tabela de vendas
        result = await Venda.insertOne(req.body,res);
        if(!result.success){
            res.status(400).send(result.data);
            return
        }
        res.status(200).send(result.data)


    })
}