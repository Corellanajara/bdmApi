const mongoose = require('mongoose');

const sucursalSchema = mongoose.Schema({
  titulo : String,
  direccion : String,
  fechaExpiracion : String,
  fechaDespacho : String,
  materiales : Array,
  tipo : String,
  usuario : String,

  // pendiente hashear clave
}, {
    timestamps: true
  });

module.exports = mongoose.model('ofertas', sucursalSchema);
