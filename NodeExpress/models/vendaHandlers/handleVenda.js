
const Produto = require('../produto')

// verifica se a venda pode ser feita
// se puder, é subtraido do estoque
async function handleVenda(id,quant){
    const produto = await Produto.findId(id)
    if(produto.quantEstq < parseInt(quant,10)){
        return{
            status: 400,
            response: "Não existem produtos suficientes em estoque para realizar esta transação"
        }
    }
    produto.quantEstq  = produto.quantEstq - quant;
    const data = {quantEstq: produto.quantEstq}
    return await Produto.updateOne(id, data);
  }
module.exports = handleVenda;