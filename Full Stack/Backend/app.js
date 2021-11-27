/* import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import path from 'path'; */

const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose')
require('dotenv').config();

const authRoutes = require('./routes/authRoutes');

const app = express();
/* 
const mongoose = require('mongoose');
const morgan = require('morgan')
const bodyParser = require('body-parser');
const passport = require('passport');
const passportJWT = require('passport-jwt');
const ExtractJwt = passportJWT.ExtractJwt;
const JwtStrategy = passportJWT.Strategy;
const jwt = require('jsonwebtoken');
const config = require('./config'); */


const uri = process.env.ATLAS_URI;
const options = {useNewUrlParser: true, useUnifiedTopology: true};

mongoose.connect(uri,options).then(
    ()=>{
        console.log('Conexion exitosa a la BD')
        console.log('Listen on port: ' + process.env.PORT)
    },
    err =>{
        err
    }
);


//MIDDLEWARE
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// app.use(cors());



//RUTA
// app.get('/',function(req,res) {

//     res.send('Hola mundo');
    
// });

app.use('/api',require('./routes/profesionalRoutes'));
app.use('/api',require('./routes/consultaser'));
app.use('/api',require('./routes/consultacli'));
app.use('/auth',authRoutes);
 
// Middleware para Vue.js router modo history
const history = require ('connect-history-api-fallback')
app.use(history());
app.use(express.static(path.join(__dirname, 'public')));


//CONFIGURACION DEL PUERTO

app.set('puerto',process.env.PORT||3000);
app.listen(app.get('puerto'),function(){
    console.log('Configuración dinamica del puerto:  '+ app.get('puerto'));
});