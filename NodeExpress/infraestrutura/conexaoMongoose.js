var mongoose = require("mongoose");
 var mongooseConection = mongoose.connect("mongodb+srv://admin:admin@cluster0.jmgkf.mongodb.net/controleEstoq?retryWrites=true&w=majority", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
module.exports = mongooseConection