"use strict";
// je crée des classes
Object.defineProperty(exports, "__esModule", { value: true });
exports.Stock = exports.Order = exports.Customer = exports.Clothing = void 0;
class Clothing {
    getDeliveryDelay() {
        return this.shippingTime + this.productionDelay;
    }
}
exports.Clothing = Clothing;
class Customer {
}
exports.Customer = Customer;
class Order {
}
exports.Order = Order;
class Stock {
}
exports.Stock = Stock;
