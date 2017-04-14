const newsModel = (() => {
	class NewsModel {
		constructor() {
			this._id = '';
			this.tag = '';
			this.comments = [];
		}
	}

	const newNewsModel = new NewsModel();
	return newNewsModel;
})();

export {
	newsModel
}
