const Produto = require('../models/produto');

// Rotas para CRUD do produto
module.exports = app => {
    app.get('/produto', async (req,res) => {
        const response = await Produto.find(); 
        res.status(200).send(response);
    })
    app.post('/produto', async (req,res) => {
        await Produto.insertOne(req.body,res);
    })
    app.put('/produto/:id', async (req,res) => {
        const id = req.params.id;
        const response = await Produto.updateOne(id,req.body);
        res.status(response.status).send(response.response);
    })
    app.delete('/produto/:id', async (req,res) => {
        id = req.params.id;
        Produto.deleteOne(id,res);
    })
}