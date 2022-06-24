// le developpeur "shipping" déclare les expéditions

import {Order, Customer, /*Clothing, */Stock} from "../library/library"

// Je crée une fonction pour obtenir les informations de livraison

export function getShipping(order: Order , customer : Customer){
console.log(`order number: ${order.number}, delivery address: ${customer.customerAddress}`)
}

// Je crée une solution pour définir les délais de livraison: un délais d'acheminement du colis de 2 jours et un délais de production de 7 jours. Si la pièce est en stock le délais de livraison est donc de deux jours et si elle n'est pas en stock le délais de livraison est de 9 jours.

export function deliveryTime(stock: Stock){
    if (stock.quantity > 0){ 
    stock.timeToShip = 2;
    } else {
        stock.timeToShip = 2 + 7;
    }
}
