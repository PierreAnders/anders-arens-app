import { getStock, makeMarbella } from "./production/production";
import { startFrontEnd } from "./front_end/front_end";
import { getShipping, getDeliveryTime } from "./shipping/shipping";
/*import {Clothing} from "./library/library"*/

console.log("\n");

console.log("-------------------------------------------------------------");
console.log("               WELCOME TO ANDERS ARENS' APP                  ");
console.log("-------------------------------------------------------------");

console.log("\n");

startFrontEnd();

// console.log("\n");
// console.log("------------------ Here is our catalogue: -------------------");
// console.log("\n");

// let t1 = makeMarbella("Black", "small");
// let t2 = makeMarbella("Black", "medium");
// let t3 = makeMarbella("Black", "large");
// let t4 = makeMarbella("Red", "large");

// console.log("t1 -> ", t1.style, t1.color, t1.ref);
// console.log("t2 -> ", t2);
// console.log("t3 -> ", t3);
// console.log("t4 -> ", t4);

// console.log("\n");
// console.log("----------------- Here are our orders: ---------------------");
// console.log("\n");

// getOrder(guillaumeBourdaOrder);
// getOrder(pierreUntasOrder);

// console.log("\n");
// console.log("----------------- Here are our stock: ---------------------");
// console.log("\n");

// console.log(getStock(AddMarbellaBlackS()));
// console.log(getStock(AddMarbellaBlackM()));
// console.log(getStock(AddMarbellaBlackL()));

// getShipping(guillaumeBourdaOrder, guillaumeBourda);
// getShipping(pierreUntasOrder, pierreUntas);

// AddToCart(guillaumeBourdaOrder);

// console.log("\n");
// console.log("-------------------------------------------------------------");
// console.log("\n");
