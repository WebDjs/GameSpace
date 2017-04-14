module.exports = (express, app, mongo, nodemailTransporter) => {
	const apiRouter = new express.Router();
	const db = mongo.db;
	const mongojs = mongo.api;

	app.use('/api', apiRouter);

	apiRouter.post('/login/email', (req, res, next) => {
		const email = req.body.email;

		const mailOptions = {
			from: '"Webly" <webdjsandpy@gmail.com>',
			to: email,
			subject: 'Finish creating your account on Webly',
			text: '',
			html: `
				<div>
					<h4>Click and confirm that you want to create an account on Webly. <br> This link will expire in fifteen minutes and can only be used once.</h4>
					<a href="`+ 'http://localhost:3333/#/profile' + `">Create account on Webly</a>
				</div>
				`
		};

		nodemailTransporter.sendMail(mailOptions, (error, info) => {
			if (error) {
				res.status(500).json({ error, message: 'Server cannot send a message' });
			} else {
				let currentEmail = req.body.email;
				res.cookie('email', currentEmail, {
					expires: new Date(Date.now() + 900000),
					httpOnly: false
				});
				res.status(200);
			}
		});
	});

	apiRouter.get('/users', (req, res, next) => {
		db['users']
			.find({}, (err, users) => {
				if (err) {
					res.send(err);
				}
				res.json(users);
			})
	});

	apiRouter.post('/user', (req, res, next) => {
		const newPost = req.body;

		db['users']
			.save(newPost, (err, newPost) => {
				if (err) {
					res.send(err);
					return;
				}
				res.json(newPost);
			})
	});

	apiRouter.get('/articles', (req, res, next) => {
		db['articles']
			.find({}, (err, articles) => {
				if (err) {
					res.send(err);
				}
				res.json(articles);
			})
	});

	apiRouter.post('/article', (req, res, next) => {
		const newPost = req.body;

		db['articles']
			.save(newPost, (err, newPost) => {
				if (err) {
					res.send(err);
					return;
				}
				res.json(newPost);
			})
	});

	apiRouter.get('/article/:id', (req, res, next) => {
		db['articles']
			.find({ _id: mongojs.ObjectId(req.params.id) }, (err, article) => {
				if (err) {
					res.send(err);
				}
				res.json(article);
			})
	});

	apiRouter.put('/article/:id', function (req, res, next) {
		let comment = req.body.comment;
		let updatedArticle = { $push: { comments: comment } };

		db['articles'].update({ _id: mongojs.ObjectId(req.params.id) }, updatedArticle, {},
			(err, comment) => {
				if (err) {
					res.send(err);
				}
				res.json(comment);
			})
	});
}
