//Controle de autenticação.
const express = require('express');

const User = require('../model/User');

//Definindo as rotas
const router = express.Router();

router.post('/register', async (req, res) => {
  const { email } = req.body;
  try {
    if (await User.findOne({ email }));
    return res.status(400).send({ error: 'Usuário já existe' });

    const user = await User.create(req.body);

    user.password = undefined;

    return res.send({ user });
  } catch (err) {
    return res.status(400).send({ error: 'Falha no registro' });
  }
});

module.exports = app => app.use('/auth', router);
