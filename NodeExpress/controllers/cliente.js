const Cliente = require('../models/cliente')

// Rotas para CRUD do cliente
module.exports = app => {
    app.get('/cliente', async(req,res) => {
        const response = await Cliente.find(); 
        res.status(200).send(response);
    })
    app.post('/cliente', async (req,res) => {
        await Cliente.insertOne(req.body,res);
    })
    app.put('/cliente/:id', async (req,res) => {
        const id = req.params.id;
        const response = await Cliente.updateOne(id,req.body);
        res.status(response.status).send(response.response);
    })
    app.delete('/cliente/:id', async (req,res) => {
        id = req.params.id;
        Cliente.deleteOne(id,res);
    })
}