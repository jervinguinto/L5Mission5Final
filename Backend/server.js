const express = require('express')
const bodyParser = require('body-parser')
require('dotenv').config()
const PORT = process.env.PORT
const app = express();
const Mongodb=require('./mongoose')
const cors = require("cors");

app.use(cors())
app.use(bodyParser.json())
app.get('/',Mongodb.getTestimony)
app.post('/',Mongodb.createTestimony)
app.get('/rental',Mongodb.getRental)


app.listen(PORT,()=>{

    console.log('server is running at',PORT)
})

