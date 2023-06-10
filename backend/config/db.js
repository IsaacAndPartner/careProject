const mongoose = require('mongoose');
require('dotenv').config({path:'config.env'});


const conectarDB = async () => {
    try {
        
        await mongoose.connect(process.env.DB_MONGO, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        console.log('la base de datos se conectó correctamente')
    } catch (error) {
        console.log('Hubo un error al conectarse a la base de datos')
        console.log(error)
    }
};

module.exports = conectarDB;
