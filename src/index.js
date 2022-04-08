//Core da aplicação
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json()); //Indicando que vou utilizar o body-parser com a função .json
app.use(bodyParser.urlencoded({ extended: false }));

require('./controllers/authController')(app);
app.listen(3000); //Porta de escuta da aplicação
