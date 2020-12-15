//importando o pacote
const mongoose = require('mongoose');
const { stringify } = require('querystring');

//definindo o schema
const clienteSchema = mongoose.Schema ({
  nome:{type:String, required:true},
  fone:{type:String, required:false, default:'00000000'},
  email:{type:String, required:true}
});

module.exports = mongoose.model('Cliente', clienteSchema);
