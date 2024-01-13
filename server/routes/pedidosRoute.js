const Pedidos = require('../models/Pedidos')
const router = require('express').Router()

// CREATE

router.post('/', async (req, res) => {

    const {
        client,
        pizzas,
        totalVenda,
        data,
    } = req.body

    // if (!client, pizzas, totalVenda, data) {
    //     res.status(422).json({error: "Espaço vazio."})
    //     return
    // }

    const pedidos = {
        client,
        pizzas,
        totalVenda,
        data
    }

    try {
        await Pedidos.create(pedidos)
        res.status(201).json({msg:"Deu certo!"})
    } catch(err) {
        res.status(500).json({error: err})
    }
})

// READ

router.get('/', async (req, res) => {
    try{
        const pedidos = await Pedidos.find()
        res.status(200).json( pedidos )
    } catch(err) {
        res.status(500).json({error: err})
    }
})

// DELETE

module.exports = router