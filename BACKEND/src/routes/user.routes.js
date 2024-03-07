const { crearUser, loginUser, getUserById, updateUserById, updateStatusUserById, listarUsuarios } = require('../controllers/user.controller');
const {crearTalento, listarTalentos} = require('../controllers/talento.controller')
const {crearEmpresa, listarEmpresas} = require('../controllers/empresa.controller')


const router = require('express').Router();

//listar colecciones
router.get('/listar-usuarios', listarUsuarios);
router.get('/listar-talentos', listarTalentos);
router.get('/listar-empresas', listarEmpresas);

//crear en colecciones
router.post('/crear-usuario', crearUser);
router.post('/crear-talento', crearTalento);
router.post('/crear-empresa', crearEmpresa);

//login
router.post('/login', loginUser)

// obtener un usuario por su id
router.get('/getbyid/:iduser', getUserById)

// actualizar el status del usuario
router.put('/update-status/:iduser', updateStatusUserById)

// actualizar datos del usuario

router.put('/update/:iduser', updateUserById)

// obtener listado de todos los usuarios
module.exports = router;