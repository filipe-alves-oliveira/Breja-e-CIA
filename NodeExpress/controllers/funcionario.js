const Funcionario = require('../models/funcionario')

// Rotas para CRUD do funcionarios
module.exports = app => {
    app.get('/funcionario', async(req,res) => {
        const response = await Funcionario.find(); 
        res.status(200).send(response);
    })
    app.post('/funcionario', async (req,res) => {
        await Funcionario.insertOne(req.body,res);
    })
    app.put('/funcionario/:id', async (req,res) => {
        const id = req.params.id;
        const response = await Funcionario.updateOne(id,req.body);
        res.status(response.status).send(response.response);
    })
    app.delete('/funcionario/:id', async (req,res) => {
        id = req.params.id;
        Funcionario.deleteOne(id,res);
    })
}