'use strict';

import { view as view } from "../view/view-service.js";
import { data as data } from "../data/data-sevice.js";

const mainCtrl = (() => {
	class MainCtrl {
		get home() {
			return view.home('#content', {})
		}

		get signin() {
			return view.signin('#content-aside', {})
		}

		get signup() {
			return view.signup('#content-aside', {})
		}

		get about() {
			let data = [];
			return view.about('#content', { data: data })
		}

		get profile() {
			return view.profile('#content', {});
		}

		get tournaments() {
			return view.tournaments('#content', {});
		}
	}

	const newMain = new MainCtrl();
	return newMain;
})();

export {
	mainCtrl
}
