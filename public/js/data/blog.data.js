'use strict';

const blogData = (ajaxRequester) => {
	class BlogData {
		constructor(requester) {
			this.requester = requester;
		}

		getStatics() {
			return this.requester.get('./statics.json');
		}

		getCloudinaryParams() {
			return this.getStatics
				.then((dataObj) => {
					return dataObj.cloudinaryParams;
				});
		}

		getImages(url) {
			return this.requester.get(url);
		}
	}

	const dataObj = new BlogData(ajaxRequester);
	return dataObj;
}

export {
	blogData
};
