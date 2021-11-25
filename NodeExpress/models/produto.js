const conexao = require("../infraestrutura/conexao");
const conecta = conexao.db("controleEstoq").collection("produtos");
const produto = require("../mongoose/produto");
var mongooseConection = require("../infraestrutura/conexaoMongoose");
const { ObjectId } = require("mongodb");

class Produto{
    async find(){
        const result = await conecta.find().toArray();
        return result;
    }

    async findId(id){
      const result = await conecta.findOne({_id:ObjectId(id)})
      return result;
    }

    async insertOne(data,res){
        const doc = new produto(data);
        doc.save((err, doc) => {
            /* mongoose.connection.close() */
            if (err) {
              res.status(400).send(err);
            } else {
              res.status(200).send(doc);
            }
          });
    }

    async updateOne(id,data){
        const result = await produto.updateOne({ _id: ObjectId(id) }, { $set: data }).then((result, err) => {
            if (err) {
                return { status: 400, response: err }
            } else {
                return { status: 200, response: "Modified: " + result.nModified }
            }
        })
        return result;
    }

    async deleteOne(id,res){
        const query = { _id: ObjectId(id) };
        let result = null;

        try {
          result = await conecta.deleteOne(query);
        } catch (e) {
          console.log(e);
        } finally {
          if (result != null) {
            res.status(200).send(result);
          } else res.status(400).send("Erro");
        }
    }

    
   
}

module.exports = new Produto()