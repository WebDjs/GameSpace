'use strict';
import {
    templateLoader as templateLoader
} from "./template-loader.js";


const view = (() => {
	class View {
		constructor(templateLoader) {
			this.templatesPath = './html-templates/';
			this.templateLoader = templateLoader;
		}

		header(selector, data) {
			this.templateLoader.load(selector, this.templatesPath + 'common/' + 'header.html', data);
		}

		footer(selector, data) {
			this.templateLoader.load(selector, this.templatesPath + 'common/' + 'footer.html', data);
		}

		home(selector, data) {
			this.templateLoader.load(selector, this.templatesPath + 'home.html', data);
		}

		info(selector, data) {
			this.templateLoader.load(selector, this.templatesPath + 'info.html', data);
		}

		blog(selector, data) {
			this.templateLoader.load(selector, this.templatesPath + 'blog.html', data);
		}

		chess(selector, data) {
			this.templateLoader.load(selector, this.templatesPath + 'chess.html', data);
		}

		tournaments(selector, data) {
			this.templateLoader.load(selector, this.templatesPath + 'tournaments.html', data);
		}
	}

	const viewObj = new View(templateLoader);
	return viewObj;
})();

export {
	view
};