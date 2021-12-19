import { saudacao, getAddress } from "./lib.mjs";

console.log(saudacao());

getAddress("01001000").then((resp) => console.log(resp));
