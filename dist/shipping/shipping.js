"use strict";
// le developpeur "shipping" déclare les expéditions
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDeliveryTime = exports.getShipping = void 0;
// Je crée une fonction pour obtenir les informations de livraison
function getShipping(order, customer) {
    console.log(`order number: ${order.number}, delivery address: ${customer.customerAddress}`);
}
exports.getShipping = getShipping;
function getDeliveryTime([clothing]) {
    if (clothing.stock > 1) {
        clothing.deliveryTime = 2;
    }
    else {
        clothing.deliveryTime = 9;
    }
    return clothing.deliveryTime;
}
exports.getDeliveryTime = getDeliveryTime;
