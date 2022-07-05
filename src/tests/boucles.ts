export function startTest() {
  
  console.log("\n\n");

  console.log("======= Training on loops =======\n\n");

// ===============================
// Faire une boucle number de fois
// ===============================

  const number = 3;
  let count = 0;

  for (let i = 0; i < number; i++) {
    console.log("i= ", i);
    count += 1; // j'incrément count de 1
  }

  console.log("number of loops (count)= ", count);

  console.log("\n\n");

// ===================================================
// boucle sur les éléments d'un tableau
// passer d'un elément à un autre d'un tableau, 
// du début à la fin, s'appelle "parcourir" le tableau
// ===================================================

  const myArray = ["a", "b", "c"];

  // je vais de i=0 à i<3  -----> 0, 1, 2
  for (let i = 0; i < myArray.length; i++) {
    console.log("index = %s value = %s", i, myArray[i]); 
    // j'utilise l'index de mon tableau (i)
  }

  console.log("\n\n");

// =========================================
// je parcours mon tableau et à chaque boucle, 
// j'assigne la valeur de l'élément du tablaeau 
// à une variable que j'appelle 'element'
// =========================================

  for (let element of myArray) {
    console.log("element = ", element);
  }

  console.log("\n\n");


  // ----------------------------------------
  // ----------------------------------------

  
  const bitcoin = 21;
  let myBitcoin = 0;

  for (let i=0; i<bitcoin; i++){
  myBitcoin += 1;
  console.log (myBitcoin);
  }

  const myBlockchain = ['one', 'two', 'three', 'four', 'five']

  for (let i=0; i<myBlockchain.length; i++){
  console.log(myBlockchain[i])
  }

  for (let block of myBlockchain){
  console.log(block)
  }

}
