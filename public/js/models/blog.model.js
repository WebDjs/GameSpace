'use strict';

import { ObjectModel as ObjectModel } from './object.model';

class BlogModel extends ObjectModel {
	constructor(id, title, image, userName, description, tags, comments) {
		super(id, title, image, description, tags, comments);
		this._userName = userName;
	}

	get userName() {
		return this._userName;
	}
	set userName(userName) {
		this._userName = userName;
	}
}

export {
	BlogModel
}
