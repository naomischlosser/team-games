import BaseGame from './BaseGame.js';

export default class GameOver extends BaseGame {
	constructor() {
		super('game-over');
	}

	create(data) {
		// music
		this.music = this.sound.add('gameOverMusic', { loop: true });
		this.music.play();
		
		// background
		this.setStaticBackground()

		// game over text
		const gameOverText = this.#gameOverText();
		gameOverText.setDepth(1);
	
		// score
		const score = this.#score(data);
		score.setOrigin(0.5).setDepth(1);

		// highscore
		this.highscore.addHighscore(data.score);
		console.log(this.highscore.getHighscore())

		// start game text
		const startGameButton = this.#startGame()
		startGameButton.setDepth(1).setInteractive( { useHandCursor: true  } );
		startGameButton.on('pointerup', () => {
			this.music.stop();
			this.scene.start('game-play');
			}
		);
	}

	#gameOverText(){
		return this.add.image(
			this.game.renderer.width / 2,
			this.game.renderer.height / 2 - 100,
			'end-game-button'
		)
	}

	#score(data){
		const width = this.cameras.main.width / 2;
		const height = this.cameras.main.height / 2;
		return this.add.text(width, height + 25, data.score,
			{ font: 'bold 80px Arial', fill: '#000000'}
		)
	}

	#startGame(){
		return this.add.image(
			this.game.renderer.width / 2,
			this.game.renderer.height / 2 + 90,
			'start-again-button'
		)
	}
}
