import { Clothing } from "../library/library";

export function AddMarbellaBlackS(): Clothing{
    var marbellaBlackS = new Clothing();
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
export function AddMarbellaBlackM(): Clothing{
    var marbellaBlackM = new Clothing();   
    marbellaBlackM.name = ["Marbella Black M"];
    marbellaBlackM.style = "Marbella";
    marbellaBlackM.color = "Black";
    marbellaBlackM.size = "M";
    marbellaBlackM.ref = "MAM18BK-M";
    marbellaBlackM.price = 115;
    marbellaBlackM.stock = 2;
    return marbellaBlackM
}

export function AddMarbellaBlackL(): Clothing{
    var marbellaBlackL = new Clothing();
    marbellaBlackL.name = ["Marbella Black L"];
    marbellaBlackL.style = "Marbella";
    marbellaBlackL.color = "Black";
    marbellaBlackL.size = "L";
    marbellaBlackL.ref = "MAM18BK-L";
    marbellaBlackL.price = 115;
    marbellaBlackL.stock = 0;
    return marbellaBlackL
}

export function getStock(clothing: Clothing) {
    return clothing.name + ": " + clothing.stock
}



