const express = require('express');
const routes = require('./routes'); 
const mongoose = require('mongoose');
const config = require('./config');

const app = express();

mongoose.connect(config.connectionString,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(routes);

app.listen(3333);