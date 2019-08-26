const Solicitud = require('./solicitud.model.js');

//Create new Solicitud
exports.create = (req, res) => {
    // Request validation
    if(!req.body) {

        return res.status(400).send({
            message: "No puede estar vacio"
        });
    }

    const solicitud = new Solicitud({

      material : req.body.material,
      direccion : req.body.direccion,
      usuario : req.body.usuario,
    });

    solicitud.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || " Error en crear las Solicituds."
        });
    });
};

// Retrieve all Solicitudes from the database.
exports.findAll = (req, res) => {
    Solicitud.find()
    .then(Solicitudes => {
        res.send(Solicitudes);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Error en traer las Solicitudes."
        });
    });
};


// Find a single Solicitud with a SolicitudId
exports.findOne = (req, res) => {
    Solicitud.findById(req.params.SolicitudId)
    .then(Solicitud => {
        if(!Solicitud) {
            return res.status(404).send({
                message: "No se encontro info con la id " + req.params.SolicitudId
            });
        }
        res.send(Solicitud);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "No encontrado Solicitud  " + req.params.SolicitudId
            });
        }
        return res.status(500).send({
            message: "No se puedo encontrar " + req.params.SolicitudId
        });
    });
};


exports.update = (req, res) => {

    if(!req.body) {
        return res.status(400).send({
            message: "Solicitud content can not be empty"
        });
    }

    Solicitud.findByIdAndUpdate(req.params.SolicitudId, {
      material : req.body.material,
      direccion : req.body.direccion,
      usuario : req.body.usuario,
    }, {new: true})
    .then(Solicitud => {
        if(!Solicitud) {
            return res.status(404).send({
                message: "No encontrado id " + req.params.SolicitudId
            });
        }
        res.send(Solicitud);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "No encontrado id" + req.params.SolicitudId
            });
        }
        return res.status(500).send({
            message: "Error al actualizar id " + req.params.SolicitudId
        });
    });
};

exports.delete = (req, res) => {
    Solicitud.findByIdAndRemove(req.params.SolicitudId)
    .then(Solicitud => {
        if(!Solicitud) {
            return res.status(404).send({
                message: "Solicitud no encontrado id " + req.params.SolicitudId
            });
        }
        res.send({message: "Solicitud borrado correctamente!"});
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "Solicitud no encontrado id " + req.params.SolicitudId
            });
        }
        return res.status(500).send({
            message: "No se pudo borrar el Solicitud id " + req.params.SolicitudId
        });
    });
};
