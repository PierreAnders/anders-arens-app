"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const production_1 = require("./production/production");
const front_end_1 = require("./front_end/front_end");
const shipping_1 = require("./shipping/shipping");
/*import {Clothing} from "./library/library"*/
console.log("\n");
console.log("-------------------------------------------------------------");
console.log("               WELCOME IN ANDERS ARENS' APP                  ");
console.log("-------------------------------------------------------------");
console.log("\n");
console.log("------------------ Here is our catalogue: -------------------");
console.log("\n");
console.log(`${(0, production_1.AddMarbellaBlackS)().style} ${(0, production_1.AddMarbellaBlackS)().color} ${(0, production_1.AddMarbellaBlackS)().size}, €${(0, production_1.AddMarbellaBlackS)().price}, delivery delay: ${((0, shipping_1.getDeliveryTime)([(0, production_1.AddMarbellaBlackS)()]))} days`);
console.log(`${(0, production_1.AddMarbellaBlackM)().style} ${(0, production_1.AddMarbellaBlackM)().color} ${(0, production_1.AddMarbellaBlackM)().size}, €${(0, production_1.AddMarbellaBlackM)().price}, delivery delay: ${((0, shipping_1.getDeliveryTime)([(0, production_1.AddMarbellaBlackM)()]))} days`);
console.log(`${(0, production_1.AddMarbellaBlackL)().style} ${(0, production_1.AddMarbellaBlackL)().color} ${(0, production_1.AddMarbellaBlackL)().size}, €${(0, production_1.AddMarbellaBlackL)().price}, delivery delay: ${((0, shipping_1.getDeliveryTime)([(0, production_1.AddMarbellaBlackL)()]))} days`);
console.log("\n");
console.log("----------------- Here are our orders: ---------------------");
console.log("\n");
(0, front_end_1.getOrder)(front_end_1.guillaumeBourdaOrder);
(0, front_end_1.getOrder)(front_end_1.pierreUntasOrder);
console.log("\n");
console.log("----------------- Here are our stock: ---------------------");
console.log("\n");
console.log((0, production_1.getStock)((0, production_1.AddMarbellaBlackS)()));
console.log((0, production_1.getStock)((0, production_1.AddMarbellaBlackM)()));
console.log((0, production_1.getStock)((0, production_1.AddMarbellaBlackL)()));
console.log("\n");
console.log("------------- Here are our delivery informations: -----------");
console.log("\n");
(0, shipping_1.getShipping)(front_end_1.guillaumeBourdaOrder, front_end_1.guillaumeBourda);
(0, shipping_1.getShipping)(front_end_1.pierreUntasOrder, front_end_1.pierreUntas);
(0, front_end_1.AddToCart)(front_end_1.guillaumeBourdaOrder);
console.log("\n");
console.log("-------------------------------------------------------------");
console.log("\n");