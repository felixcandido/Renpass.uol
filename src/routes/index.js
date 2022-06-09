const { Router } = require('express');
const routeAuth = require('./routeAuth');
const routesCar = require('./routesCar');
const routesPerson = require('./routesPerson');

module.exports = (server) => {
  server.use((req, res, next) => {
    routesCar(server, new Router());
    routesPerson(server, new Router());
    routeAuth(server, new Router());
    next();
  });
};
