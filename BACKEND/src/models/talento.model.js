
const mongoose = require('mongoose');
const { Schema } = mongoose;

const talentoSchema = new Schema({
    user: { type: Schema.Types.ObjectId, ref: 'userSchema' },
    nombres: String,
    apellidos: String,
    run: String,
    estado_civil: String,
    fecha_nacimiento: String,
    edad: String,
    numero_contacto: String,
    profesion_oficio: String,
    area1: String,
    area2: String,
    area3: String

})
const Talento = mongoose.model('Talento', talentoSchema);
module.exports = Talento;
