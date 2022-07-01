import { computeDeliveryTime, computeDeliveryPrice } from "../shipping/shipping";

export class Clothing {
  name: Array<string>;
  style: string;
  color: string;
  size: string;
  ref: string;
  price: number;
  stock: number;
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

export class Order { 
  clothings: Array<Clothing>;
  number: number;
  customer: Customer;
  deliveryTime : number;
  deliveryPrice: number;
  totalPrice: number;
  totalPriceOrder: number;

  constructor(customer: Customer) {
    this.clothings = new Array(); 
    this.number = (Math.floor(Math.random() * 1000));
    this.customer = customer;
  }

 computeTotalPrice() {
    this.totalPrice = 0;
    for (let fringue of this.clothings) {
    this.totalPrice += fringue.price;
    } return this.totalPrice
  } 
}