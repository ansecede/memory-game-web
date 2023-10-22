export default class Player {
  constructor({ x, y, color }) {
    this._x = x;
    this._y = y;
    this.color = color;
  }

  setXPosition(newX) {
    this._x = newX;
  }

  setYPosition(newY) {
    this._y = newY;
  }

  updatePosition(x, y) {
    this.setXPosition(x);
    this.setYPosition(y);
  }

  draw(c) {
    c.beginPath();
    c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    c.fillStyle = this.color;
    c.fill();
  }
}
