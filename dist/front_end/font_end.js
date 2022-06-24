"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.frontEnd = void 0;
const library_1 = require("../library");
//import { shipping } from "../shipping/shipping";
const production_1 = require("../production/production");
function frontEnd() {
    console.log("Hello I am the front-end");
    let marbellaBlackS = new library_1.Clothing();
    marbellaBlackS.name = 'Marbella Black S';
    console.log("Ref: ", marbellaBlackS.name);
    let marbellaBlackM = new library_1.Clothing();
    marbellaBlackM.name = 'Marbella Black M';
    console.log("Ref: ", marbellaBlackM.name);
    let marbellaBlackL = new library_1.Clothing();
    marbellaBlackL.name = 'Marbella Black L';
    console.log("Ref: ", marbellaBlackL.name);
}
exports.frontEnd = frontEnd;
(0, production_1.production)();
//shipping()
function takeOrder(order) {
    let name = ;
}
