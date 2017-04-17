'use strict';

import { hash as hash } from './hashing.js';

const auth = (() => {
	class Auth {
		constructor(hash) {
			this.hash = hash;
		}
	}

	const newObj = new Auth(hash);
	return newObj;
})();

export {
	auth
}