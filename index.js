const Express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
// connection factory
const knex = require('knex');
const dbConfig = require('./knexfile');

const jwt = require('jsonwebtoken');
// create an express instance
const express = new Express();

express.use(cors());
express.use(bodyParser.json());

// ** this is is client connection
const dbClient = knex(dbConfig);


// function sendHealthStatus(req, resp) {
//   resp.json({
//     status: 'ok'
//   })
  
// }

// function getVersion(req, res) {
//   // send me a version
//   res.json({version: '0.0.0'});           
// }

const userController = require('./controller/users')

// express.get('/api/health', sendHealthStatus)
// express.get('/api/version', getVersion)
// express.post('/api/auth', authenticate); // 1
express.post('/api/register', userController.register);

// express.get('/api/users', getUsers)
// express.get('/api/users/:username',getUsername);

express.listen(8000, 'localhost', () => {
  console.log("Server is running at ", 8000)
})


// migration in knex

