

import { Order, Customer, Clothing } from "../library/library";
import { makeMarbella } from "../production/production";
import { computeDeliveryTime, computeDeliveryPrice, computeTotalPriceOrder } from "../shipping/shipping";
 
/*
 On va faire une fonction qui simule l'utilisation d'une interface
 utilisateur (ex: un site web en HTML)
 1. l'utilisateur ouvre le site
 2. il parcours les produits
 3. il ajoute des produits au panier
 4.---> c'est là qu'on commence notre fonction principale
 */

export function startFrontEnd() {
  
  // je crée un customer
  // @todo Pierre :  créer un constructeur pour la class Customer
  // le constructeur va prendre des paramètres (age, nom, ect.. )
 
  var pierreUntas = new Customer("Pierre", "Untas", "88 rue Lagrange 33000 Bordeaux, France", "pierre.untas@gmail.com", 4397720003099031, false);

  // je lui crée une commande
  // @todo pierre : créer un constructeur pour la classe order qui va prendre un
  // Customer en paramètre
  
  var commande = new Order(pierreUntas);

    let t1 = makeMarbella("Black", "small");
    let t2 = makeMarbella("Black", "medium");
    let t3 = makeMarbella("Black", "large");
    let t4 = makeMarbella("Red", "large");

  // j'ajoute les vêtements un par un à la commande

    addToCart(commande, t1);
    addToCart(commande, t2);
    addToCart(commande, t3);
    addToCart(commande, t4);

console.log("\n");
console.log(commande.customer.customerFirstName,", he is your order: ")
console.log("\n");

console.log(commande);

  // maintenant que j'ai une commande : je calcule le temps de delivery
    
    computeDeliveryTime(commande);

  // calculer le prix et le cout de delivery

    computeDeliveryPrice(commande);

    commande.computeTotalPrice();

    computeTotalPriceOrder(commande);

  // displayFinalOrder

    displayFinalOrder(commande);
  }

// ---------------------------------------------------------- //

// affiche le résumé de la commande à l'écran
function displayFinalOrder(commande: Order) {
  console.log("Votre commande va prendre %d jours à être livré", commande.deliveryTime);
  console.log("Votre commande coute %d euros", commande.totalPrice);
  console.log("Le coût de livraison est de %d euros", computeDeliveryPrice(commande)) ;
  console.log("Le coût total de votre commande livrable est de %d euros", computeTotalPriceOrder(commande));
}

// prendre une commande et un vêtement et il va mettre le vetement dans la commande
export function addToCart(commande: Order, fringue: Clothing) {
  commande.clothings.push(fringue);
}