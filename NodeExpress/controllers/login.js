const Login = require('../models/login')

// Rotas para realizar o login
module.exports = app => {
    app.post('/login', (req,res) => {
        Login.getToken(req.body,res)
    })
}