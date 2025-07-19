export default class Ground {
  constructor(x, y, width, height, color = 'brown') {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.color = color;
  }

  // Check if an entity collides with this ground
  collidesWith(entity) {
    return (
      entity.x < this.x + this.width &&
      entity.x + entity.width > this.x &&
      entity.y < this.y + this.height &&
      entity.y + entity.height > this.y
    );
  }

  // Get the top surface Y position (for landing)
  getTopSurface() {
    return this.y;
  }

  // Handle collision response for an entity
  handleCollision(entity) {
    if (this.collidesWith(entity)) {
      // Place entity on top of ground
      entity.y = this.getTopSurface() - entity.height;
      entity.vy = 0;
      entity.grounded = true;
      return true;
    }
    return false;
  }

  draw(ctx) {
    ctx.fillStyle = this.color;
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }
} 