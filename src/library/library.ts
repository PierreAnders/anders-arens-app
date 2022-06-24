
// je crée des classes

export class Clothing {
	ref : string;
	name : string;
	style : string;
	color : string;
	size : string;
	price : number;
	shippingTime : number;
	productionDelay : number;
	getDeliveryDelay(): number {
	return this.shippingTime + this.productionDelay;
	}
}

export class Customer {
	customerFirstName : string;
	customerLastName : string;
	customerAddress : string;
	customerMail : string;
	customerCardNumber : number;
	isFirstTimeCustomer : boolean;
}

export class Order {
	clothing : Clothing;
	quantity : number;
	number : number;
	customer : Customer;
} 

export class Stock {
	reference : Clothing;
	quantity : number;
}