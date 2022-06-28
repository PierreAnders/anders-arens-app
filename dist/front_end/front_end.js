"use strict";
// le developpeur "front_end" se charge d'obtenir les informations des clients
// Il se charge d'obtenir les informations des commandes
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServeOrder = exports.AddToCart = exports.getOrder = exports.pierreUntasOrder = exports.guillaumeBourdaOrder = exports.pierreUntas = exports.guillaumeBourda = void 0;
const library_1 = require("../library/library");
const production_1 = require("../production/production");
// (J'importe les informations client de l'interface uilisateur)
// Je déclare les clients pour exporter leurs informations
exports.guillaumeBourda = new library_1.Customer();
exports.guillaumeBourda.customerFirstName = "Guillaume";
exports.guillaumeBourda.customerLastName = "Bourda";
exports.guillaumeBourda.customerAddress = "25 rue Paul Gelos, 64500 Saint Jean de Luz, France";
exports.guillaumeBourda.customerMail = "gbourda@rugbycentric.com";
exports.guillaumeBourda.customerCardNumber = 4397720003099030;
exports.guillaumeBourda.isFirstTimeCustomer = true;
exports.pierreUntas = new library_1.Customer();
exports.pierreUntas.customerFirstName = "Pierre";
exports.pierreUntas.customerLastName = "Untas";
exports.pierreUntas.customerAddress = "88 rue Lagrange, 33000 Bordeaux, France";
exports.pierreUntas.customerMail = "pierre.untas@gmail.com";
exports.pierreUntas.customerCardNumber = 4397720003099031;
exports.pierreUntas.isFirstTimeCustomer = false;
// (j'importe les commandes de l'interface utilisateur)
// Je déclare les commandes pour exporter leurs informations
exports.guillaumeBourdaOrder = new library_1.Order();
exports.guillaumeBourdaOrder.clothing = (0, production_1.AddMarbellaBlackS)();
exports.guillaumeBourdaOrder.quantity = 1;
exports.guillaumeBourdaOrder.number = 101;
exports.guillaumeBourdaOrder.customer = exports.guillaumeBourda;
exports.pierreUntasOrder = new library_1.Order();
exports.pierreUntasOrder.clothing = (0, production_1.AddMarbellaBlackL)();
exports.pierreUntasOrder.quantity = 1;
exports.pierreUntasOrder.number = 102;
exports.pierreUntasOrder.customer = exports.pierreUntas;
// Je crée une fonction pour obtenir les commandes
function getOrder(order) {
    console.log(`${order.customer.customerFirstName} ${order.customer.customerLastName}: ${order.clothing.name}, quantity: ${order.quantity}, order number: ${order.number}`);
}
exports.getOrder = getOrder;
// Je crée un fonction pour ajouter les produits au panier
function AddToCart(order) {
    var names = [];
    for (let clothing of order.clothing.name) {
        if (clothing == "Marbella Black S") {
            let name = (0, production_1.AddMarbellaBlackS)();
            names.push(name);
        }
        else if (clothing == "Marbella Black M") {
            let name = (0, production_1.AddMarbellaBlackM)();
            names.push(name);
        }
        else
            (clothing == "Marbella Black L");
        {
            let name = (0, production_1.AddMarbellaBlackL)();
            names.push(name);
        }
    }
    ServeOrder(order.number, names);
}
exports.AddToCart = AddToCart;
function ServeOrder(orderNumber, clothing) {
    console.log("Voici votre commande numéro: ", orderNumber);
    var price = 0;
    for (let clothe of clothing) {
        console.log("1", clothe.name);
        price += clothe.price;
    }
    console.log("Total : ", price);
}
exports.ServeOrder = ServeOrder;
