// le developpeur "front_end" se charge d'obtenir les informations des clients
// Il se charge d'obtenir les informations des commandes

import { Order, Customer, Clothing } from "../library/library";
import { makeMarbella } from "../production/production";
import { computeDeliveryTime } from "../shipping/shipping";

// (J'importe les informations client de l'interface uilisateur)
// Je déclare les clients pour exporter leurs informations

/**
 *
 *   On va faire une fonction qui simule l'utilisation d'une interface
 *  utilisateur (ex: un site web en HTML)
 *
 *     1. l'utilisateur ouvre le site
 *     2. il parcours les produits
 *     3. il ajoute des produits au panier
 *     4. ---> c'est là qu'on commence notre fonction principale
 *
 */
export function startFrontEnd() {
  console.log("---- startFrontEnd ----");

  // je créer un customer
  // @todo Pierre :  créer un constructeur pour la class Customer
  // le constructeur va prendre des paramètre (age, nom, ect.. )
  let pierreUntas = new Customer();
  pierreUntas.customerFirstName = "Pierre";
  pierreUntas.customerLastName = "Untas";
  pierreUntas.customerAddress = "88 rue Lagrange, 33000 Bordeaux, France";
  pierreUntas.customerMail = "pierre.untas@gmail.com";
  pierreUntas.customerCardNumber = 4397720003099031;
  pierreUntas.isFirstTimeCustomer = false;

  // je lui créer une commande
  // @todo pierre : créer un constructeur pour la classe order qui va prendre un
  // Customer en paramètre
  let commande = new Order();
  commande.customer = pierreUntas;

  let t1 = makeMarbella("Black", "small");
  let t2 = makeMarbella("Black", "medium");
  let t3 = makeMarbella("Black", "large");
  let t4 = makeMarbella("Red", "large");

  // j'ajoute les vêtements un par un à la commande
  addToCart(commande, t1);
  addToCart(commande, t2);
  addToCart(commande, t3);
  addToCart(commande, t4);

  // maintenant que j'ai une commande : je calcule le temps de delivery
  computeDeliveryTime(commande);

  // calculer le prix et le cout de delivery
  commande.computeTotalDeliveryTime();
  commande.computeTotalPrice();

  // displayFinalOrder
  displayFinalOrder(commande);
}

// affiche le résumé de la commande à l'écran
function displayFinalOrder(commande: Order) {
  console.log("Votre commande va prendre %d jours", commande.deliveryTime);
  console.log("Votre commande coute %d euros", commande.totalPrice);
}

// prendre une commande et un vêtement et il va mettre le vetement dans la commande
export function addToCart(commande: Order, fringue: Clothing) {
  commande.clothings.push(fringue);
}
