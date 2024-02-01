require('../database/database');
require('dotenv').config();
// Inicialimos la libreria de express guardando en variables para su uso:
const express = require('express');
const app = express();

// Declaramos las rutas con los controladores que deseamos ejecutar:
const getUsers = require('../routes/userRoutes');
const userData = require('../routes/userRoutes');
const consoleUser = require('../routes/userRoutes');
const addNote = require('../routes/noteRoutes');
const getAllNotes = require('../routes/noteRoutes');
const findNoteAndDelete = require('../routes/noteRoutes');
const createUser = require('../routes/userRoutes');
const loginUser = require('../routes/authRoutes');

app.use(express.json())

app.use('/', getUsers)
app.use('/', userData)
app.use('/', consoleUser)
app.use('/', addNote)
app.use('/', getAllNotes)
app.use('/', findNoteAndDelete)
app.use('/', createUser)
app.use('/', loginUser)

// Inicializamos el listen en el puerto sobre el que queremos que el servidor escuche:
app.listen(process.env.PORT, function(){
  console.log(`Estoy escuchando en el puerto ${process.env.PORT}`)
})