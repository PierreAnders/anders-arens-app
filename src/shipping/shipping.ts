// le developpeur "shipping" déclare les expéditions

import {Order, Customer} from "../library/library"

// Je crée une fonction pour obtenir les informations de livraison

export function getShipping(order: Order , customer : Customer){
console.log(`order number: ${order.number}, delivery address: ${customer.customerAddress}`)
}

// Je crée une solution pour définir les délais de livraison

