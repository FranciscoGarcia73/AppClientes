const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const fichaSchema = new Schema({
    nombre: String,
    apellidos: String,
    email: String,
    telefono: Number
});

fichaSchema.virtual('nombreCompleto').get(function () {
    return this.nombre + ' ' + this.apellidos;

});
module.exports = mongoose.model('ficha', fichaSchema);