const mongoose = require('mongoose')

let Clients = mongoose.Schema({
    name: String,
    email: { type: String, unique: true },
    contact: String,
    password: String,
    adress: {
        cep: { type: String },
        logradouro: { type: String } ,
        number: { type: String },
        complemento: { type: String} ,
        bairro: { type: String },
        city: { type: String },
        uf: { type: String }
    }
})


module.exports = mongoose.model('Client', Clients)
 