import { Clothing, Order, Customer } from "../library/library";

let stockMarbella = 5;

export function computeDeliveryTime(commande: Order) {
  
  if (commande.clothings.length === 1) {
    commande.deliveryTime = 1 
   } else (commande.clothings.length > 1);{
commande.deliveryTime = commande.clothings.length * 3 - 1
   }
   return commande.deliveryTime
}

export function computeDeliveryPrice(commande: Order){
  if (commande.clothings.length === 1) {
    commande.deliveryPrice = 9
  } else (commande.clothings.length > 1);{
    commande.deliveryPrice = commande.clothings.length * 4.5
  } return commande.deliveryPrice
}

export function computeTotalPriceOrder(commande: Order){
  commande.totalPriceOrder = commande.deliveryPrice + commande.totalPrice;
  return commande.totalPriceOrder
}