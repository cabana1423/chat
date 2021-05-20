const mongo = require('mongoose');
const baseURL = 'MONGOURL ADRESİ';
mongo.connect("mongodb+srv://cabana_2:Mundo1423@pruebas.9mauq.mongodb.net/chat",{useUnifiedTopology: true,  useCreateIndex: true, useNewUrlParser: true}).then((db)=>{
    console.log('Connected MONGODB');
}).catch((error)=> console.log('Not Connected'));