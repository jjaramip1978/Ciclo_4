/* import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import path from 'path'; */

const express = require('express');
const mongoose = require('mongoose')
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
require('dotenv').config();
const app = express();


const authRoutes = require('./routes/authRoutes');

const uri = 'mongodb+srv://ciclo3_Team5:ciclo3_Team5@cluster0.hh4iw.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
const options = { useNewUrlParser: true, useUnifiedTopology: true };

mongoose.connect(uri, options).then(
    () => {
        console.log('Connected to MongoDB');
        app.listen(process.env.PORT || 5000, () => {
            console.log('Listening on port 5000');
        });
    }
).catch(err => console.log(err));

//MIDDLEWARE
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use(cors());

app.use('/api', require('./routes/profesionalRoutes'));
app.use('/api', require('./routes/servicioRoutes'));
app.use('/api', require('./routes/clienteRoutes'));
app.use(cookieParser());
app.use('/auth', authRoutes);

//CONFIGURACION DEL PUERTO

// app.set('puerto', process.env.PORT || 5000);
// app.listen(app.get('puerto'), function () {
//     console.log('Configuración dinamica del puerto:  ' + app.get('puerto'));
// });