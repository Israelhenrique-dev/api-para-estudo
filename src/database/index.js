const mongoose = require('mongoose'); /*Mongoose é um módulo do NodeJS desenvolvido para conectar-se ao MongoDB, que fornece uma solução simples, baseada em esquemas para modelar os dados do aplicativo*/

mongoose.connect('mongodb://localhost/noderest'); //Conectando com banco de dados em mongo.
mongoose.Promise = global.Promise;

module.exports = mongoose;
