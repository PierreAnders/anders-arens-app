import { startTest as fonctions } from "./fonctions";
import { startTest as variables } from "./variables";
import { startTest as classes } from "./classes";
import { startTest as tableaux } from "./tableaux";
import { startTest as typage } from "./typeDonnee";
import { startTest as boucles } from "./boucles";

/*

@todo Pierre :  rendre tous les fichiers bien lisibles avec des commentaires mieux foutus 
  -section
  -titres
  -sous-titres

*/

// CHOIX_DE_TEST est un type enum construit sur mesure que l'on crée
enum CHOIX_DE_TEST {
  BOUCLES,
  CLASSES,

  FONCTIONS,
  TABLEAUX,

  TYPAGE,

  VARIABLES,
}

// !!!!!!!!! @todo pierre c'est ici que je change la valeur !!!!!!!!!!!!!
// ici je choisis une valeur de type CHOIX_DE_TEST
const monChoix: CHOIX_DE_TEST = CHOIX_DE_TEST.CLASSES;

// ici je fais un switch
// c'est à dire selon la valeur reçue dans le switch j'execute une fonction différente et je quitte (break)
switch (Number(monChoix)) {
  case CHOIX_DE_TEST.FONCTIONS:
    fonctions();
    break;

  case CHOIX_DE_TEST.VARIABLES:
    variables();
    break;

  case CHOIX_DE_TEST.BOUCLES:
    boucles();
    break;

  case CHOIX_DE_TEST.TABLEAUX:
    tableaux();
    break;

  case CHOIX_DE_TEST.TYPAGE:
    typage();
    break;

  case CHOIX_DE_TEST.CLASSES:
    classes();
    break;

  default:
    console.log("choix non valide");
}
