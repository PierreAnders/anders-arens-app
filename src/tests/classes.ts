export function startTest() {
  console.log("Tests sur les classes \n\n");

  class Person {
    name: string;
    age: number;

    constructor(firstName: string, lastName: string, age: number) {
      this.name = firstName + " " + lastName;
      this.age = age;
      console.log("*constructeur de %s*", lastName);
    }
  }

  // ici je crée 2 fois une personne Slater
  hello(new Person("Kelly", "Slater", 50));
  coucou(new Person("Kelly", "Slater", 50));

  // ici je crée 1 fois une personne Cabrel : beaucoup plus efficace !!
  let john = new Person("Francis", "Cabrel", 20);
  hello(john);
  coucou(john);

  function hello(person: Person) {
    console.log("Hello %s\n", person.name);
  }

  function coucou(person: Person) {
    console.log("Coucou %s you are %d old \n\n", person.name, person.age);
  }


  
}
