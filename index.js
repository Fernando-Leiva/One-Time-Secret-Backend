const express = require('express')
const app = express()
const cors = require('cors')
const port = 5050
const routes = require('./routes/index')

app.use(cors())

app.use(express.urlencoded({ extended: true })); // To expect JSON as body

app.use(express.json()); // To parse the incoming requests with JSON payloads

app.use('/redirect',routes)

app.listen(port,()=>{
    console.log('server up and running...',port)
})
