import Enemy from './enemy.js';
import Player from './player.js';
import Ground from './ground.js';

export default class Game {
  constructor(canvas) {
    this.canvas = canvas;
    this.width = canvas.width;
    this.height = canvas.height;

    this.player = new Player(100, 100);
    // this.enemy = new Enemy(200, 20);

    // Create grounds array for multiple platforms
    this.grounds = [
      new Ground(0, this.height - 50, this.width, 50, 'brown'),
      // You can easily add more platforms:
      new Ground(200, this.height - 150, 100, 20, 'green'),
      new Ground(400, this.height - 200, 80, 20, 'blue'),
    ];
  }

  init() {}

  update(timestamp, ctx) {
    this.player.update(this.grounds);
    // this.enemy.update();
  }

  draw(ctx) {
    // Draw all grounds
    for (const ground of this.grounds) {
      ground.draw(ctx);
    }

    // Draw player and enemy
    this.player.draw(ctx);
    // this.enemy.draw(ctx);
  }
}
