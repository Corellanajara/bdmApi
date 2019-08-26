module.exports = (app) => {
    const solicitudes = require('./solicitud.controller.js');

    app.post('/solicitudes', solicitudes.create);

    app.get('/solicitudes', solicitudes.findAll);

    app.get('/solicitudes/:SolicitudId', solicitudes.findOne);

    app.put('/solicitudes/:SolicitudId', solicitudes.update);

    app.delete('/solicitudes/:SolicitudId', solicitudes.delete);
}
