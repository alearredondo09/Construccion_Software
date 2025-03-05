const express = require('express');
const router = express.Router();

const plantas = [];
//router.get es para registrar un middleware para peticiones HTTP GET
router.get('/agregar', (request, response, next) => {
    response.render('agregar_planta');
});
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