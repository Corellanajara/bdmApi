const mongoose = require('mongoose');

const sucursalSchema = mongoose.Schema({
  material : String,
  direccion : String,
  usuario : String,
  // pendiente hashear clave
}, {
    timestamps: true
  });

module.exports = mongoose.model('solicitudes', sucursalSchema);
