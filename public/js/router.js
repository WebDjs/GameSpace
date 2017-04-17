'use strict';

import { mainCtrl as mainCtrl } from './controllers/index.js';
import { userCtrl as userCtrl } from './controllers/index.js';
import { gameCtrl as gameCtrl } from './controllers/index.js';
import { blogCtrl as blogCtrl } from './controllers/index.js';
import { newsCtrl as newsCtrl } from './controllers/index.js';

const router = {
	init: $(function () {
		const appRouter = new Navigo(null, true);
		appRouter
			.on({
				'/home': () => {
					mainCtrl.home;
				},
				'/about': () => {
					mainCtrl.about;
				},
				'/news': () => {
					newsCtrl.news;
				},
				'/blog': () => {
					mainCtrl.blog;
				},
				'/games': () => {
					gameCtrl.games;
				},
				'/search': () => {

				},
				'/tournaments': () => {
					mainCtrl.tournaments;
				},
				'/profile': () => {
					mainCtrl.profile;
				},
				'/settings': () => {
				
				},
				'/signin': () => {
					mainCtrl.signin;
				},
				'/signup': () => {
					mainCtrl.signup;
				},
				'/signin-btn': () => {
					let username = $('.login-container .login-field .user-name').val();
					let pass = $('.login-container .login-field .pass-word').val();

					userCtrl.signIn(username, pass);

					$('.login-container .login-field .user-name').val('');
					$('.login-container .login-field .pass-word').val('');
					$('.login-container .login-field .e-mail').val('');
				},
				'/signup-btn': () => {
					let username = $('.login-container .login-field .user-name').val();
					let email = $('.login-container .login-field .e-mail').val();

					userCtrl.signUp(username, email);

					$('.login-container .login-field .user-name').val('');
					$('.login-container .login-field .e-mail').val('');
					$('.login-container .login-field .pass-word').val('');
				},
				'/signout': () => {
					mainCtrl.home;
				},
				'/breakout': () => {
					gameCtrl.breakout;
				},
				'/chess': () => {
					gameCtrl.chess;
				},
				'/spaceivaders': () => {
					gameCtrl.spaceivaders;
				},
				'/tetris': () => {
					gameCtrl.tetris;
				},
				'/': () => {
					appRouter.navigate('/home');
				},
				'*': () => {
					appRouter.navigate('/home');
				}
			})
			.notFound(function () {
				alert('Error! Router not found!');
			})
			.resolve();
	})
}

export {
	router
};
