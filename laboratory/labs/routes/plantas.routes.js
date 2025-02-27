const express = require('express');
const router = express.Router();
            
const html_form = `<form action="/plantas/agregar" method="POST">
              <label for="nombre" class="label">Nombre de la planta</label>
              <input
                class="input is-info"
                type="text"
                placeholder="Orquídea"
                id="nombre"
                name="nombre"
              />
              <br><br>
              <input class="button is-info" type="submit" value="Enviar">
            </form>`;
const html_footer = `</div>
    </section>
    <footer class="footer">
        <div class="content has-text-centered">
          <p>
            <strong>Bulma</strong> by <a href="https://jgthms.com">Jeremy Thomas</a>.
            The source code is licensed
            <a href="https://opensource.org/license/mit">MIT</a>. The
            website content is licensed
            <a href="https://creativecommons.org/licenses/by-nc-sa/4.0//"
              >CC BY NC SA 4.0</a
            >.
          </p>
        </div>
      </footer>
      <script src="js/introjs.js"></script>
  </body>
</html>
`;
const plantas = [];
//router.get es para registrar un middleware para peticiones HTTP GET
router.get('/agregar', (request, response, next) => {
    response.send(html_header + html_form + html_footer);
});
//router.post es para registrar un middleware para peticiones HTTP POST
router.post('/agregar', (request, response, next) => {
    console.log(request.body);
    plantas.push(request.body.nombre);
    let html = html_header;
    html += `<div class="columns">`;
    for(let planta of plantas) {
        html += `<div class="column">`;
        html += `<div class="card">
        <div class="card-content">
          <div class="content">`;
        html += planta;
        html += `</div>
                </div>
              </div>
            </div>`;
    }
    html += `</div>`;
    html += html_footer;
    response.send(html);
});
const path = require('path');
router.get('/regar', (request, response, next) => {
  response.sendFile(path.join(__dirname, '..', 'views', 'index.html'));
});
module.exports = router;