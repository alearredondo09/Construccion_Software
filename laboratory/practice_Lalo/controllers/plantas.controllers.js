// separar la lógica de las rutas de las de la página web. 

// nombrar la acción (función) del controlador
// get_agregar contiene la lógica de la función

exports.get_agregar = (request, response, next) => {
    response.render('agregar_planta');
};