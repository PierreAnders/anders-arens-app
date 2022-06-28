// le developpeur "front_end" se charge d'obtenir les informations des clients
// Il se charge d'obtenir les informations des commandes

import {Order, Customer, Clothing } from "../library/library"
import { AddMarbellaBlackS, AddMarbellaBlackM, AddMarbellaBlackL} from "../production/production"


// (J'importe les informations client de l'interface uilisateur)
// Je déclare les clients pour exporter leurs informations

export var guillaumeBourda = new Customer()
guillaumeBourda.customerFirstName = "Guillaume"
guillaumeBourda.customerLastName = "Bourda"
guillaumeBourda.customerAddress = "25 rue Paul Gelos, 64500 Saint Jean de Luz, France"
guillaumeBourda.customerMail = "gbourda@rugbycentric.com"
guillaumeBourda.customerCardNumber = 4397720003099030
guillaumeBourda.isFirstTimeCustomer = true

export var pierreUntas = new Customer()
pierreUntas.customerFirstName = "Pierre"
pierreUntas.customerLastName = "Untas"
pierreUntas.customerAddress = "88 rue Lagrange, 33000 Bordeaux, France"
pierreUntas.customerMail = "pierre.untas@gmail.com"
pierreUntas.customerCardNumber = 4397720003099031
pierreUntas.isFirstTimeCustomer = false

// (j'importe les commandes de l'interface utilisateur)
// Je déclare les commandes pour exporter leurs informations

export const guillaumeBourdaOrder = new Order()
guillaumeBourdaOrder.clothing = AddMarbellaBlackS()
guillaumeBourdaOrder.quantity = 1
guillaumeBourdaOrder.number = 101
guillaumeBourdaOrder.customer = guillaumeBourda

export const pierreUntasOrder = new Order()
pierreUntasOrder.clothing = AddMarbellaBlackL()
pierreUntasOrder.quantity = 1
pierreUntasOrder.number = 102
pierreUntasOrder.customer = pierreUntas

// Je crée une fonction pour obtenir les commandes

export function getOrder(order: Order){
    console.log(`${order.customer.customerFirstName} ${order.customer.customerLastName}: ${order.clothing.name}, quantity: ${order.quantity}, order number: ${order.number}`)
}

// Je crée un fonction pour ajouter les produits au panier

export function AddToCart(order: Order) {
    var names: Array<Clothing> = [];

    for (let clothing of order.clothing.name){
        if (clothing == "Marbella Black S"){
        let name = AddMarbellaBlackS();
        names.push(name);
    } else if (clothing == "Marbella Black M"){
        let name = AddMarbellaBlackM();
        names.push(name);
    } else (clothing == "Marbella Black L");{
        let name = AddMarbellaBlackL();
        names.push(name);
    }
}
    ServeOrder(order.number, names);
}

export function ServeOrder(
    orderNumber: number,
    clothing: Array<Clothing>,
) {
console.log("Voici votre commande numéro: ", orderNumber);

var price = 0;

for (let clothe of clothing){
    console.log("1", clothe.name);
    price += clothe.price;
}
 console.log("Total : ", price)
}
