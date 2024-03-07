const Talento = require("../models/talento.model");
const User = require("../models/user.model");
const bcrypt = require("bcrypt");

// gestionar la creacion de un usuario

const listarTalentos = async (req, res) => {

  const talentos = await Talento.find({});

  res.status(200).json({
        code: 200,
        msg: "Lista de talentos",
        data: talentos
  })
    
}

const crearTalento = async (req, res) => {
    var { nombres, apellidos, run, estadoCivil, fechaNacimiento, edad, contacto, email, password, profesion, areaPrincipal, areaSecundaria, areaTerciaria } = req.body;
    const status = "active"
    const rol = "talento"
    const salt = bcrypt.genSaltSync();
    password = bcrypt.hashSync(password, salt)
    nuevoUsuario = new User({email, password, status, rol})
    const usuarioGuardado = await nuevoUsuario.save()

  if (!nombres || !apellidos || !run || !estadoCivil || !fechaNacimiento || !edad || !contacto || !email || !password || !profesion || !areaPrincipal || !areaSecundaria || !areaTerciaria ) {
    return res.status(404).json({
      msg: "Todos los campos son requeridos",
      status: 404,
    });
  }
  try {
    const salt = bcrypt.genSaltSync();

    await Talento.create({
      user: usuarioGuardado._id,
      nombres: nombres,
      apellidos: apellidos,
      run: run,
      estado_civil: estadoCivil,
      fecha_nacimiento: fechaNacimiento,
      edad: edad,
      numero_contacto: contacto,
      profesion_oficio: profesion,
      area1: areaPrincipal,
      area2: areaSecundaria,
      area3: areaTerciaria
    });

    res.status(201).json({
      msg: "Talento creado correctamente",
      status: 201,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      msg: "Error al crear el talento",
      status: 500,
    });
  }
};



module.exports = {
  crearTalento,
  listarTalentos
};

