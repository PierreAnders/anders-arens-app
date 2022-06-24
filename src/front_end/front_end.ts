// le developpeur "front_end" se charge d'obtenir les informations des clients
// Il se charge d'obtenir les informations des commandes

import {Order, Customer} from "../library/library"
import {marbellaBlackL, marbellaBlackM} from "../production/production"

// (J'importe les informations client de l'interface uilisateur)
// Je déclare les clients pour exporter leurs informations

export let guillaumeBourda = new Customer()
guillaumeBourda.customerFirstName = "Guillaume"
guillaumeBourda.customerLastName = "Bourda"
guillaumeBourda.customerAddress = "25 rue Paul Gelos, 64500 Saint Jean de Luz, France"
guillaumeBourda.customerMail = "gbourda@rugbycentric.com"
guillaumeBourda.customerCardNumber = 4397720003099030
guillaumeBourda.isFirstTimeCustomer = true

export let pierreUntas = new Customer()
pierreUntas.customerFirstName = "Pierre"
pierreUntas.customerLastName = "Untas"
pierreUntas.customerAddress = "88 rue Lagrange, 33000 Bordeaux, France"
pierreUntas.customerMail = "pierre.untas@gmail.com"
pierreUntas.customerCardNumber = 4397720003099031
pierreUntas.isFirstTimeCustomer = false

// (j'importe les commandes de l'interface utilisateur)
// Je déclare les commandes pour exporter leurs informations

export let guillaumeBourdaOrder = new Order()
guillaumeBourdaOrder.clothing = marbellaBlackM
guillaumeBourdaOrder.quantity = 1
guillaumeBourdaOrder.number = 101
guillaumeBourdaOrder.customer = guillaumeBourda

export let pierreUntasOrder = new Order()
pierreUntasOrder.clothing = marbellaBlackL
pierreUntasOrder.quantity = 1
pierreUntasOrder.number = 102
pierreUntasOrder.customer = pierreUntas

// Je crée une fonction pour obtenir les commandes

export function getOrder(order: Order){
    console.log(`${order.customer.customerFirstName} ${order.customer.customerLastName}: ${order.clothing.name}, quantity: ${order.quantity}, order number: ${order.number}`)
}
