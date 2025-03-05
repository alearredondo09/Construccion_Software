const express = require("express");
const router = express.Router();


router.get("/pregunta", (request, response, next) => {
  response.render('display_questions');
});

router.get("/lab1", (request, response, next) => {
  response.render('display_lab1');
});

const path = require('path');
router.get("/hello", (request, response, next) => {
  response.sendFile(path.join(__dirname, '..', 'views', 'index.html'));
});

module.exports = router;