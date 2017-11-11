'use strict';

const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')

module.exports = function(server) {
  // Install a `/` route that returns server status
  var router = server.loopback.Router();

  router.use(bodyParser.json())
  router.use(bodyParser.urlencoded({ extended: false }))

  router.use(express.static(path.resolve(path.join(__dirname, '/../../client/dist'))))
  
  router.get('/', (req, res) => {
    res.sendFile(path.resolve(path.join(__dirname, '/../../client/dist/index.html')))
  })

  server.use(router);
};
