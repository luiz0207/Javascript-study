const https = require('https')
//const API = 'https: //jsonplaceholder.typicode' pegar API comectando com callback
https.get(API, res => {
    console.log(res.statusCode)
})

console.log('conectando API')