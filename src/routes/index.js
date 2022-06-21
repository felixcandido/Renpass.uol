const { Router } = require('express');
const routeAuth = require('./routeAuth');
const routesCar = require('./routesCar');
const routesFleet = require('./routesFleet');
const routesPerson = require('./routesPerson');
const routesRental = require('./routesRental');
const routesReserve = require('./routesReserve');
const routeSwagger = require('./routeSwagger');

module.exports = (server) => {
  server.use((req, res, next) => {
    routesCar(server, new Router());
    routesPerson(server, new Router());
    routeAuth(server, new Router());
    routesRental(server, new Router());
    routesFleet(server, new Router({ mergeParams: true }));
    routesReserve(server, new Router({ mergeParams: true }));
    routeSwagger(server, new Router());
    next();
  });
};
