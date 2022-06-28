// le developpeur "shipping" déclare les expéditions

import { Order, Customer } from "../library/library";

let stockMarbella = 5;

// Je crée une fonction pour obtenir les informations de livraison

//@todo Pierre : à coder
export function computeDeliveryTime(commande: Order) {
  //juste un test : je dis que c'est 1j pour n'importe quel vêtemetn
  //je parcours les fringues de ma commande et j'ajoute 2j à chaque vêtement
}

// export function getShipping(order: Order, customer: Customer) {
//   console.log(
//     `order number: ${order.number}, delivery address: ${customer.customerAddress}`
//   );
// }

// export function getDeliveryTime([clothing]) {
//   if (clothing.stock > 1) {
//     clothing.deliveryTime = 2;
//   } else {
//     clothing.deliveryTime = 9;
//   }
//   return clothing.deliveryTime;
// }
