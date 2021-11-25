const conexao = require("../infraestrutura/conexao");
const conecta = conexao.db("controleEstoq").collection("vendas");
const venda = require("../mongoose/venda");
var mongooseConection = require("../infraestrutura/conexaoMongoose");

class Funcionario{
    async find(){
       // inner join dos campos de venda
        const agg = [
            {
              '$lookup': {
                'from': 'funcionarios', 
                'localField': 'idFuncionario', 
                'foreignField': '_id', 
                'as': 'resultFun'
              }
            }, {
              '$lookup': {
                'from': 'produtos', 
                'localField': 'idProduto', 
                'foreignField': '_id', 
                'as': 'resultProd'
              }
            }, {
              '$lookup': {
                'from': 'clientes', 
                'localField': 'idCliente', 
                'foreignField': '_id', 
                'as': 'resultCli'
              }
            }
          ]
        const result = await conecta.aggregate(agg).toArray();
        return result
    }

    async insertOne(data,res){
      // inseri a venda ja validada na tabela
        const doc = new venda(data);
        const result = await doc.save().then(doc => {
            return ({
                success:true,
                data: doc
            })
        }).catch(err => {
            return ({
                success:false,
                data: err
            })
        }) 
        return result;
    }

}

module.exports = new Funcionario()