const blogModel = (() => {
	class BlogModel {
		constructor() {
			this._id = '';
			this.user = '';
			this.tag = '';
			this.comments = [];
		}
	}

	const newBlogModel = new BlogModel();
	return newBlogModel;
})();

export {
	blogModel
}
