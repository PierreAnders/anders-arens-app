import {marbellaBlackS, marbellaBlackM, marbellaBlackL, getStock, marbellaBlackSStock, marbellaBlackMStock, marbellaBlackLStock} from "./production/production"
import {getOrder, guillaumeBourda, guillaumeBourdaOrder, pierreUntas, pierreUntasOrder } from "./front_end/front_end"
import {getShipping} from "./shipping/shipping"

console.log("\n")

console.log("-------------------------------------------------------------")
console.log("               WELCOME IN ANDERS ARENS' APP                  ")
console.log("-------------------------------------------------------------")

console.log("\n")
console.log("------------------ Here is our catalogue: -------------------")
console.log("\n")

console.log(`${marbellaBlackS.style} ${marbellaBlackS.color} ${marbellaBlackS.size}, €${marbellaBlackS.price}, delivery delay: ${marbellaBlackS.getDeliveryDelay()} days`)
console.log(`${marbellaBlackM.style} ${marbellaBlackM.color} ${marbellaBlackM.size}, €${marbellaBlackM.price}, delivery delay: ${marbellaBlackM.getDeliveryDelay()} days`)
console.log(`${marbellaBlackL.style} ${marbellaBlackL.color} ${marbellaBlackL.size}, €${marbellaBlackL.price}, delivery delay: ${marbellaBlackL.getDeliveryDelay()} days`)

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