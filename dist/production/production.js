"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getStock = exports.AddMarbellaBlackL = exports.AddMarbellaBlackM = exports.AddMarbellaBlackS = void 0;
const library_1 = require("../library/library");
function AddMarbellaBlackS() {
    var marbellaBlackS = new library_1.Clothing();
    marbellaBlackS.ref = "MAM18BK-S";
    marbellaBlackS.name = ["Marbella Black S"];
    marbellaBlackS.style = "Marbella";
    marbellaBlackS.color = "Black";
    marbellaBlackS.size = "S";
    marbellaBlackS.ref = "MAM18BK-S";
    marbellaBlackS.price = 115;
    marbellaBlackS.stock = 0;
    return marbellaBlackS;
}
exports.AddMarbellaBlackS = AddMarbellaBlackS;
function AddMarbellaBlackM() {
    var marbellaBlackM = new library_1.Clothing();
    marbellaBlackM.name = ["Marbella Black M"];
    marbellaBlackM.style = "Marbella";
    marbellaBlackM.color = "Black";
    marbellaBlackM.size = "M";
    marbellaBlackM.ref = "MAM18BK-M";
    marbellaBlackM.price = 115;
    marbellaBlackM.stock = 2;
    return marbellaBlackM;
}
exports.AddMarbellaBlackM = AddMarbellaBlackM;
function AddMarbellaBlackL() {
    var marbellaBlackL = new library_1.Clothing();
    marbellaBlackL.name = ["Marbella Black L"];
    marbellaBlackL.style = "Marbella";
    marbellaBlackL.color = "Black";
    marbellaBlackL.size = "L";
    marbellaBlackL.ref = "MAM18BK-L";
    marbellaBlackL.price = 115;
    marbellaBlackL.stock = 0;
    return marbellaBlackL;
}
exports.AddMarbellaBlackL = AddMarbellaBlackL;
function getStock(clothing) {
    return clothing.name + ": " + clothing.stock;
}
exports.getStock = getStock;
