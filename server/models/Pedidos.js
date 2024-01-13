const mongoose = require('mongoose');

let Pedidos = mongoose.Schema({
    client: Object,
    pizzas : Object,
    totalVenda: Number,
    data: Date,
})

module.exports = mongoose.model('Pedidos', Pedidos)

// const Pedidos = mongoose.model('Pedidos', {
//     client: Object,
//     pizzas: Object,
//     totalVenda: Number,
//     data: Date,
// })

// module.exports = Pedidos;