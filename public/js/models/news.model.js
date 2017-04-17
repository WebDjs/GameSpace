'use strict';

import { ObjectModel as ObjectModel } from './object.model';

class NewsModel extends ObjectModel {
	constructor(id, title, image, description, tags, comments) {
		super(id, title, image, description, tags, comments);
	}
}

export {
	NewsModel
}
