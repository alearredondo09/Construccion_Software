exports.get_login = (request, response, next) => {
    response.render('login.ejs',{
        // si la variable isLoggedIn tiene un valor indefinido le va a dar un valor falso para evitar que todo truene horriblemente
        isLoggedIn : request.session.isLoggedIn || false,
        username: request.session.username || '',
    });
};

exports.post_login = (request, response, next) => {
    request.session.isLoggedIn = true; // varible para ver si está logeado
    request.session.username = request.body.username;
    response.redirect('/plantas');
};

exports.get_logout = (request, response, next) => {
    request.session.destroy(() => {
        response.redirect('/users/login'); //mata la sesion y redirige a la main page
    })
};