const express = require("express");
const file_system = require("fs");

const router = express.Router();

const html = ``;

const html_holaMundo = ``;

const html_questions = ``;

router.get("/pregunta", (request, response, next) => {
  response.send(html);
});

router.get("/mundo", (request, response, next) => {
  response.send(html_holaMundo);
});

router.get("/questions", (request, response, next) => {
  response.send(html_questions);
});

module.exports = router;