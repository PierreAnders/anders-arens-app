// le developpeur "production" déclare les références de produits
// Il déclare le stock

import { Clothing , Stock } from "../library/library";

// Je déclare les produits de la collection Anders Arens

export let marbellaBlackS = new Clothing();
    marbellaBlackS.ref = "MAM18BK-S";
    marbellaBlackS.name = "Marbella Black S";
    marbellaBlackS.style = "Marbella";
    marbellaBlackS.color = "Black";
    marbellaBlackS.size = "S";
    marbellaBlackS.price = 115;
    marbellaBlackS.shippingTime = 2;
    marbellaBlackS.productionDelay = 7;

export let marbellaBlackM = new Clothing();
    marbellaBlackM.ref = "MAM18BK-M";   
    marbellaBlackM.name = "Marbella Black M";
    marbellaBlackM.style = "Marbella";
    marbellaBlackM.color = "Black";
    marbellaBlackM.size = "M";
    marbellaBlackM.price = 115;
    marbellaBlackM.shippingTime = 2;
    marbellaBlackM.productionDelay = 0;

export let marbellaBlackL = new Clothing();
    marbellaBlackL.ref = "MAM18BK-L";
    marbellaBlackL.name = 'Marbella Black L';
    marbellaBlackL.style = 'Marbella';
    marbellaBlackL.color = 'Black';
    marbellaBlackL.size = 'L';
    marbellaBlackL.price = 115;
    marbellaBlackL.shippingTime = 2;
    marbellaBlackL.productionDelay = 7;

// Je déclare le stock de produits

export let marbellaBlackSStock = new Stock();
    marbellaBlackSStock.reference = marbellaBlackS;
    marbellaBlackSStock.quantity = 0;

export let marbellaBlackMStock = new Stock();
    marbellaBlackMStock.reference = marbellaBlackM;
    marbellaBlackMStock.quantity = 1;

export let marbellaBlackLStock = new Stock();
    marbellaBlackLStock.reference = marbellaBlackL;
    marbellaBlackLStock.quantity = 0;

// Je crée une fonction pour obtenir le stock

export function getStock (stock: Stock) {
    return stock.reference.name + ": " + stock.quantity
}



