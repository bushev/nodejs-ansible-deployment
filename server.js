'use strict';

/**
 * Core HTTP module
 *
 * @type {exports|module.exports}
 */
const http = require('http');

/**
 * Mongoose ODM
 *
 * @type {*|exports|module.exports}
 */
const mongoose = require('mongoose');

const PORT = 8080;

mongoose.connect('mongodb://localhost/test');

let CatModel = mongoose.model('Cat', {name: String});

let server = http.createServer((request, response) => {

    let kitty = new CatModel({name: 'Salem'});

    kitty.save((err, item) => {
        if (err) return response.end('Something is wrong!');

        response.end(`It Works!! Item inserted: ${item.id}`);
    });
});

server.listen(PORT, () => {
    console.log(`Server listening on: http://localhost:${PORT}`);
});