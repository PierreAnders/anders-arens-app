import {AddMarbellaBlackS, AddMarbellaBlackM, AddMarbellaBlackL, getStock} from "./production/production"
import {AddToCart, getOrder, guillaumeBourda, guillaumeBourdaOrder, pierreUntas, pierreUntasOrder } from "./front_end/front_end"
import {getShipping, getDeliveryTime} from "./shipping/shipping"
/*import {Clothing} from "./library/library"*/

console.log("\n")

console.log("-------------------------------------------------------------")
console.log("               WELCOME IN ANDERS ARENS' APP                  ")
console.log("-------------------------------------------------------------")

console.log("\n")
console.log("------------------ Here is our catalogue: -------------------")
console.log("\n")

console.log(`${AddMarbellaBlackS().style} ${AddMarbellaBlackS().color} ${AddMarbellaBlackS().size}, €${AddMarbellaBlackS().price}, delivery delay: ${(getDeliveryTime([AddMarbellaBlackS()]))} days`)
console.log(`${AddMarbellaBlackM().style} ${AddMarbellaBlackM().color} ${AddMarbellaBlackM().size}, €${AddMarbellaBlackM().price}, delivery delay: ${(getDeliveryTime([AddMarbellaBlackM()]))} days`)
console.log(`${AddMarbellaBlackL().style} ${AddMarbellaBlackL().color} ${AddMarbellaBlackL().size}, €${AddMarbellaBlackL().price}, delivery delay: ${(getDeliveryTime([AddMarbellaBlackL()]))} days`)

console.log("\n")
console.log("----------------- Here are our orders: ---------------------")
console.log("\n")

getOrder(guillaumeBourdaOrder)
getOrder(pierreUntasOrder)

console.log("\n")
console.log("----------------- Here are our stock: ---------------------")
console.log("\n")

console.log(getStock(AddMarbellaBlackS()))
console.log(getStock(AddMarbellaBlackM()))
console.log(getStock(AddMarbellaBlackL()))

console.log("\n")
console.log("------------- Here are our delivery informations: -----------")
console.log("\n")

getShipping(guillaumeBourdaOrder, guillaumeBourda)
getShipping(pierreUntasOrder, pierreUntas)

AddToCart(guillaumeBourdaOrder)

console.log("\n")
console.log("-------------------------------------------------------------")
console.log("\n")