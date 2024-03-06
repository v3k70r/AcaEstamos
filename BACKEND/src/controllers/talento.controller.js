const Talento = require("../models/talento.model");
const User = require("../models/user.model");

const bcrypt = require("bcrypt");

// gestionar la creacion de un usuario

const crearTalento = async (req, res) => {
    const { nombres, apellidos, run, estadoCivil, fechaNacimiento, edad, numeroContacto, email, pass, profesion, areaPrincipal, areaSecundaria, areaTerciaria } = req.body;
    const salt = bcrypt.genSaltSync();
    const password = bcrypt.hashSync(pass, salt),
    nuevoUsuario = new User({email, password})
    const usuarioGuardado = await nuevoUsuario.save()

  if (!nombres || !apellidos || !run || !estadoCivil || !fechaNacimiento || !edad || !numeroContacto || !email || !password || !profesion || !areaPrincipal || !areaSecundaria || !areaTerciaria ) {
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
      numero_contacto: numeroContacto,
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
};

