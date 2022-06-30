// le developpeur "shipping" déclare les expéditions

import { Clothing, Order, Customer } from "../library/library";

let stockMarbella = 5;

// Je crée une fonction pour obtenir les informations de livraison
//@todo Pierre : à coder

export function computeDeliveryTime(commande: Order) {
  
  if (commande.clothings.length === 1) {
    commande.deliveryTime = 1 
   } else (commande.clothings.length > 1);{
commande.deliveryTime = commande.clothings.length * 3 - 1
   }
   return commande.deliveryTime
}
  //juste un test : je dis que c'est 1j pour n'importe quel vêtement
  //je parcours les fringues de ma commande et j'ajoute 2j à chaque vêtement

export function computeDeliveryPrice(commande: Order){
  if (commande.clothings.length === 1) {
    commande.deliveryPrice = 9
  } else (commande.clothings.length > 1);{
    commande.deliveryPrice = commande.clothings.length * 4.5
  } return commande.deliveryPrice
}
// Je definis le coût de livraison à 9€ pour un produit et à 4,5€ par vêtement pour une commande de plusieurs produits.

export function computeTotalPriceOrder(commande: Order){
  console.log(computeDeliveryPrice(commande) + commande.computeTotalPrice())
}

// Je calcule la coût total de la commande livraison comprise