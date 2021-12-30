import Vehicle from "./vehicle";

export default class Car extends Vehicle {
  protected ports: number;

  constructor(model: string, ports: number) {
    super();
    this.model = model;
    this.ports = ports;
  }
}
