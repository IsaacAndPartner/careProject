const express = require('express');
const conectarDB = require('./config/db');
const app = express();

conectarDB();

app.use(express.json());

app.use('/api', require('./routes/evento'))


app.listen(4000, () => {
    console.log('El servidor está corriendo desde el puerto 4000');
})

















