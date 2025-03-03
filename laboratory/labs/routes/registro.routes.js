const express = require("express");
const file_system = require("fs");

const router = express.Router();

const html_firstpage = ``;

const html = ``;

router.get("/", (request, response, send) => {
  response.send(html_firstpage);
});

router.get("/registro", (request, response, next) => {
  response.send(html);
});

router.post("/registro", (request, response, next) => {
  console.log(request.body.password);
  const contras = request.body.password;
  file_system.appendFileSync("hola.txt", contras + "\n");
  response.send("paso");
});

module.exports = router;