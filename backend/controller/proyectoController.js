const Events =  require('../models/evento');

exports.crearEvento = async(req,res) => {
    try {
        let data_evento;
        data_evento = new Events(req.body);
        await data_evento.save();
        res.send(data_evento);
    } catch (error) {
        console.log(error);
        res.status(500).send('hubo un error en el servidor');
    }
}

exports.obtenerEventos = async(req, res) => {
try {
    const data_evento = await Events.find();
    res.json(data_evento);
} catch (error) {
    console.log(error)
    res.status(500).send('Hubo un error en el servidor');
}
}

exports.obtenerUnEvento = async(req,res) => {
    try {
        const data_evento = await Events.findById(req.params.id);
        if(!data_evento){
            res.status(404).json({msg:'no existe el evento'});
        }
        res.json(data_evento);
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error en el servidor');
        
    }
}

exports.modificarEvento = async(req, res) => {
    try {
        const {categoria, nombre, fecha, descripcion, imagen, estado} = req.body;
        let data_evento = await Events.findById(req.params.id);

        if(!data_evento) {
            res.status(404).json({msg: 'No existe el evento'});
        }
        data_evento.categoria = categoria;
        data_evento.nombre = nombre;
        data_evento.fecha = fecha;
        data_evento.descripcion = descripcion;
        data_evento.imagen = imagen;
        data_evento.estado = estado;

        data_evento = await Events.findOneAndUpdate({_id: req.params.id}, data_evento, {new: true});
        res.json(data_evento);
    } catch (error) {
        console.log(500).send('Hubo un error en el servidor')
    }
}

exports.eliminarEvento = async(req,res) => {
    try {
        const data_evento = await Events.findById(req.params.id);
        if(!data_evento){
            res-status(404).json({msg:'no existe el evento'})
        }
        await Events.findOneAndRemove({id: req.params.id});
        res.json({msg: 'Evento eliminado'})

    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error en el servidor');
        
    }
}
