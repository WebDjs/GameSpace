'use strict';

import {
	mainCtrl as mainCtrl
} from "./controllers/main.ctrl.js";

import {
	userCtrl as userCtrl
} from "./controllers/user.ctrl.js";

const router = {
	init: $(function () {
		const appRouter = new Navigo(null, true);
		appRouter
			.on({
				'/home': () => {
					mainCtrl.home;
				},
				'/news': () => {
					mainCtrl.news;
				},
				'/blog': () => {
					mainCtrl.blog;
				},
				'/tournaments': () => {
					mainCtrl.tournaments;
				},
				'/games': () => {
					mainCtrl.games;
				},
				'/search': () => {
					
				},
				'/profile': () => {
					mainCtrl.profile;
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
				'/chess': () => {
					mainCtrl.chess;
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
