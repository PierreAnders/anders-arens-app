<<<<<<< HEAD
import {AddMarbellaBlackS, AddMarbellaBlackM, AddMarbellaBlackL, getStock} from "./production/production"
import {AddToCart, getOrder, guillaumeBourda, guillaumeBourdaOrder, pierreUntas, pierreUntasOrder } from "./front_end/front_end"
import {getShipping, getDeliveryTime} from "./shipping/shipping"
/*import {Clothing} from "./library/library"*/
=======
import {
  marbellaBlackS,
  marbellaBlackM,
  marbellaBlackL,
  getStock,
  marbellaBlackSStock,
  marbellaBlackMStock,
  marbellaBlackLStock,
} from "./production/production";
import {
  getOrder,
  guillaumeBourda,
  guillaumeBourdaOrder,
  pierreUntas,
  pierreUntasOrder,
} from "./front_end/front_end";
import { getShipping, deliveryTime } from "./shipping/shipping";
>>>>>>> develop

console.log("\n");

console.log("-------------------------------------------------------------");
console.log("               WELCOME TO ANDERS ARENS' APP                  ");
console.log("-------------------------------------------------------------");

console.log("\n");
console.log("------------------ Here is our catalogue: -------------------");
console.log("\n");

<<<<<<< HEAD
console.log(`${AddMarbellaBlackS().style} ${AddMarbellaBlackS().color} ${AddMarbellaBlackS().size}, €${AddMarbellaBlackS().price}, delivery delay: ${(getDeliveryTime([AddMarbellaBlackS()]))} days`)
console.log(`${AddMarbellaBlackM().style} ${AddMarbellaBlackM().color} ${AddMarbellaBlackM().size}, €${AddMarbellaBlackM().price}, delivery delay: ${(getDeliveryTime([AddMarbellaBlackM()]))} days`)
console.log(`${AddMarbellaBlackL().style} ${AddMarbellaBlackL().color} ${AddMarbellaBlackL().size}, €${AddMarbellaBlackL().price}, delivery delay: ${(getDeliveryTime([AddMarbellaBlackL()]))} days`)
=======
deliveryTime(marbellaBlackSStock);
deliveryTime(marbellaBlackMStock);
deliveryTime(marbellaBlackLStock);

console.log(
  `${marbellaBlackS.style} ${marbellaBlackS.color} ${marbellaBlackS.size}, €${marbellaBlackS.price}, delivery delay: ${marbellaBlackSStock.timeToShip} days`
);
console.log(
  `${marbellaBlackM.style} ${marbellaBlackM.color} ${marbellaBlackM.size}, €${marbellaBlackM.price}, delivery delay: ${marbellaBlackMStock.timeToShip} days`
);
console.log(
  `${marbellaBlackL.style} ${marbellaBlackL.color} ${marbellaBlackL.size}, €${marbellaBlackL.price}, delivery delay: ${marbellaBlackLStock.timeToShip} days`
);
>>>>>>> develop

console.log("\n");
console.log("----------------- Here are our orders: ---------------------");
console.log("\n");

getOrder(guillaumeBourdaOrder);
getOrder(pierreUntasOrder);

console.log("\n");
console.log("----------------- Here are our stock: ---------------------");
console.log("\n");

<<<<<<< HEAD
console.log(getStock(AddMarbellaBlackS()))
console.log(getStock(AddMarbellaBlackM()))
console.log(getStock(AddMarbellaBlackL()))
=======
console.log(getStock(marbellaBlackSStock));
console.log(getStock(marbellaBlackMStock));
console.log(getStock(marbellaBlackLStock));

console.log("\n");
console.log("------------- Here are our delivery informations: -----------");
console.log("\n");
>>>>>>> develop

getShipping(guillaumeBourdaOrder, guillaumeBourda);
getShipping(pierreUntasOrder, pierreUntas);

<<<<<<< HEAD
getShipping(guillaumeBourdaOrder, guillaumeBourda)
getShipping(pierreUntasOrder, pierreUntas)

AddToCart(guillaumeBourdaOrder)

console.log("\n")
console.log("-------------------------------------------------------------")
console.log("\n")
=======
console.log("\n");
console.log("-------------------------------------------------------------");
console.log("\n");
>>>>>>> develop
