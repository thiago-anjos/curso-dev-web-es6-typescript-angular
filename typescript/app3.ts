import Car from "./car";
import Dealer from "./dealer";
import MotorCycle from "./motorcicle";

let car01 = new Car("Veloster", 4);
let motorCycle01 = new MotorCycle("Ducati");

console.log(car01);
console.log(motorCycle01);
motorCycle01.speedAction();
console.log(motorCycle01);

let dealer = new Dealer("Rua dois", [car01]);
console.log(dealer.opening());
