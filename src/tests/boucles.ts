export function startTest() {
  console.log("@@@@@@@@@  Tests sur les boucles @@@@@@@@@@@\n\n");

  /*---------------------------------
    Faire  une boucle Nb fois
    ------------------------------*/
  const nb = 3;
  let count = 0;

  for (let i = 0; i < nb; i++) {
    console.log("i= ", i);
    count += 1; // j'incrément count de 1
  }

  console.log("nombre de boucles (count)= ", count);

  console.log("\n\n");

  /*---------------------------------
    boucle sur les éléments d'un tableau


    passer d'un elément à un autre d'un tableau, du début à la fin, s'appelle "parcourir" le tableau



    ------------------------------*/

  const monTableau = ["a", "b", "c"];

  // je vais de i=0 à i<3  -----> 0, 1, 2
  for (let i = 0; i < monTableau.length; i++) {
    console.log("index =  %s valeur = %s", i, monTableau[i]); // j'utilise l'index de mon tableau (i)
  }

  console.log("\n\n");

  // je parcours mon tableau et à chaque boucle, j'assigne la valeur de l'élément du tablaeau à une variable que j'appelle 'elt'
  for (let elt of monTableau) {
    console.log("element = ", elt);
  }

  console.log("\n\n");
}
