console.log("Ici commence le javascript ... enfin on programme");

// cette fonction récupère un élément de la page HTML et change son contenu HTML
function displaySubtitle() {
  const number = Math.random();
  const subtitle = "ceci est un title " + number;
  console.log("displaySubtitle", subtitle);
  // javascript accède à ton DOM (document objec model) - cad tous les éleméts de ta page HTML
  // ici on cherche l'élémlent qui a l'id "subtitle" et on lui change son contenu HTML
  document.getElementById("subtitle").innerHTML = subtitle;
}

function displayMessage() {
  console.log("ceci est un message dans la console");
}

function changeMessage(msg) {
  document.getElementById("message").innerHTML = msg;
}

// const variable = "new york";
// document.getElementById("message").innerHTML = variable;
changeMessage("ceci est un message");

/**
 A chercher: 

 - le DOM

 
 */

function validate() {
  const value = document.getElementById("input1").value;
  console.log("value de l'input = ", value);
  changeMessage(value);
}

var products = [
  {
    price: 10,
    name: "marbella",
  },
  {
    price: 12,
    name: "ilbaritz",
  },
];

function displayProducts() {
  for (var i = 0; i < products.length; i++) {
    var product = products[i];

    var text = document.createTextNode(
      "name = " + product.name + " price = " + product.price + " "
    );

    document.getElementById("list").appendChild(text);
  }
}
