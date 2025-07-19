export default class Player {
    constructor(x, y) {
      this.x = x;
      this.y = y;
      this.width = 30;
      this.height = 30;
      this.color = 'lime';
  
      this.speed = 3;
      this.gravity = 0.5;
      this.grounded = false;
      this.jumping = false;
  
      this.keys = {
        left: false,
        right: false,
        jump: false,
      };
  
      this.#setupKeyboardListeners();
    }
  
    #setupKeyboardListeners() {
      window.addEventListener('keydown', (e) => {
        if (['ArrowLeft', 'a'].includes(e.key)) this.keys.left = true;
        if (['ArrowRight', 'd'].includes(e.key)) this.keys.right = true;
      });
  
      window.addEventListener('keyup', (e) => {
        if (['ArrowLeft', 'a'].includes(e.key)) this.keys.left = false;
        if (['ArrowRight', 'd'].includes(e.key)) this.keys.right = false;
      });
    }
  
    update(grounds) {
      // Horizontal movement
      if (this.keys.left) this.x -= this.speed;
      if (this.keys.right) this.x += this.speed;
  
      // Apply gravity
      if (!this.grounded) {
        this.vy += this.gravity;
        this.y += this.vy;
      }
  
      // Reset grounded state
      this.grounded = false;
  
      // Check collision with all grounds
      for (const ground of grounds) {
        if (ground.handleCollision(this)) {
          this.grounded = true;
          break; // Only need to land on one ground
        }
      }
    }
  
    draw(ctx) {
      ctx.fillStyle = this.color;
      ctx.fillRect(this.x, this.y, this.width, this.height);
    }
  }
  