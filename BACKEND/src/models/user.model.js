

const mongoose = require('mongoose');

const { Schema } = mongoose;

//creacion del schema
const userSchema = new Schema({
    email: String,
    password: String,
    status: {
        type: String,
        enum: ['active', 'inactive'],
        require: true,
        default: 'active'
    },
    rol: {
        type: String,
        enum: ['admin', 'user', 'talento', 'empresa'],
        require: true,
        default: 'user'
    }
})

const talentoSchema = new Schema({
    nombre: String,
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
const empresaSchema = new Schema({
    nombre_empresa: String,
    rut: String,
    giro: String,
    cantidad_empleados: String,
    calle: String,
    numeracion: Number,
    comuna: String,
    region: String,
    numero_contacto: String,
    correo: String,
    pagina_web: String,
    mensaje_talentos: String,
    acerca_de: String

})
//creacion del modelo
const User = mongoose.model('User', userSchema);

module.exports = User;
