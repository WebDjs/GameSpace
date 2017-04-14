'use strict';

import {
	notifier as notifier
} from "./notifier.js";

const validator = (() => {
	class Validator {
		constructor() {
			this.constantz = {
				emailReg: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
				passwordReg: /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/,
				usernameReg: /^[A-Za-z0-9 _]*[A-Za-z0-9][A-Za-z0-9 _]*$/,
				commentReg: /^[A-Za-z0-9 _]*[A-Za-z0-9][A-Za-z0-9 _]*$/
			}
		}

		validateEmail(email) {
			let letters = this.constantz.emailReg;

			if (!email.match(letters)) {
				notifier.warning('E-mail must consist of letters and numbers, dot, symbol @ ');
				return true;
			}
		}

		validatePassword(password) {
			let letters = this.constantz.passwordReg;

			if (!password.match(letters)) {
				notifier.warning('Password must contain at least 6 characters, including UPPER/lowercase and numbers');
				return true;
			}

		}

		validateUsername(username) {
			let letters = this.constantz.usernameReg;

			if (!username.match(letters)) {
				notifier.warning('Username must consist of letters and numbers');
				return true;
			}

			if (username.length < 3 || username.length > 20 || !username) {
				notifier.warning('Username must be consist of min 3 symbols and max of 20 symbols');
				return true;
			}

		}

		validateAge(age) {
			if (age < 0 || age > 120 || !age) {
				notifier.warning('Age must be a number between 0 and 120');
				return true;
			}
		}

		validateComment(comment) {
			let letters = this.constantz.commentReg;

			if (comment.length < 20 || !comment.match(letters)) {
				notifier.warning('Comment must be minimum 20 symbols of letters and numbers');
				return true;
			}
		}
	}

	const newValid = new Validator();
	return newValid;
})();

export {
	validator
}