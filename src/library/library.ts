export class Clothing {
  name: Array<string>;
  style: string;
  color: string;
  size: string;
  ref: string;
  price: number;
  stock: number;
  deliveryTime: number;
}

export class Customer {
  customerFirstName: string;
  customerLastName: string;
  customerAddress: string;
  customerMail: string;
  customerCardNumber: number;
  isFirstTimeCustomer: boolean;
}

// la commande - c'est à dire l'équivalent du panier + infos

export class Order {
  clothings: Array<Clothing>;
  // quantity: number; inutile parce c'est la taille de mon tableau de clothing
  number: number;
  customer: Customer;

  deliveryTime: number;

  totalPrice: number;

  constructor() {
    this.clothings = new Array(); // initialize le tableau
    this.number = Math.random(); // numéro aléatoire
    this.deliveryTime = 0;
    this.totalPrice = 0;
  }

  // parcours mon tableau et additionne le prix
  computeTotalPrice() {
    this.totalPrice = 0;
    for (let fringue of this.clothings) {
      //console.log("prix = ", fringue.price);
      this.totalPrice += fringue.price;
    }
  }

  //@todo Pierre : à coder
  // parcours mon tableau et additionne le deliveryTime
  computeTotalDeliveryTime() {}
}
