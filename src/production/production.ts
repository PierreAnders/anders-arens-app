
import { Clothing } from "../library/library";

export function makeMarbella(color: string, size: string): Clothing {
  
  var marbella = new Clothing();

    marbella.style = "Marbella";

    marbella.color = color;

    if ("medium" === size) {
    marbella.size = "M";
    } else if ("large" === size) {
    marbella.size = "L";
    } else if ("small" === size) {
    marbella.size = "S";
    }

    marbella.price = 115;

    computeReference(marbella);

    return marbella;
}

function computeReference(clothing: Clothing) {

  if (clothing.style == "Marbella") {
    clothing.ref = "MAM18";

  if (clothing.color == "Black") {
      clothing.ref += "BK";
  }
  clothing.ref += "-" + clothing.size;
  }

}
