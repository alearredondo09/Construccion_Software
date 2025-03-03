// separar la lógica de las rutas de las de la página web. 

// nombrar la acción (función) del controlador
// get_agregar contiene la lógica de la función

const Planta = require('../models/plantas.models');

exports.get_agregar = (request, response, next) => {
    response.render('agregar_planta');
};

exports.post_agregar = (request, response, next) => {
    console.log(request.body);
    // crear objeto de Planta
    const mi_planta = new Planta(request.body.nombre);
    // hacer el push de plant
    mi_planta.save();

    response.render('lista_plantas', {
      plantas: Planta.fetchAll(),
    });
}