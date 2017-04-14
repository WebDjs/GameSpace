'use strict';

import {
	view as view
} from "../view/view-service.js";

const mainCtrl = (() => {
	class MainCtrl {
		get home() {
			return view.home('#content', {});
		}

		get knews() {
			return view.info('#content', {})
		}

		get blog() {
			return view.info('#content', {})
		}

		get profile() {
			return view.profile('#content', {});
		}

		get login() {
			return view.login('#content', {});
		}

		get tournaments() {
			return view.tournaments('#content', {});
		}

		get chess() {
			return view.chess('#content', {});
		}
	}

	const newMain = new MainCtrl();
	return newMain;
})();

export {
	mainCtrl
}
