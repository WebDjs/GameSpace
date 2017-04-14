'use strict';

module.exports = (() => {
	const nodemailer = require('nodemailer');
	const transporterConnectionString = require('./constants.json').transporterConnection;

	// create reusable transporter object using the default SMTP transport
	const transporter = nodemailer.createTransport(transporterConnectionString);

	// verify connection configuration
	transporter.verify(function (error, success) {
		if (error) {
			console.log(error);
			return;
		} else {
			console.log('Server is ready to take our messages');
		}
	});

	return transporter;
})();

