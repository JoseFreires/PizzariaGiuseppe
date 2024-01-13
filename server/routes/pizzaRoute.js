const Pizzas = require('../models/Pizzas')
const routerPizza = require('express').Router()


// READ

routerPizza.get('/', async (req, res) => {
    try{
        const pizzas = await Pizzas.find()
        res.status(200).json( pizzas )
    } catch (err){
        res.status(500).json({error: err})
    }
})

module.exports = routerPizza;