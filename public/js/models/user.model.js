'use strict';

class UserModel {
	constructor() {
		this._id = '';
		this._token = '';
		this._name = '';
		this._email = '';
		this._image = '';
		this._tags = [];
		this._blogs = [];
		this._commentsTaken = [];
		this._commentsGiven = [];
	}

	get id() {
		return this._id;
	}

	get token() {
		return this._token;
	}
	set token(tkn) {
		this._token = tkn;
	}

	get name() {
		return this._name;
	}
	set name(name) {
		this._name = name;
	}

	get email() {
		return this._email;
	}
	set email(eMail) {
		this._email = eMail;
	}

	get image() {
		return this._image;
	}
	set image(img) {
		this._image = img;
	}

	get tags() {
		return this._tags;
	}
	addTag(tag) {
		this.tags.push(tag);
	}

	get blogs() {
		return this._blogs;
	}
	addBlog(blog) {
		this._blogs.push(blog);
	}

	get commentsTaken() {
		return this._commentsTaken;
	}
	addComTaken(com) {
		this._commentsTaken.push(com);
	}

	get commentsGiven() {
		return this._commentsGiven;
	}
	addComGiven(com) {
		this._commentsGiven.push(com);
	}
}

export {
	UserModel
}
