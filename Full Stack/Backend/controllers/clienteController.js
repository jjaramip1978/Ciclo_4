const Cliente = require('../models/cliente');

module.exports.nuevoCliente = async (req, res) => {
    const body = req.body;
    const nuevoCl = await Cliente.create(body);
    res.status(200).json(nuevoCl);
}

module.exports.buscarCliente = async (req, res) => {
    const { id } = req.params;
    try{
        const nuevoCliente = await Cliente.findById(id); 
        res.json(nuevoCliente);
    }catch (error){
        return res.status(400).json({
            mensaje: 'Ocurrio un error !!!',
            error
        })
    }
}

module.exports.listarClientes = async (req, res) => {
    try{
        const listaClientes = await Cliente.find();
        res.json(listaClientes);
    }catch (error){
        return res.status(400).json({
            mensaje: 'Ocurrio un error !!!',
            error
        })
    }
}

module.exports.eliminarCliente = async (req, res) => {
    const { id } = req.params;
    try{
        const nuevoCliente = await Cliente.findByIdAndDelete(id);
        res.json(nuevoCliente);
    }catch (error){
        return res.status(400).json({
            mensaje: 'Ocurrio un error !!!',
            error
        })
    }
}

module.exports.actualizarCliente = async (req, res) => {
    const { id } = req.params;
    const body = req.body;
    try{
        const nuevoCliente = await Cliente.findByIdAndUpdate(id, body, {new: true});
        res.json(nuevoCliente);
    }catch (error){
        return res.status(400).json({
            mensaje: 'Ocurrio un error !!!',
            error
        })
    }
}