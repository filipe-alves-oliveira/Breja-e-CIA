//http://expressjs.com/ link para documentação express
const cors = require('cors')
const express = require('express') // require é uma função que vem junto com NodeJS, seu proposito é carregar (load) um módulo..
                                   //.. "The basic functionality of require is that it reads a JavaScript file, executes the file, and then proceeds to return the exports"
                                   //https://nodejs.org/en/knowledge/getting-started/what-is-require
const consign = require('consign')  
                              
const bodyParser = require('body-parser')

module.exports = () => { //module.exports é como se fosse uma lib em outras linguagens
    const app = express() // guarda a execução do módulo express na variavel app
    
    app.use(bodyParser.urlencoded({extended:true})) //app.use é uma função do express 
    app.use(bodyParser.json())


    app.use(function (req, res, next) {
      res.header("Access-Control-Allow-Origin", "*");
      res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE,PATCH");
      res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
      next();
    });

    consign()
        .include('controllers') // inclui a pasta controllers
        .into(app)             // na const app
    
    return app
}
 