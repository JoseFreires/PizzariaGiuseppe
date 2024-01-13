const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors')
const app = express();

require('dotenv').config()

app.use(cors())

// a porta
const dbUser = process.env.dbUser; 
const dbPassword = process.env.dbPassword;

mongoose
  .connect(`mongodb+srv://${dbUser}:${dbPassword}@pizzaria.f8y6tpz.mongodb.net/pizzas`)
  .then(() => {
    console.log("Conectado ao MongoDB"),
    app.listen(3001)
  })
.catch((err) => console.log(err))


// lendo JSON
app.use(
  express.urlencoded({
    extended: true,
  })
)

app.use(express.json())

// Routes 
const clienstRoutes = require('./routes/clientsRoute')
app.use('/clients', clienstRoutes)

const pizzasRoutes = require('./routes/pizzaRoute')
app.use('/pizzas', pizzasRoutes)

const pedidosRoutes = require('./routes/pedidosRoute')
app.use('/pedidos', pedidosRoutes)

// rota inicial
app.get('/', (req, res) => {
  res.json({msg: "Tudo certo!" })
})

