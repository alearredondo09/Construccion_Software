const express = require("express");
const router = express.Router();
// const file_system = require("fs");

const passwords = [];
// const usernames = [];

router.get("/registro", (request, response, next) => {
  response.render('registries');
});

router.post("/registro", (request, response, next) => {
  console.log(request.body.password);
  passwords.push(request.body.password);
  // usernames.push(request.body.usernames);
  
  response.render('add_password',{
    passwords : passwords,
    // usernames : usernames,
  })
  // file_system.appendFile("hola.txt", contras + "\n");
  // response.send("paso");
});

const path = require('path');
router.get("/hello", (request, response, next) => {
  response.sendFile(path.join(__dirname, '..', 'views', 'index.html'));
});

module.exports = router;