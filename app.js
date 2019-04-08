const path = require('path')
const express = require('express')
const met = require('./met.js')

const app = express()

const port = process.env.PORT || 3000

const publicDir = path.join(__dirname,'public')

const title = 'sunflowers'

app.use(express.static(publicDir))

app.get('./extra', function(req,res){
    res.send({
        "Dia": "Abril 8",
        "Mensaje": "Hizo calor "
    })
})

app.get('/studentsA01281010', function(req,res){

    var id = req.params.id;
    console.log(id)

        res.send({
            "id": "A01281010",
            "fullname": "Miguel Bazán Aviña",
            "nickname": "Mike",
            "age": 24
        })

})

app.get('/met', function(req,res){
  res.setHeader('Access-Control-Allow-Origin', '*');
    if (!req.query.search){
        return res.send({
            error: 'No se encontro'
        })
    }
    met.BDMet(req,query.search, function(error,data){
        if (error){
            return res.send(data)
        } else {
            met.searchID(data, function(error,response){
                if(error){
                    return res.send(response)
                } else{
                    response["searchTerm"] = req.query.search
                    res.send(response)
                }
            })
        }
    })
})


app.get('*', function(req,res){
    res.send({
        error:'Esta ruta no existe'
    })
}) 

app.listen(port,function(){
    console.log('up and running')
})