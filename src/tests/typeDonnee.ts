export function startTest() {
  console.log("Tests sur les types de données");

  // ------------------------------------------------
  // ------------ Les POJO (plain javascript objects) ------------
  //
  // stocké en mémoire presque commen un objet de classe
  // ------------------------------------------------
  let bart = {
    firstName: "Bart",
    lastName: "Simpsons",
    age: 18,
  };

  console.log("un pojo : ", bart);
}
