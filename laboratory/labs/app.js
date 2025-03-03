const express = require("express");
const app = express();

const bodyParser = require("body-parser");

const path = require('path');
app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'ejs');
// se va a buscar directo a la carpeta views pq ahí están las vistas
app.set('views', 'views');

app.use(bodyParser.urlencoded({ extended: false }));

//Middleware
app.use((request, response, next) => {
  console.log("Middleware!");

  //Le permite a la petición avanzar hacia el siguiente middleware
  next();
});

const registroRoutes = require("./routes/registro.routes");

const preguntasRoutes = require("./routes/preguntas.routes");

app.use("/", registroRoutes);

app.use("/", preguntasRoutes);

app.use((request, response, next) => {
  console.log("ERROR");
  response.status(404).send("ERROR! hola mundo lol");
});

app.listen(3000);