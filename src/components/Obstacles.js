export default class Obstacles {
<<<<<<< HEAD
  constructor(scene) {
    this.scene = scene;
=======
  constructor(scene){ 
    this.scene = scene
>>>>>>> main
  }

  createObstacles() {
    // load in physics files
    this.physics = this.scene.cache.json.get('obstacles-physics');
    
    this.tick = 0;
    this.shark = null;

    // create and populate obstacle groups
<<<<<<< HEAD
    this.#createGroups();
    this.#populateGroups();

    // add sharks
    this.scene.time.addEvent({
      delay: 5000,
      // delay: 5000,
      loop: true,
      callback: () => {
        let obstacleY = Math.floor(Math.random() * 375) + 125;
        this.#obstacleCallback(this.sharks, obstacleY, 0.7);
      },
    });

    // randomly alternate ships and rocks on bottom
    this.scene.time.addEvent({
      delay: 3000,
      // delay: 10000,
      loop: true,
      callback: () => {
        if (Math.round(Math.random()) == 0) {
          this.#obstacleCallback(this.rocks, 870, 0.9);
        } else {
          this.#obstacleCallback(this.ships, 870, 1.4);
        }
      },
    });
  }

  updateObstacles() {
    this.#controlObstacle(this.rocks, -this.scene.gameSpeed);
    this.#controlObstacle(this.ships, -this.scene.gameSpeed);
    this.#controlObstacle(this.sharks, -2 * this.scene.gameSpeed);
=======
    this.#createGroups()
    this.#populateGroups()
  }

  updateObstacles() {
    this.tick += 1

    // add sharks
    if (this.tick % 250 == 0){
      let obstacleY = Math.floor(Math.random() * 375) + 125;
      this.#obstacleCallback(this.sharks, obstacleY, 0.7)
    }

    // add random mix of rocks and ships
    if (this.tick % 1000 == 0){
      if (Math.round(Math.random()) == 0) {
        this.#obstacleCallback(this.rocks, 970, 0.5)
      } else {
        this.#obstacleCallback(this.ships, 870, 0.5)
      }
    }

    this.#controlObstacle(this.rocks, -this.scene.gameSpeed)
    this.#controlObstacle(this.ships, -this.scene.gameSpeed)
    this.#controlObstacle(this.sharks, -2 * this.scene.gameSpeed)
>>>>>>> main
  }

  #createGroups() {
    this.rocks = this.scene.add.group();
    this.ships = this.scene.add.group();
    this.sharks = this.scene.add.group();
  }

<<<<<<< HEAD
  #populateGroups() {
    // load in physics files
    const physics = this.scene.cache.json.get('obstacles-physics');

    // add 6 of each obstacle into their respective groups
    // make sure you don't get more obstacles on the the screen than there are in the group
    for (let i = 0; i < 5; i++) {
      this.rocks.add(this.#makeImage(this.scene, 'rockObstacle', physics.rock)).setVisible(false);
      this.ships.add(this.#makeImage(this.scene, 'shipObstacle', physics.ship)).setVisible(false);
      this.sharks
        .add(this.#makeImage(this.scene, 'sharkObstacle', physics.shark))
        .setVisible(false);
=======
  #populateGroups(){  
    // add 6 of each obstacle into their respective groups
    // make sure you don't get more obstacles on the the screen than there are in the group
    for (let i = 0; i < 2; i++) {
      this.rocks.add(this.#makeImage(this.scene, 'rockObstacle', this.physics.rock)).setVisible(false);
      this.ships.add(this.#makeImage(this.scene, 'shipObstacle', this.physics.ship)).setVisible(false);
      this.sharks.add(this.#makeImage(this.scene, 'sharkObstacle', this.physics.shark)).setVisible(false);
>>>>>>> main
    }
  }

  #makeImage(scene, image, physics) {
    return scene.matter.add.image(-200, -200, image, null, { shape: physics });
  }

  #obstacleCallback(obstacles, obstacleY, scale) {
    obstacles
      .get(this.scene.cameras.main.width, obstacleY)
      .setActive(true)
      .setVisible(true)
      .setScale(scale);
  }

  #controlObstacle(group, speed) {
    group.incX(speed);
    group.getChildren().forEach((obstacle) => {
      obstacle.setAngle(0);
      obstacle.setVelocityX(0);
      obstacle.setVelocityY(0);

      if (obstacle.active && obstacle.x + obstacle.width < 0) {
        group.killAndHide(obstacle);
      }
    });
  }
}
