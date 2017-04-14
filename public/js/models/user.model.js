const userModel = (() => {
	class UserModel {
		constructor() {
			this._id = '';
			this.userName = '';
			this.blogs = [];
			this.commentsTaken = [];
			this.commentsGiven = [];
		}
	}

	const newUserModel = new UserModel();
	return newUserModel;
})();

export {
	userModel
}
