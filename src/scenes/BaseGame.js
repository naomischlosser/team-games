export default class BaseGame extends Phaser.Scene {
  constructor(sceneName) {
    super(sceneName);
  }

  preload() {
    // pre game button
    this.load.image('pre-game-button', '/assets/titles/pre-start-button.png');
    // load start button
    this.load.image('start-game-button', 'assets/titles/start-game-button.png');

    // load end game button
    this.load.image('end-game-button', 'assets/titles/game-over-button.png');

    // load start again button
    this.load.image('start-again-button', 'assets/titles/start-again-button.png');

    // load music
    this.load.audio('theme', 'assets/audio/GamePlay/themellq.mp3');
    this.load.audio('gameOverMusic', 'assets/audio/GameOver/gameover.mp3');
    this.load.audio('gameOverMusic', 'assets/audio/GameOver/gameover.mp3');
    this.load.audio('startGameMusic', 'assets/audio/startGame/startGameMusicUB.mp3');

    // load in physics files
    this.load.json('obstacles-physics', 'assets/obstacles/obstacles-physics.json');
    this.load.json('fish-physics', 'assets/players/fish-physics.json');

    // load static background
    this.load.svg('background', 'assets/background/whole-background.svg', {
      width: 1920,
      height: 1080,
    });

    // load moving background
    this.load.svg('background0', 'assets/background/layer-0.svg', { width: 1920, height: 1080 });
    this.load.svg('background1', 'assets/background/layer-1.svg', { width: 1920, height: 1080 });
    this.load.svg('background2', 'assets/background/layer-2.svg', { width: 1920, height: 1080 });
    this.load.svg('background3', 'assets/background/layer-3.svg', { width: 1920, height: 1080 });
    this.load.svg('background4', 'assets/background/layer-4.svg', { width: 1920, height: 1080 });
    this.load.svg('background5', 'assets/background/layer-5.svg', { width: 1920, height: 1080 });
    this.load.svg('background6', 'assets/background/layer-6.svg', { width: 1920, height: 1080 });

    // load player
    this.load.atlas(
      'player',
      'assets/players/player-fish-spritesheet.png',
      'assets/players/player-fish.json',
    );

    // load obstacles
    this.load.svg('rockObstacle', 'assets/obstacles/obstacle-rock.svg');
    this.load.image('shipObstacle', 'assets/obstacles/obstacle-ship-wreck.png');
    this.load.image('sharkObstacle', 'assets/obstacles/obstacle-shark.png');
  }

  setStaticBackground() {
    // background
    this.add.image(0, 0, 'background').setOrigin(0, 0);
  }
}
