const Empresa = require("../models/empresa.model");
const User = require("../models/user.model");


// gestionar la creacion de un usuario

const crearEmpresa = async (req, res) => {
  const { email, password, nombre_empresa,rut, giro, cantidad_empleados, calle, numeracion, comuna, region, numero_contacto, correo, pagina_web, mensaje_talentos, acerca_de } = req.body;
    const nuevoUsuario = new User({email, password})
    const usuarioGuardado = await nuevoUsuario.save()

  if (!email || !password || !nombre_empresa || !rut || !giro || !cantidad_empleados || !calle || !numeracion || !comuna || !region || !numero_contacto || !correo || !pagina_web || !mensaje_talentos || !acerca_de ) {
    return res.status(404).json({
      msg: "Todos los campos son requeridos",
      status: 404,
    });
  }
  try {
    await Empresa.create({
      user: usuarioGuardado._id,
      nombre_empresa: nombre_empresa,
      rut: rut,
      giro: giro,
      cantidad_empleado: cantidad_empleados,
      calle: calle,
      numeracion: numeracion,
      comuna: comuna,
      region: region,
      numero_contacto: numero_contacto,
      correo: correo,
      pagina_web: pagina_web,
      mensaje_talento: mensaje_talento,
      acerca_de: acerca_de
    });

    res.status(201).json({
      msg: "Empresa creada correctamente",
      status: 201,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      msg: "Error al crear empresa",
      status: 500,
    });
  }
};



module.exports = {
  crearEmpresa,
};
