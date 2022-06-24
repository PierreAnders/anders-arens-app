import {marbellaBlackS, marbellaBlackM, marbellaBlackL, getStock, marbellaBlackSStock, marbellaBlackMStock, marbellaBlackLStock} from "./production/production"
import {getOrder, guillaumeBourda, guillaumeBourdaOrder, pierreUntas, pierreUntasOrder } from "./front_end/front_end"
import {getShipping, deliveryTime} from "./shipping/shipping"

console.log("\n")

console.log("-------------------------------------------------------------")
console.log("               WELCOME IN ANDERS ARENS' APP                  ")
console.log("-------------------------------------------------------------")

console.log("\n")
console.log("------------------ Here is our catalogue: -------------------")
console.log("\n")

deliveryTime(marbellaBlackSStock)
deliveryTime(marbellaBlackMStock)
deliveryTime(marbellaBlackLStock)

console.log(`${marbellaBlackS.style} ${marbellaBlackS.color} ${marbellaBlackS.size}, €${marbellaBlackS.price}, delivery delay: ${marbellaBlackSStock.timeToShip} days`)
console.log(`${marbellaBlackM.style} ${marbellaBlackM.color} ${marbellaBlackM.size}, €${marbellaBlackM.price}, delivery delay: ${marbellaBlackMStock.timeToShip} days`)
console.log(`${marbellaBlackL.style} ${marbellaBlackL.color} ${marbellaBlackL.size}, €${marbellaBlackL.price}, delivery delay: ${marbellaBlackLStock.timeToShip} days`)

console.log("\n")
console.log("----------------- Here are our orders: ---------------------")
console.log("\n")

getOrder(guillaumeBourdaOrder)
getOrder(pierreUntasOrder)

console.log("\n")
console.log("----------------- Here are our stock: ---------------------")
console.log("\n")

console.log(getStock(marbellaBlackSStock))
console.log(getStock(marbellaBlackMStock))
console.log(getStock(marbellaBlackLStock))


console.log("\n")
console.log("------------- Here are our delivery informations: -----------")
console.log("\n")

getShipping(guillaumeBourdaOrder, guillaumeBourda)
getShipping(pierreUntasOrder, pierreUntas)

console.log("\n")
console.log("-------------------------------------------------------------")
console.log("\n")