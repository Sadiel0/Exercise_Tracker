const express = require('express')
const app = express()
const mongoose = require('mongoose')
const port = 5000
require('dotenv').config()
app.use(express.json())
const uri = process.env.MONGO_DB;
mongoose.connect(uri, {useNewUrlParser: true})

const connection = mongoose.connection;

connection.once('open', () => {
  console.log('Database connection was a success');
})

//Declaring variables to use routes 
const userRouter = require('./routes/user')
const exercisesRouter = require('./routes/exercises')

app.use('/users', userRouter)
app.use('/exercises',exercisesRouter)
//

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Backend is listening on port ${port}`)
})