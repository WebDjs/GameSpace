'use strict';

const mongo = require('./server.config/mongo.config');

const express = require('express');

const app = express();

require('./server.config/express.config')(express, app);

const nodemailTransporter = require('./server.config/nodemailer.config');

require('./server.config/router.config')(express, app, mongo, nodemailTransporter);

const port = process.env.PORT || 3333;

app.listen(port);

console.log(`Server running on port:${port}`);

const env = process.env.NODE_ENV || 'development';

if (env === 'development') {
    require('openurl').open(`http://localhost:${port}`);
}
