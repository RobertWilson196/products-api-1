const express = require('express');
const serverApp = express();
const mongoose = require('mongoose');

require('dotenv').config();

//middleware
const logger = require('./middleware/logger'); //morgan is better
const err404 = require('./middleware/404');
const serverError = require('./middleware/serverError');

mongoose.connect(process.env.MONGO_URI);

const PORT = process.env.PORT || 5000; //necessary for Heroku deployment

//routers
const productRouter = require('./routers/products');

serverApp.use(logger);
serverApp.use(productRouter); //register the router with the application

serverApp.get('/', (req, res) => {
    res.send('Something better');
});

serverApp.use(err404); //express docs to find out how to implement a custom url page
serverApp.use(serverError);

serverApp.listen(PORT, () => {
    console.log(`Now listening on port ${PORT}`);
});