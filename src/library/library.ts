
export class Clothing {
	name : Array<string>;
	style : string;
	color : string;
	size : string;
	ref : string;
	price : number;
	stock : number
	deliveryTime : number
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