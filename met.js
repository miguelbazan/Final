const credentials = require('request')

const BDMet = function(title,callback){
    const url = 'https://collectionapi.metmuseum.org/public/collection/v1/search?q=' + title

   // console.log(url)

    request({url,json:true}, function(error,response){
        if(!error && response.statusCode == 200) {
            const data = response.body
            objeto = data.objectIDs[0]
        } else {
            callback('Error',undefined)
        } 
    })
}

const 

module.exports = {
    BDMet: BDMet
}