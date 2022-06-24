"use strict";
// le developpeur "shipping" déclare les expéditions
Object.defineProperty(exports, "__esModule", { value: true });
exports.deliveryTime = exports.getShipping = void 0;
// Je crée une fonction pour obtenir les informations de livraison
function getShipping(order, customer) {
    console.log(`order number: ${order.number}, delivery address: ${customer.customerAddress}`);
}
exports.getShipping = getShipping;
// Je crée une solution pour définir les délais de livraison: un délais d'acheminement du colis de 2 jours et un délais de production de 7 jours. Si la pièce est en stock le délais de livraison est donc de deux jours et si elle n'est pas en stock le délais de livraison est de 9 jours.
function deliveryTime(stock) {
    if (stock.quantity > 0) {
        stock.timeToShip = 2;
    }
    else {
        stock.timeToShip = 2 + 7;
    }
}
exports.deliveryTime = deliveryTime;
