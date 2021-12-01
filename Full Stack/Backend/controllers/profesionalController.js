const Profesion = require('../models/profesional');

module.exports.nuevoProfesional = async (req, res, next) => {

    const body = req.body;
    
    try {
        
        const nuevoPr = await Profesion.create(body);
        res.status(200).json(nuevoPr);

    } catch (error){
        return res.status(500).json({
            mensaje: "Ocurrio un error !!!",
            error
        })
    }

};

module.exports.buscarProfesional = async (req, res, next) => {
    const { id } = req.params;
    try {
        const profesional = await Profesion.findById(id);
        res.status(200).json(profesional);
    } catch (error) {
        res.status(500).json({
            mensaje: "Ocurrio un error !!!",
            error
        })
    }
}

module.exports.buscarProfesionalEmail = async (req, res, next) => {
    const { email } = req.params;
    try {
        const profesional = await Profesion.findOne({ email });
        res.status(200).json(profesional);
    } catch (error) {
        res.status(500).json({
            mensaje: "Ocurrio un error !!!",
            error
        })
    }
}

module.exports.actualizarProfesional = async (req, res, next) => {
    const { id } = req.params;
    const body = req.body;
    try {
        const profesional = await Profesion.findByIdAndUpdate(id, body, { new: true });
        res.status(200).json(profesional);
    } catch (error) {
        res.status(500).json({
            mensaje: "Ocurrio un error !!!",
            error
        })
    }
}

module.exports.eliminarProfesional = async (req, res, next) => {
    const { id } = req.params;
    try {
        const profesional = await Profesion.findByIdAndDelete(id);
        res.status(200).json(profesional);
    } catch (error) {
        res.status(500).json({
            mensaje: "Ocurrio un error !!!",
            error
        })
    }
}

module.exports.listarProfesionales = async (req, res, next) => {
    try {
        const profesionales = await Profesion.find();
        res.status(200).json(profesionales);
    } catch (error) {
        res.status(500).json({
            mensaje: "Ocurrio un error !!!",
            error
        })
    }
}