"use strict";
// le developpeur "shipping" déclare les expéditions
Object.defineProperty(exports, "__esModule", { value: true });
exports.getShipping = void 0;
// Je crée une fonction pour obtenir les informations de livraison
function getShipping(order, customer) {
    console.log(`order number: ${order.number}, delivery address: ${customer.customerAddress}`);
}
exports.getShipping = getShipping;
// Je crée une solution pour définir les délais de livraison
