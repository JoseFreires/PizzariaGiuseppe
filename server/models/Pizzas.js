const mongoose = require('mongoose');

const Pizzas = mongoose.model('Pizzas', {
    idPizza: Number,
    sabor: String,
    valor: Number,
})

module.exports = Pizzas;