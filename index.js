const express = require('express');
const routes = require('./routes/api');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
 
const app = express();

mongoose.connect('mongodb://localhost/angular');
mongoose.Promise = global.Promise;

app.use(bodyParser.json());

app.use('/api',routes);

app.listen(4002,() => {
    console.log("server Started at 4002");
}); 