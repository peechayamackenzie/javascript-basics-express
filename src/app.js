const { request } = require('express');
const express = require('express');
const { sayHello, uppercase, lowercase, firstCharacter, firstCharacters } = require('./lib/strings');

const app = express();

app.get('/strings/hello/:string', (request, response) => {
  response.status(200).json({ result: sayHello(request.params.string) })
});

app.get('/strings/upper/:uppercase', (request, response) => {
  response.status(200).json({ result: uppercase(request.params.uppercase) })
});

app.get('/strings/lower/:LowerCase', (request, response) => {
  response.status(200).json({ result: lowercase(request.params.LowerCase) })
});

app.get('/strings/first-characters/:anystring', (request, response) => {
  if (request.query.length !== undefined) {
    return response.json({ result: firstCharacters(request.params.anystring, request.query.length) })
  };
  return response.json({ result: firstCharacter(request.params.anystring) })
});


module.exports = app;
