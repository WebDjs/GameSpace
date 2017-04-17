'use strict';

import { view as view } from '../view/view-service.js';
import { data as data } from '../data/data-sevice.js';
import { validator as validator } from '../utils/validator.js';

const newsCtrl = (() => {
	class NewsCtrl {
		constructor() {

		}

		get news() {
			let data = [];
			return view.info('#content', { data: data })
		}

		getNewsByDate() {

		}

		getNewsByTag() {

		}

		getNewsByVoting() {

		}
	}

	const newNews = new NewsCtrl();
	return newNews;
})();

export {
	newsCtrl
}
