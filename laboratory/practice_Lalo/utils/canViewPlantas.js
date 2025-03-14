module.exports = (request, response, next) => {
    let canView = false;
    for(let privilegio of request.session.privilegios){
        if (privilegio.nombre == 'ver plantas'){
            canView = true;
            next();
        } else {

        }
    }
    if (!canView){
        return response.status(403).send('Tus acciones han sido registradas y reportadas al SuperAdmin');
    }    
}
