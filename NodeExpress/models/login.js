const secret = require('../config/secret')
const jwt = require('jsonwebtoken');
const {findByEmail} = require('../models/funcionario')

class Login{
    // gera  o jwt de um funcionario se esse estiver cadastrado
    async getToken(func, res){
        const foundedFunc = await findByEmail(func.email);
        if(!foundedFunc.data){
            res.status(400).send("Usuario nao encontrado")
            return
        }

        if(func.senha === foundedFunc.data.senha){
            jwt.sign({funcionario: foundedFunc.data.nome}, secret, { expiresIn: '1day' }, (err, token) => { // instead of user:user and token:token, ES6 if the same name can use only the word
                res.json({
                    token
                })
            });
        }else{
            res.status(403).send("senha incorreta")
        }
    }
}

module.exports = new Login()