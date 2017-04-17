'use strict';

import { templateLoader as templateLoader } from './template-loader.js';

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

		//=============================================================

		home(selector, data) {
			this.templateLoader.load(selector, this.templatesPath + 'home.html', data);
		}

		about(selector, data) {
			this.templateLoader.load(selector, this.templatesPath + 'about.html', data);
		}

		signin(selector, data) {
			this.templateLoader.load(selector, this.templatesPath + 'signin.html', data);
		}

		signup(selector, data) {
			this.templateLoader.load(selector, this.templatesPath + 'signup.html', data);
		}

		info(selector, data) {
			this.templateLoader.load(selector, this.templatesPath + 'info.html', data);
		}

		profile(selector, data) {
			this.templateLoader.load(selector, this.templatesPath + 'profile.html', data);
		}

		tournaments(selector, data) {
			this.templateLoader.load(selector, this.templatesPath + 'tournaments.html', data);
		}

		//=============================================================

		chess(selector, data) {
			this.templateLoader.load(selector, this.templatesPath + 'games/' + 'chess.html', data);
		}

		breakout(selector, data) {
			this.templateLoader.load(selector, this.templatesPath + 'games/' + 'breakout.html', data);
		}

		tetris(selector, data) {
			this.templateLoader.load(selector, './games/tetris/Tetris-game/' + 'tetris_game.html', data);
		}

		spaceivaders(selector, data) {
			this.templateLoader.load(selector, this.templatesPath + 'games/' + 'spaceivaders.html', data);
		}
	}

	const viewObj = new View(templateLoader);
	return viewObj;
})();

export {
	view
};