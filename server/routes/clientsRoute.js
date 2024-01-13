const Client = require('../models/Clients')
const router = require('express').Router()

// CREATE

router.post('/', async (req, res) => {

    const {
      name, 
      email, 
      contact, 
      password, 
      cep, logradouro, number, complemento, bairro, city, uf
    } = req.body

  
    if(!name || !email || !contact || !password){
      
      res.status(422).json({error: "Espaço vazio"})
      return
    } 

     
  
    const clients = {
      name,
      email,
      contact,
      password,
      adress : { cep, logradouro, number, complemento, bairro, city, uf }
    }
    
    try{
  
      await Client.create(clients)
  
      res.status(201).json({msg: "Boa!"})
  
    } catch(err){

      res.status(500).json({error: err})

    }
})

// READ

router.get('/', async (req, res) => {
    try{
        const clients = await Client.find()
        res.status(200).json( clients )

    } catch(err){
        res.status(500).json({error: err})
    }
})

router.get('/:email', async (req, res) => {

  const email = req.params.email

  try{
    const clients = await Client.findOne({email: email})

    if(!clients){
      res.status(422).json({message: "Usuário não existe!"})
      return
    }

    res.status(200).json( clients )

  } catch(err){
    res.status(500).json({error: err})
  }

})


// UPDATE

router.post('/:email', async (req, res) => {

  const emailUser = req.params.email

  const { 
    cep, 
    logradouro, 
    number, 
    complemento, 
    bairro, 
    city, 
    uf
  } = req.body

  const clients = { 
      cep,
      logradouro,
      number,
      complemento,
      bairro,
      city,
      uf
  }

  try{
    const updateClient = await Client.updateOne({email: emailUser}, clients)

    if(updateClient.matchedCount === 0){
      res.status(422).json({message: "Usuário não existe!"})
      return
    }
    
    res.status(200).json( clients )

  } catch(err){
    res.status(500).json({error: err})
  }
})


// DELETE

router.delete('/:id', async (req, res) => {
  const id = req.params.id

  const clients = await Client.findOne({ _id: id })

  if(!clients){
    res.status(422).json({message: "Usuário não existe!"})
    return
  }

  try{
    const clients = await Client.deleteOne({ _id: id })
    res.status(201).json({message: "Usuário removido."})

  } catch(err){
    res.status(500).json({message: "Delete mal-sucedido"})
  }

})


module.exports = router 