module.exports = (() => {
	const mongojs = require('mongojs');
	const connectionString = require('./constants.json').mongodbConnection || 'mongodb://localhost:27017/appdb';
	const collections = ['users', 'knews', 'blogs', 'comments', 'tournaments'];

	const db = mongojs(connectionString, collections);
	db.on('error', (err) => {
		console.log('Database error!', err)
	})

	db.on('connect', () => {
		console.log('Database connected!')
	})

	const mongo = {
		api: mongojs,
		db: db
	}

	return mongo;
})();
