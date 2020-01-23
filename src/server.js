const express = require('express');
const cors = require('cors')
const mongoose = require('mongoose');
const requireDir = require('require-dir');

//Iniciando o app
const app = express();
app.use(express.json());
app.use(cors());

// Iniciando o DB
mongoose.connect('mongodb://localhost:27017/node-api', {
  useNewUrlParser: true,
  useUnifiedTopology:true
});

requireDir('./models');

//primeira rota
app.use('/api', require('./routes'));

app.listen(3001, () => {
  console.log('Executando servidor')
});