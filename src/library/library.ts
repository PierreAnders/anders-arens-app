import { computeDeliveryTime, computeDeliveryPrice } from "../shipping/shipping";

export class Clothing {
  name: Array<string>;
  style: string;
  color: string;
  size: string;
  ref: string;
  price: number;
  stock: number;
  //deliveryTime: number;
}

export class Customer {
  customerFirstName: string;
  customerLastName: string;
  customerAddress: string;
  customerMail: string;
  customerCardNumber: number;
  isFirstTimeCustomer: boolean;

  constructor (customerFirstName: string, customerLastName: string, customerAddress: string, customerMail: string, customerCardNumber: number, isFirstTimeCustomer: boolean){
    this.customerFirstName = customerFirstName;
    this.customerLastName = customerLastName;
    this.customerAddress = customerAddress
    this.customerMail = customerMail
    this.customerCardNumber = customerCardNumber
    this.isFirstTimeCustomer = isFirstTimeCustomer
  }
}

// la commande - c'est à dire l'équivalent du panier + infos

export class Order { 
  clothings: Array<Clothing>;
  number: number;
  customer: Customer;
  deliveryTime : number;
  deliveryPrice: number;
  totalPrice: number;

  constructor(customer: Customer) {
    this.clothings = new Array(); // initialize le tableau
    this.number = (Math.floor(Math.random() * 1000)); // numéro aléatoire
    this.customer = customer;
    this.deliveryTime = 0;
    this.totalPrice = 0;
  }

  // parcours mon tableau et additionne le prix
 computeTotalPrice() {
    this.totalPrice = 0;
    for (let fringue of this.clothings) {
    //console.log("prix = ", fringue.price);
      this.totalPrice += fringue.price;
    } return this.totalPrice
  } 

  //computeTotalPriceOrder(commande){
    //console.log(computeDeliveryPrice(commande) + commande.computeTotalPrice(commande))
  }

