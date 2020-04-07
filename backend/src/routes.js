const express = require('express');

const routes = express.Router();
const BoxController = require('./controllers/BoxController');

routes.get('/', (req, res)=>{
    res.json({message: "Hello RocketBox"})
})

routes.post('/boxes', BoxController.store);

module.exports = routes;