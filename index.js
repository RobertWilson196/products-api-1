const express = require('express');
const serverApp = express();

require('dotenv').config();

const PORT = process.env.PORT || 5000; //necessary for Heroku deployment

//routers
const productRouter = require('./routers/products');

serverApp.use(productRouter); //register the router with the application

serverApp.get('/', (req, res) => {
    res.send('Something better');
});

serverApp.listen(PORT, () => {
    console.log(`Now listening on port ${PORT}`);
});