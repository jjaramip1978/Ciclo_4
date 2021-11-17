// const express = require('express');
// const morgan = require('morgan');
// const cors = require('cors');
// const path = require('path');

import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import path from 'path';

const app = express();

//Conexión a la base de datos (local)
const mongoose = require('mongoose');

const uri = 'mongodb+srv://ciclo3_Team5:ciclo3_Team5@cluster0.hh4iw.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
const options = {useNewUrlParser: true, useUnifiedTopology: true};

mongoose.connect(uri,options).then(
    ()=>{
        console.log('Ya Estoy conectado a la BD')
    },
    err =>{
        err
    }
);


//MIDDLEWARE
app.use(morgan('tiny'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true}))



//RUTA
// app.get('/',function(req,res) {

//     res.send('Hola mundo');
    
// });

app.use('/api',require('./routes/consultaprof'));
app.use('/api',require('./routes/consultaser'));
app.use('/api',require('./routes/consultacli'));
 
// Middleware para Vue.js router modo history
const history = require ('connect-history-api-fallback')
app.use(history());
app.use(express.static(path.join(__dirname, 'public')));


//CONFIGURACION DEL PUERTO

// app.listen(3000,function(){

//     console.log("Ek servidor escucha por el puerto 3000");
// });


app.set('puerto',process.env.PORT||3000);
app.listen(app.get('puerto'),function(){
    console.log('Configuración dinamica del puerto:  '+app.get('puerto'));
});