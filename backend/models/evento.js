const mongoose = require('mongoose');

const eventosSchema = mongoose.Schema({
    categoria:{
        type: String,
        required: true
    },
    nombre:{
        type: String,
        required: true
    },
    fecha:{
        type: Date,
        default: Date.now()
    },
    Descripcion:{
        type: String,
        required: true
    },
    imagen:{
        type: String,
        required: true
    },
    estado:{
        type: String,
        required: true
    },
});

module.exports = mongoose.model('evento', eventosSchema);