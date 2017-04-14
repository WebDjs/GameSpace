'use strict';

import {
    view as view
} from "./view/view-service.js";

const router = {
	init: $(function () {
		const appRouter = new Navigo(null, true);
		appRouter
			.on({
				'/home': () => {
					view.home('#content', {})
				},
				'/knews': () => {
					view.info('#content', {})
				},
				'/blog': () => {
					view.blog('#content', {})
				},
				'/tournaments': () => {
					view.tournaments('#content', {})
				},
				'/chess': () => {
					view.chess('#content', {})
				},
				'/profile': () => {
					view.blog('#content', {})
				},
				'/signin': () => {
					view.home('#content', {})
				},
				'/signout': () => {
					view.home('#content', {})
				},
				'/signup': () => {
					view.home('#content', {})
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
