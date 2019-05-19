const app = require('express')()
const request = require('request');

app.get('/',(req,res)=>{
    request.post('https://www.naniplay.com/api/source/80oe5405g7o',{body:"r=&d=www.naniplay.com"},function(err,data,body){
      const dt = JSON.parse(body)
      request.get(`${dt.data[0].file}`).pipe(res)
    })
})

app.listen(4000)