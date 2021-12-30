import Car from "./car";
import { DealerInterface } from "./dealer-interface";

export default class Dealer implements DealerInterface {
  private address: string;
  private carList: Array<Car>;

  constructor(address: string, carList: Array<Car>) {
    this.address = address;
    this.carList = carList;
  }

  getAddress(): string {
    return this.address;
  }

  getCarList(): Array<Car> {
    return this.carList;
  }

  opening(): string {
    return "08:00";
  }
}
