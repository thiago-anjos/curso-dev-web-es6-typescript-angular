export default class Vehicle {
  protected model: string = "";
  private speed: number = 0;

  speedAction() {
    this.speed = this.speed + 10;
  }

  stop() {
    this.speed = 0;
  }

  currentSpeed(): number {
    return this.speed;
  }
}
