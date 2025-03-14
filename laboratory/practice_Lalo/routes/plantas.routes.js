const { response, request } = require('express');
const express = require('express');
const router = express.Router();

const isAuth = require('../utils/is-auth');

const canView = require('../utils/canViewPlantas');

const plantas_controller = require('../controllers/plantas.controller');
const canCreatePlantas = require('../utils/canCreatePlantas');

//router.get es para registrar un middleware para peticiones HTTP GET
router.get('/agregar', isAuth, canCreatePlantas, plantas_controller.get_agregar);

router.get('/add', isAuth,canCreatePlantas, plantas_controller.get_agregar);

//router.post es para registrar un middleware para peticiones HTTP POST
router.post('/agregar', isAuth, canCreatePlantas, plantas_controller.post_agregar);

router.get('/regar', isAuth, plantas_controller.get_regar);

router.get('/:id', isAuth, canView, plantas_controller.get_root);
router.get('/', isAuth, canView, plantas_controller.get_root);

module.exports = router;