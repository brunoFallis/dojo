const express = require('express')
const mongoose = require('mongoose')
const app = express()

const routes = require('./routes')

mongoose.connect('mongodb+srv://semana:semana@cluster0-w455j.mongodb.net/test?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false
})

app.use(express.json())
app.use(routes)

app.listen(3000, () => {
  console.log(`Server listening on port 3000`)
})