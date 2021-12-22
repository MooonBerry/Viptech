const modelos = require('./modelos');
const express = require('express')

const app = express()

app.get("/produtos", (request, response) => {
  modelos.Produto.fetchAll().then((produtos) => {
    response.json(produtos);
  });
});
exports.app = app;