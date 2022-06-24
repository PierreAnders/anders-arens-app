"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Order = exports.Customer = exports.Clothing = void 0;
class Clothing {
    getDeliveryDelay() {
        return this.shippingTime + this.productionDelay;
        ;
    }
}
exports.Clothing = Clothing;
class Customer {
}
exports.Customer = Customer;
class Order {
}
exports.Order = Order;
/*export class Shipping {
    order : Order;
    address : Customer;
}*/
// stock (dev production)
