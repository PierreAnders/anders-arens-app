export function startTest() {
  console.log("Tests sur les fonctions \n");

  // ------------------------------------------------------------------------
  //
  //          Comment marchent les fonctions
  //
  //---------------------------------------------------------------------------

  /*
  0.  le nommage des paramètres d'entrées d'une fonction ont rien à voir avec le nom des variables qu'on passe lors de l'appel
*/

  // ici ma fonction est faite pour recevoir un paramètre de type string
  // elle décide de l'appeler 'name'
  // dans son scope elle accedera à ce paramètre via le nom 'name'

  function hello(name: string) {
    console.log("salut : ", name);
  }

  let monNom = "francis";
  let name = "john";
  let maVariable = "toto";

  hello(monNom);
  hello(name);
  hello(maVariable);
  hello("batman");

  /*
    1. on appelle une fonction pour quelle fasse un taff
*/
  function taff() {
    console.log("je fais mon taff (dans une fonction)");
  }

  // j'appelle la fonction pour qu'elle fasse un taff
  taff();

  /*
      2. l'intérêt d'une fonction c'est que je peux l'appeler autant de fois que je veux
  */

  // ici mon taff sera fait 3 fois
  for (let i = 0; i < 3; i++) {
    taff();
  }

  // équivalent sans fonction :
  // console.log("je fais mon taff (sans fonction)");
  // console.log("je fais mon taff (sans fonction)");
  // console.log("je fais mon taff (sans fonction)");

  /*
      3. on peut passer des paramètre à une fonction
  */
  function garage(vehicule) {
    console.log("je répare");
    vehicule.reparations += 1; // incrémente le nombre de réparations
  }

  let vehicule = {
    reparations: 0,
  };
  for (let i = 0; i < 3; i++) {
    garage(vehicule);
  }
  console.log("nombre de réparations = ", vehicule.reparations);

  // ------------------------------------------------------------------------
  //
  //         Le passage de variables à des fonctions
  //
  //---------------------------------------------------------------------------
  // note: même comportement pour des methodes de classe (puisqu'une méthode c'est une fonction dans une classe)
  /*   
  
      - les variables "simples" (number, string, boolean, etc.) sont passées par copie
      - les objet (pojo ou objet de classe) sont passé par référence
  
  */

  /*
      ici ma fonction attends un paramètre de type number, l'incrément de 1 et renvoie la valeur incrémenté
      !!! le paramètre recu ici est une copie de la variable initiale
  */
  function increment(valeur: number): number {
    valeur += 1;
    return valeur;
  }

  let nb1 = 10;
  increment(nb1); // ici j'appelle ma fonction, je lui passe ma variable "nombre" mais je récupère pas la valeur de retour
  console.log("nombre ", nb1); //= 10

  let nb2 = 10;
  nb2 = increment(nb2); // ici je récupère la valeur de retour en la stockant dans ma variable initiale
  console.log("nombre ", nb2); //= 11

  //-------------------------------  passage des objets par référence ---------------------------------------
  // !!!! avec des objet c'est la référence de l'objet qui est passée
  // ici pas besoin de récupérer l'objet en retour, puisqu'il est passé par référence (cad son addresse en mémoire)
  // du coup, toute modification de l'objet dans la fonction est appliquée sur l'objet initial passé en paramètre
  function incrementObjet(obj) {
    obj.valeur += 1;
  }

  // test avec un pojo
  let pojo = {
    valeur: 10,
  };

  incrementObjet(pojo);
  console.log("pojo valeur ", pojo.valeur); // 11

  class MaClass {
    valeur: number;
    constructor(val) {
      this.valeur = val;
    }
  }
  let obj = new MaClass(100);
  incrementObjet(obj);
  console.log("pojo valeur ", obj.valeur); // 101

  /* ------------------------------------------------------------------
   *     Le scope d'une fonction !!
   * ------------------------------------------------------------------*/

  /* ------------------------------------------------------------------
   *     les fonctions inline
   * ------------------------------------------------------------------*/

  console.log("\n \n");
  console.log ("// ----------------------------------------")
  console.log ("// ----------------------------------------")
  console.log("\n \n")


  function whatsUp(men: string){
    console.log("What's up %s ?", men)
  }
  
  let man = "John";
  let man2 = "Fred";
  let man3 = "Alfred";
  
  whatsUp(man);
  whatsUp(man2);
  whatsUp(man3);


console.log("\n \n");
console.log ("// ----------------------------------------")
console.log ("// ----------------------------------------")
console.log("\n \n")


function test(x : string){
  console.log(x)
}

let a = "b"

for (let i = 0; i < 3; i++) {
  test(a);
}

console.log("\n \n");
console.log ("// ----------------------------------------")
console.log ("// ----------------------------------------")
console.log("\n \n");

function sell(shitcoin) {
  console.log("I sell ");
  shitcoin.tokens += 1;
}

let shitcoin = {
  tokens: 0,
};

for (let i = 0; i < 3; i++) {
  sell(shitcoin);
}
console.log("I sell %s times ", shitcoin.tokens);


console.log("\n \n");
console.log ("// ----------------------------------------")
console.log ("// ----------------------------------------")
console.log("\n \n");


function addByOne(tokens: number): number {
  tokens += 1;
  return tokens;
}

let tokenA = 10;
addByOne(tokenA); 
console.log("tokens ", tokenA);

let tokenB = 10;
tokenB = addByOne(tokenB);
console.log("tokens ", tokenB); 


console.log("\n \n");
console.log ("// ----------------------------------------")
console.log ("// ----------------------------------------")
console.log("\n \n");

  function incrementCoins(bitcoin) {
    bitcoin.token +=2;
  }

  class Coins{
    token: number;
    constructor(value) {
      this.token = value;
    }
  }
    let bitcoin = new Coins(19);
    incrementCoins(bitcoin);
    console.log("number of bitcoins: ", bitcoin.token);
  

}