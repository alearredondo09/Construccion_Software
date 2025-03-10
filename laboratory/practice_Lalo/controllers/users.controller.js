const Usuario = require('../models/users.model');

exports.get_signup = (request, response, next) => {
    const mensaje = request.session.info || '';
    if (request.session.info) {
        request.session.info = '';
    }
    
    response.render('login.ejs', {
        isLoggedIn: request.session.isLoggedIn || false,
        username: request.session.username || '',
        isNew: true,
    });
};

exports.post_signup = (request, response, next) => {
    const usuario = new 
        Usuario(request.body.username, request.body.password);

    usuario.save().then(() => {
        response.redirect('/users/login');
    }).catch((error) => {
        console.log(error);
    });
};

exports.get_login = (request, response, next) => {
    const mensaje = request.session.info || '';
    if (request.session.info) {
        request.session.info = '';
    }

    response.render('login.ejs', {
        isLoggedIn: request.session.isLoggedIn || false,
        username: request.session.username || '',
        isNew: false,
    });
};

exports.post_login = (request, response, next) => {
    request.session.isLoggedIn = true;
    request.session.username = request.body.username;
    response.redirect('/plantas');
};

exports.get_logout = (request, response, next) => {
    request.session.destroy(() => {
        //Este código se ejecuta cuando la sesión se elimina.
        response.redirect('/users/login'); 
    });
};