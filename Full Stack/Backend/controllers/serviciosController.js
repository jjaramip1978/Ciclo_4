const Servicio = require('../models/servicio')

module.exports.nuevoServicio = async (req, res) => {
    const body = req.body;
    try {
        const nuevoSer = await Servicio.create(body);
        res.status(200).json(nuevoSer);
    } catch (error) {
        return res.status(500).json({
            mensaje: "Ocurrio un error !!!",
            error
        })
    }
}

module.exports.buscarServicio = async (req, res) => {
    const { id } = req.params;
    try {
        const nuevoSer = await Servicio.findById(id);
        res.json(nuevoSer);
    } catch (error) {
        return res.status(500).json({
            mensaje: "Ocurrio un error !!!",
            error
        })
    }
}

module.exports.listarServicio = async (req, res) => {
    try {
        const nuevoSer = await Servicio.find();
        res.json(nuevoSer);
    } catch (error) {
        return res.status(500).json({
            mensaje: "Ocurrio un error !!!",
            error
        })
    }
}

module.exports.borrarServicio = async (req, res) => {
    const { id } = req.params;
    try {
        const nuevoSer = await Servicio.findByIdAndDelete(id);
        res.json(nuevoSer);
    } catch (error) {
        return res.status(500).json({
            mensaje: "Ocurrio un error !!!",
            error
        })
    }
}

module.exports.actualizarServicio = async (req, res) => {
    const { id } = req.params;
    const body = req.body;
    try {
        const nuevoSer = await Servicio.findByIdAndUpdate(id, body, { new: true });
        res.json(nuevoSer);
    } catch (error) {
        return res.status(500).json({
            mensaje: "Ocurrio un error !!!",
            error
        })
    }
}