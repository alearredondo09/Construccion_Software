const express = require("express");
const file_system = require("fs");

const router = express.Router();

router.get("/registro", (request, response, next) => {
  response.render('resgistries');
});

router.post("/registro", (request, response, next) => {
  console.log(request.body.password);
  const contras = request.body.password;
  file_system.appendFileSync("hola.txt", contras + "\n");
  response.send("paso");
});

const path = require('path');
router.get("/registro", (request, response, next) => {
  response.sendFile(path.join(__dirname, "..", "views", "index.html"));
});

module.exports = router;