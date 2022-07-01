export function startTest() {
  console.log("Tests sur les tableaux \n\n");

  const monTableauDeString = ["a", "b", "c"];
  // console.log("mon tableau de string: ", monTableau);
  // console.log("la taille de mon tableau = ", monTableau.length);
  // console.log("la valeur de l'index 0 ", monTableau[0]);
  // console.log("la valeur de l'index 1 ", monTableau[1]);
  afficherInfosTableau("string", monTableauDeString);

  const monTableauDeNombre = [10, 20, 30];
  // console.log("mon tableau de numbers: ", monTableauDeNombre);
  // console.log("la taille de mon tableau = ", monTableauDeNombre.length);
  // console.log("la valeur de l'index 0 ", monTableauDeNombre[0]);
  // console.log("la valeur de l'index 1 ", monTableauDeNombre[1]);
  // console.log("la valeur de l'index 1 ", monTableauDeNombre[2]);
  afficherInfosTableau("nombres", monTableauDeNombre);

  const monTableauDePojo = [
    { val: "hola" },
    { val: "hello" },
    { val: "salut" },
  ];
  // console.log("mon tableau de numbers: ", monTableauDePojo);
  // console.log("la taille de mon tableau = ", monTableauDePojo.length);
  // console.log("la valeur de l'index 0 ", monTableauDePojo[0]);
  // console.log("la valeur de l'index 1 ", monTableauDePojo[1]);
  // console.log("la valeur de l'index 1 ", monTableauDePojo[2]);
  afficherInfosTableau("pojos", monTableauDePojo);

  class Vehicule {
    color: string;
    speed: number;

    numero: number;

    constructor(color: string, speed: number, numero: number) {
      this.color = color;
      this.speed = speed;
      this.numero = numero;
    }
  }

  let maCaisse = new Vehicule("rouge", 100, 1);

  const vehicules = [
    maCaisse,
    new Vehicule("vert", 200, 2),
    new Vehicule("jaune", 60, 3),
    new Vehicule("jaune", 60, 4),
  ];

  // intéressant à noter: pour accéder à mon premier objet j'ai deux choix:
  console.log("numéro premier vehicule ", maCaisse.numero); // ma variable maCaisse
  console.log("numéro premier vehicule ", vehicules[0].numero); // ou retrouver mon objet avec sa place dans le tableau: vehicules[0]

  afficherInfosTableau("vehicule", vehicules);

  // push : ajouter 1 élement
  monTableauDePojo.push({ val: "tata" });

  // map

  //Filter : deux opérateurs sur les tableaux
}

// Fonction d'affichage des infos du tableau
// paramètre 1: une string
// paramètre 2: un tableau de n'importe quel type (any)
function afficherInfosTableau(nom: string, tableau: Array<any>) {
  console.log("mon tableau de %s : ", nom, tableau);
  console.log("la taille de mon tableau = ", tableau.length);
  console.log("la valeur de l'index 0 ", tableau[0]);
  console.log("la valeur de l'index 1 ", tableau[1]);
  console.log("la valeur de l'index 1 ", tableau[2]);
  console.log("\n \n");
}
