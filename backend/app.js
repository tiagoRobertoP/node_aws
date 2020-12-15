const express = require ('express');
const app= express();
const bodyParser = require ('body-parser');
const mongoose = require('mongoose');
const cliente = require('./models/cliente');
const clienteRoutes = require ('./rotas/clientes');


mongoose.connect('mongodb+srv://thesand:thejumanji@cluster0.ui8la.mongodb.net/app-mean?retryWrites=true&w=majority')
.then(()=>{
  console.log("conexao ok")
}).catch(()=>{
  console.log("Conexão Nok")
});

app.use(bodyParser.json());


app.use ((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', "*");
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type,Accept');
  res.setHeader('Access-Control-Allow-Methods', 'GET, PUT, POST, PATCH, DELETE, OPTIONS');
  next();
});

app.use ('/api/clientes', clienteRoutes);

module.exports=app;
