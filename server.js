// Dependencies
const { urlencoded } = require('body-parser')
const express = require('express')
const methodOverride = require('method-override')
const mongoose = require('mongoose')
const { message } = require('statuses')
require('dotenv').config()

// config app
const app = express()

// port 
PORT = process.env.PORT || 3000

// Database
const db = mongoose.connection
const MONGODB_URI = process.env.MONGODB_URI

mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  
// connect mongo 
db.on('error', (err) => consol.console.log(message.err + "mongo is not connected"))
db.on('connected', () => console.log('mongo connected'))
db.on('disconnected', () => console.log("mongo disconnected"))

// middleware
app.use(express.static('public'))
app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(methodOverride('_method'))

// routes

app.get('/', (req,res) => {
    res.send("Hello world")
})


// listen 
app.listen(PORT, () => console.log(`express listening on port: ${PORT}`))



