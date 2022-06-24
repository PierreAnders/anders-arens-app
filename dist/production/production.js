"use strict";
// le developpeur "production" déclare les références de produits
// Il déclare le stock
Object.defineProperty(exports, "__esModule", { value: true });
exports.getStock = exports.marbellaBlackLStock = exports.marbellaBlackMStock = exports.marbellaBlackSStock = exports.marbellaBlackL = exports.marbellaBlackM = exports.marbellaBlackS = void 0;
const library_1 = require("../library/library");
// Je déclare les produits de la collection Anders Arens
exports.marbellaBlackS = new library_1.Clothing();
exports.marbellaBlackS.ref = "MAM18BK-S";
exports.marbellaBlackS.name = "Marbella Black S";
exports.marbellaBlackS.style = "Marbella";
exports.marbellaBlackS.color = "Black";
exports.marbellaBlackS.size = "S";
exports.marbellaBlackS.price = 115;
//marbellaBlackS.shippingTime = 2;
//marbellaBlackS.productionDelay = 7;
exports.marbellaBlackM = new library_1.Clothing();
exports.marbellaBlackM.ref = "MAM18BK-M";
exports.marbellaBlackM.name = "Marbella Black M";
exports.marbellaBlackM.style = "Marbella";
exports.marbellaBlackM.color = "Black";
exports.marbellaBlackM.size = "M";
exports.marbellaBlackM.price = 115;
//marbellaBlackM.shippingTime = 2;
//marbellaBlackM.productionDelay = 0;
exports.marbellaBlackL = new library_1.Clothing();
exports.marbellaBlackL.ref = "MAM18BK-L";
exports.marbellaBlackL.name = 'Marbella Black L';
exports.marbellaBlackL.style = 'Marbella';
exports.marbellaBlackL.color = 'Black';
exports.marbellaBlackL.size = 'L';
exports.marbellaBlackL.price = 115;
//marbellaBlackL.shippingTime = 2;
//marbellaBlackL.productionDelay = 7;
// Je déclare le stock de produits
exports.marbellaBlackSStock = new library_1.Stock();
exports.marbellaBlackSStock.reference = exports.marbellaBlackS;
exports.marbellaBlackSStock.quantity = 0;
exports.marbellaBlackMStock = new library_1.Stock();
exports.marbellaBlackMStock.reference = exports.marbellaBlackM;
exports.marbellaBlackMStock.quantity = 1;
exports.marbellaBlackLStock = new library_1.Stock();
exports.marbellaBlackLStock.reference = exports.marbellaBlackL;
exports.marbellaBlackLStock.quantity = 0;
// Je crée une fonction pour obtenir le stock
function getStock(stock) {
    return stock.reference.name + ": " + stock.quantity;
}
exports.getStock = getStock;
