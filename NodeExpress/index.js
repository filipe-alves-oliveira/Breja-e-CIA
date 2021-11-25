// O index.js é responsável por subir o servidor
// As configurações do express estão na pasta CONFIG 
// Os controladores de rota na pasta CONTROLLERS
const connection = require('./infraestrutura/conexao');
const customExpress = require('./config/customExpress'); // customExpress recebe o module.export do customExpress.js

connection.connect(err => {
    if(err){
        console.log(err);
    }else{
        console.log('conectado com sucesso');
        const app = customExpress() // app executa o module.export
        app.listen(3001, () => console.log('servidor rodando na porta 3001'));  // Cria um UNIX socket na porta especificada
        
    }
})



 