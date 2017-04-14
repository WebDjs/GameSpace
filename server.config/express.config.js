module.exports = (express, app) => {
	const path = require('path');
	const bodyParser = require('body-parser');
	const cookieParser = require('cookie-parser');
	const cors = require('cors');

	app.disable('x-powered-by');
	app.use(cors());
	app.use(cookieParser());
	app.use(bodyParser.json());
	app.use(bodyParser.urlencoded({ extended: false }));

	const staticFolderName = '../public';
	app.use('/', express.static(path.join(__dirname, staticFolderName)));
}
