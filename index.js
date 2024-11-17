require('dotenv').config()

const express = require('express')
const cors = require('cors')
const tsServer = express()
const router = require('./router/routes')
require('./database/dbConnection')

tsServer.use(cors())
tsServer.use(express.json())
tsServer.use(router)

const PORT = 3000||process.env.PORT

tsServer.listen(PORT,()=>{
    console.log(`tsServer started at port ${PORT}`);
})

tsServer.get('/',(req,res)=>{
res.status(200).send(`<h1>tsServer started at port ${PORT}<h1/>`)
})