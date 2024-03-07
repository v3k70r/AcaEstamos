const mongoose = require('mongoose');
const { Schema } = mongoose;
const empresaSchema = new Schema({
    user: { type: Schema.Types.ObjectId, ref: 'userSchema' },
    nombre_empresa: String,
    rut: String,
    giro: String,
    cantidad_empleados: String,
    calle: String,
    numeracion: Number,
    comuna: String,
    region: String,
    numero_contacto: String,
    pagina_web: String,
    mensaje_talentos: String,
    acerca_de: String

})
const Empresa = mongoose.model('Empresa', empresaSchema);
module.exports = Empresa;
