const express = require('express');
const router = express.Router();

const plantas = [];
//router.get es para registrar un middleware para peticiones HTTP GET
router.get('/agregar', plantas_controller.get_agregar);
router.get('/add', plantas_controller.get_agregar);

//router.post es para registrar un middleware para peticiones HTTP POST
router.post('/agregar', (request, response, next) => {
    console.log(request.body);
    plantas.push(request.body.nombre);
    
    response.render('lista_plantas', {
      plantas: plantas,
    });
});
const path = require('path');
router.get('/regar', (request, response, next) => {
  response.sendFile(path.join(__dirname, '..', 'views', 'index.html'));
});
module.exports = router;