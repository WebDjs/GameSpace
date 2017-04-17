'use strict';

import { view as view } from '../view/view-service.js';
import { data as data } from '../data/data-sevice.js';
import { validator as validator } from '../utils/validator.js';
import { auth as auth } from '../utils/authentication.js';

const userCtrl = (() => {
	class UserCtrl {
		constructor() {

		}

		signIn(username, password) {
			if (validator.validateUsername(username) && validator.validatePassword(password)) {
				alert(username + ' ' + password);
			}
		}

		signUp(username, email) {
			if (validator.validateUsername(username) && validator.validateEmail(email)) {
				alert(username + ' ' + email);
			}
		}

		signOut() {

		}

		getProfileByAuthObj(authObj) {

		}
	}

	const newUserCtrl = new UserCtrl();
	return newUserCtrl;
})();

export {
	userCtrl
}