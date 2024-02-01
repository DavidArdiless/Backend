require('dotenv').config();
const mongoose = require('mongoose');

const connectionDB = async () => {
  try {
    await mongoose.connect(process.env.DB_CONNECTION)
    console.log('Conexión exitosa a la DB')
  } catch (error) {
    console.log('No se pudo conectar a la DB')
    console.log(error)
  }
}

connectionDB();
module.exports = { connectionDB };