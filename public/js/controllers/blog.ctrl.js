'use strict';

import { view as view } from '../view/view-service.js';
import { data as data } from '../data/data-sevice.js';
import { validator as validator } from '../utils/validator.js';

const blogCtrl = (() => {
	class BlogCtrl {
		constructor() {

		}

		get blog() {
			let data = [];
			return view.info('#content', { data: data })
		}

		postNewBlog() {

		}

		getBlogsByDate() {

		}

		getBlogsByUser() {

		}

		getBlogsByTag() {

		}

		getBlogsByVoting() {

		}
	}

	const newBlogCtrl = new BlogCtrl();
	return newBlogCtrl;
})();

export {
	blogCtrl
}
