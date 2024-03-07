const Empresa = require("../models/empresa.model");
const User = require("../models/user.model");
const bcrypt = require("bcrypt");

const listarEmpresas = async (req, res) => {

    const empresas = await Empresa.find({});
  
    res.status(200).json({
          code: 200,
          msg: "Lista de empresas",
          data: empresas
    })
      
}
const crearEmpresa = async (req, res) => {
    var { email, password, nombre_empresa,rut, giro, cantidad_empleados, calle, numeracion, comuna, region, numero_contacto, pagina_web, mensaje_talentos, acerca_de } = req.body;
    const status = "active"
    const rol = "empresa"
    const salt = bcrypt.genSaltSync();
    password = bcrypt.hashSync(password, salt) 
    const nuevoUsuario = new User({email, password, status, rol})
    const usuarioGuardado = await nuevoUsuario.save()

  if (!email || !password || !nombre_empresa || !rut || !giro || !cantidad_empleados || !calle || !numeracion || !comuna || !region || !numero_contacto || !pagina_web || !mensaje_talentos || !acerca_de ) {
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
      pagina_web: pagina_web,
      mensaje_talentos: mensaje_talentos,
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
  listarEmpresas
};
