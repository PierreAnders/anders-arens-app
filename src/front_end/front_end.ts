

import { Order, Customer, Clothing } from "../library/library";
import { makeMarbella } from "../production/production";
import { computeDeliveryTime, computeDeliveryPrice, computeTotalPriceOrder } from "../shipping/shipping";

export function startFrontEnd() {
 
  var pierreUntas = new Customer("Pierre", "Untas", "88 rue Lagrange 33000 Bordeaux, France", "pierre.untas@gmail.com", 4397720003099031, false);

  var commande = new Order(pierreUntas);

    let t1 = makeMarbella("Black", "small");
    let t2 = makeMarbella("Black", "medium");
    let t3 = makeMarbella("Black", "large");
    let t4 = makeMarbella("Red", "large");

    addToCart(commande, t1);
    addToCart(commande, t2);
    addToCart(commande, t3);
    addToCart(commande, t4);

console.log("\n");
console.log(commande.customer.customerFirstName,", he is your order: ")
console.log("\n");

console.log(commande);
    
    computeDeliveryTime(commande);

    computeDeliveryPrice(commande);

    commande.computeTotalPrice();

    computeTotalPriceOrder(commande);

    displayFinalOrder(commande);
  }

function displayFinalOrder(commande: Order) {
  console.log("Votre commande va prendre %d jours à être livré", commande.deliveryTime);
  console.log("Votre commande coute %d euros", commande.totalPrice);
  console.log("Le coût de livraison est de %d euros", commande.deliveryPrice) ;
  console.log("Le coût total de votre commande livrable est de %d euros", commande.totalPriceOrder);
}

export function addToCart(commande: Order, fringue: Clothing) {
  commande.clothings.push(fringue);
}