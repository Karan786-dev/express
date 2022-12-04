const express = require('express')
const app = express()
const router = express.Router()
let port = 3000

app.use('/express',router)

router.get('/',(req,res)=>{
    res.send('Hello , World')
})

router.get('/ip',(req,res) =>{
    const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    console.log(''+ip+'  ,,,, '+lookup(ip)+'')
})

app.listen(port,function(){
    console.log('Listening To The Server')
})
