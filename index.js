const express = require('express')
const app = express()
const { lookup } = require('geoip-lite')
const router = express.Router()

router.get('/ip',(req,res) =>{
    const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    console.log(lookup(ip))
    console.log(ip)
})

app.use('/',router)
app.listen(300,function(){
    console.log('Listening To The Server')
})