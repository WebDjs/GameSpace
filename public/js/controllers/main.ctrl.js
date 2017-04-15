'use strict';

import {
	view as view
} from "../view/view-service.js";

const mainCtrl = (() => {
	class MainCtrl {
		get home() {
			let data = [
				{
					title: 'TitleName',
					description: `
					 Contrary to popular belief, Lorem Ipsum is not simply random text. 
					 It has roots in a piece of classical Latin literature from 45 BC, 
					 making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32. The standard chunk of Lorem Ipsum used since the 150
					 `,
					img: ''
				},
				{
					title: 'TitleName',
					description: `
					 Contrary to popular belief, Lorem Ipsum is not simply random text. 
					 It has roots in a piece of classical Latin literature from 45 BC, 
					 making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32. The standard chunk of Lorem Ipsum used since the 150
					 `,
					img: ''
				},
				{
					title: 'TitleName',
					description: `
					 Contrary to popular belief, Lorem Ipsum is not simply random text. 
					 It has roots in a piece of classical Latin literature from 45 BC, 
					 making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32. The standard chunk of Lorem Ipsum used since the 150
					 `,
					img: ''
				}
			];
			return view.info('#content', { data: data })
		}

		get news() {
			let data = [
				{
					title: 'TitleName',
					description: `
					 Contrary to popular belief, Lorem Ipsum is not simply random text. 
					 It has roots in a piece of classical Latin literature from 45 BC, 
					 making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32. The standard chunk of Lorem Ipsum used since the 150
					 `,
					img: ''
				},
				{
					title: 'TitleName',
					description: `
					 Contrary to popular belief, Lorem Ipsum is not simply random text. 
					 It has roots in a piece of classical Latin literature from 45 BC, 
					 making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32. The standard chunk of Lorem Ipsum used since the 150
					 `,
					img: ''
				},
				{
					title: 'TitleName',
					description: `
					 Contrary to popular belief, Lorem Ipsum is not simply random text. 
					 It has roots in a piece of classical Latin literature from 45 BC, 
					 making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32. The standard chunk of Lorem Ipsum used since the 150
					 `,
					img: ''
				}
			];
			return view.info('#content', { data: data })
		}

		get blog() {
			let data = [
				{
					title: 'TitleName',
					description: `
					 Contrary to popular belief, Lorem Ipsum is not simply random text. 
					 It has roots in a piece of classical Latin literature from 45 BC, 
					 making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32. The standard chunk of Lorem Ipsum used since the 150
					 `,
					img: ''
				},
				{
					title: 'TitleName',
					description: `
					 Contrary to popular belief, Lorem Ipsum is not simply random text. 
					 It has roots in a piece of classical Latin literature from 45 BC, 
					 making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32. The standard chunk of Lorem Ipsum used since the 150
					 `,
					img: ''
				},
				{
					title: 'TitleName',
					description: `
					 Contrary to popular belief, Lorem Ipsum is not simply random text. 
					 It has roots in a piece of classical Latin literature from 45 BC, 
					 making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32. The standard chunk of Lorem Ipsum used since the 150
					 `,
					img: ''
				}
			];
			return view.info('#content', { data: data })
		}

		get profile() {
			return view.profile('#content', {});
		}

		get tournaments() {
			return view.tournaments('#content', {});
		}

		get games() {
			let data = [
				{
					title: 'Chess',
					link: '#/chess',
					description: `
				Chess is a two-player strategy board game played on a chessboard, a checkered gameboard with 64 squares arranged in an eight-by-eight grid.[1] Chess is played by millions of people worldwide, both amateurs and professionals.
Each player begins the game with 16 pieces: one king, one queen, two rooks, two knights, two bishops, and eight pawns. Each of the six piece types moves differently, with the most powerful being the queen and the least powerful the pawn. The objective is to 'checkmate'[2] the opponent's king by placing it under an inescapable threat of capture. To this end, a player's pieces are used to attack and capture the opponent's pieces, while supporting each other. In addition to checkmate, the game can be won by voluntary resignation by the opponent, which typically occurs when too much material is lost, or if checkmate appears unavoidable. A game may also result in a draw in several ways.
Chess is believed to have originated in India, some time before the 7th century, being derived from the Indian game of chaturanga. Chaturanga is also the likely ancestor of the Eastern strategy games xiangqi, janggi and shogi. The pieces took on their current powers in Spain in the late 15th century; the rules were finally standardized in the 19th century. The first generally recognized World Chess Champion, Wilhelm Steinitz, claimed his title in 1886. Since 1948, the World Championship has been controlled by FIDE, the game's international governing body; the current World Champion is the Norwegian Magnus Carlsen. FIDE also organizes the Women's World Championship, the World Junior Championship, the World Senior Championship, the Blitz and Rapid World Championships and the Chess Olympiad, a popular competition among teams from different nations. There is also a Correspondence Chess World Championship and a World Computer Chess Championship. Online chess has opened amateur and professional competition to a wide and varied group of players. There are also many chess variants, with different rules, different pieces, and different boards.
FIDE awards titles to skilled players, the highest of which is grandmaster. Many national chess organizations also have a title system. However, these are not recognised by FIDE. The term "master" may refer to a formal title or may be used more loosely for any skilled player.
Until recently, chess was a recognized sport of the International Olympic Committee;[3] some national sporting bodies such as the Spanish Consejo Superior de Deportes also recognize chess as a sport.[4] Chess was included in the 2006 and 2010 Asian Games.
Since the second half of the 20th century, computers have been programmed to play chess with increasing success, to the point where the strongest home computers play chess at a higher level than the best human players. Since the 1990s, computer analysis has contributed significantly to chess theory, particularly in the endgame. The computer IBM Deep Blue was the first machine to overcome a reigning World Chess Champion in a match when it defeated Garry Kasparov in 1997. The rise of strong computer programs (known as "engines") that can be run on hand-held devices has led to increasing concerns about cheating during tournaments.
					 `,
					img: ''
				},
				{
					title: 'TitleName',
					description: `
					 Contrary to popular belief, Lorem Ipsum is not simply random text. 
					 It has roots in a piece of classical Latin literature from 45 BC, 
					 making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32. The standard chunk of Lorem Ipsum used since the 150
					 `,
					img: ''
				},
				{
					title: 'TitleName',
					description: `
					 Contrary to popular belief, Lorem Ipsum is not simply random text. 
					 It has roots in a piece of classical Latin literature from 45 BC, 
					 making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32. The standard chunk of Lorem Ipsum used since the 150
					 `,
					img: ''
				}
			];
			return view.info('#content', { data: data })
		}

		get chess() {
			return view.chess('#content', {});
		}
	}

	const newMain = new MainCtrl();
	return newMain;
})();

export {
	mainCtrl
}
