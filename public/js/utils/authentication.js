'use strict';

import {
	hash as hash
} from "./hashing.js";

const auth = (() => {
	class Auth {
		constructor() {

		}
	}

	const newObj = new Auth();
	return newObj;
})();

export {
	auth
}