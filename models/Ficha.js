const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const fichaSchema = new Schema({
    nombre: String,
    apellidos: String,
    calle: String,
    numero: Number,
    email: String,
    telefono: Number
});

fichaSchema.virtual('nombreCompleto').get(function () {
    return this.nombre + ' ' + this.apellidos;

});

fichaSchema.virtual('domicilioCompleto').get(function () {
    return this.calle + ' ' + this.numero;

});

module.exports = mongoose.model('ficha', fichaSchema);