export function startTest() {
  console.log("\n");
  console.log("=====================================================\n");

  console.log("---------------------- ACCOUNTS ----------------------\n");

  class Token {
    name: string;
    number: number;
    address: string;
    wallet: string;
    coldStorage: boolean;
    rateInDollar: number;
    valueInDollar: number;

    constructor(
      name: string,
      number: number,
      address: string,
      wallet: string,
      coldStorage: boolean,
      rateInDollar: number
    ) {
      this.name = name;
      this.number = number;
      this.address = address;
      this.wallet = wallet;
      this.coldStorage = coldStorage;
      this.rateInDollar = rateInDollar;
      this.valueInDollar = Math.round(number * rateInDollar * 100) / 100;
    }
  }

  var ethereum = new Token(
    "ethereum",
    2.8061,
    "0x4A15301238b39572BB258576173fD2aCbC993088",
    "ledger",
    true,
    1120.29
  );

  var bitcoin = new Token(
    "bitcoin",
    0.009723,
    "bc1qz8f9qtcmsh2yg2frdn4zmv0qnlz484f8evpn6d",
    "ledger",
    true,
    19775
  );

  var ethereumClassic = new Token(
    "ethereum classic",
    2.9943,
    "0x4A15301238b39572BB258576173fD2aCbC993088",
    "ledger",
    true,
    14.79
  );

  var cronos = new Token(
    "cronos",
    1000,
    "cro1ptxv0f87z7hgcqyf43lzca9rdl30j8w8uddqhn",
    "ledger",
    true,
    0.1199
  );

  var cronosCryptoDotCom = new Token(
    "cronos on exchange",
    3024.29,
    "0xCa70cc7CB30275B7081C4D06733470895b1CD3e3",
    "crypto.com",
    false,
    0.1179
  );

  var ravencoinCryptoDotCom = new Token(
    "ravencoin on exchange",
    3064.16,
    "no address",
    "crypto.com",
    false,
    0.023478
  );

  var veChain = new Token(
    "veChain",
    5028.94,
    "0x924C495A2fF86f6C297a577a4aD17Ee59342ad3C",
    "sync via ledger",
    true,
    0.022579
  );

  var veThor = new Token(
    "veThor",
    4820,
    "0x50Ee8Fe6060A54101802d5753b4ff9E3115aeA26",
    "sync via ledger",
    true,
    0.001435
  );

  var Flux = new Token(
    "flux",
    306.9090368,
    "t1NaDPQAzECNWYCgyRnm1sbg189JGyyUkcJ",
    "zelcore",
    false,
    0.4339
  );

  var accounts = [
    ethereum,
    bitcoin,
    ethereumClassic,
    cronos,
    cronosCryptoDotCom,
    ravencoinCryptoDotCom,
    veChain,
    veThor,
    Flux,
  ];

  /////////////////////////////////////////////////////////////////////////

  console.log("===== ALL ACCOUNTS =====");

  console.log(accounts);

  console.log("\n");
  console.log("------------------------------------------------------\n");

  /////////////////////////////////////////////////////////////////////////

  console.log("===== SAFE ACCOUNTS =====");

  var safeAccounts = accounts.filter(function (account) {
    return account.coldStorage == true;
  });

  console.log(safeAccounts);

  console.log("\n");
  console.log("------------------------------------------------------\n");

  /////////////////////////////////////////////////////////////////////////

  console.log("===== UNSAFE ACCOUNTS =====");

  var unsafeAccounts = accounts.filter(function (account) {
    return account.coldStorage == false;
  });

  console.log(unsafeAccounts);

  console.log("\n");
  console.log("------------------------------------------------------\n");

  /////////////////////////////////////////////////////////////////////////

  console.log("===== TOTAL VALUE ACCOUNTS IN DOLLARS =====");

  // const totalValueAccounts = accounts.reduce((accumulator, obj) => {
  // return accumulator + obj.valueInDollar;}, 0);

  let totalValueAccounts = 0;

  for (let account of accounts) {
    totalValueAccounts += account.valueInDollar;
  }

  console.log(totalValueAccounts);

  console.log("\n");
  console.log("------------------------------------------------------\n");

  totalValueAccounts = 0; // on remet à 0

  for (let i = 0; i < accounts.length; i++) {
    totalValueAccounts += accounts[i].valueInDollar;
  }

  console.log(totalValueAccounts);

  console.log("\n");
  console.log("------------------------------------------------------\n");

  totalValueAccounts = 0; // on remet à 0

  accounts.map(function (account) {
    return (totalValueAccounts += account.valueInDollar);
  });

  console.log(totalValueAccounts);
}
/*
  /////////////////////////////////////////////////////////////////////////

  console.log("===== TOTAL VALUE SAFE ACCOUNTS IN DOLLARS =====");

  const totalValueSafeAccounts = safeAccounts.reduce((accumulator, obj) => {
    return Math.round((accumulator + obj.valueInDollar) * 100) / 100;
  }, 0);

  console.log(totalValueSafeAccounts);

  console.log("\n");
  console.log("------------------------------------------------------\n");

  /////////////////////////////////////////////////////////////////////////

  console.log("===== TOTAL VALUE UNSAFE ACCOUNTS IN DOLLARS =====");

  const totalValueUnsafeAccounts = unsafeAccounts.reduce((accumulator, obj) => {
    return accumulator + obj.valueInDollar;
  }, 0);

  console.log(totalValueUnsafeAccounts);

  console.log("\n");
  console.log("------------------------------------------------------\n");

  /////////////////////////////////////////////////////////////////////////

  console.log("===== SECURE TOKEN PERCENTAGE =====");

  const secureTokenPercentage =
    Math.round(((totalValueSafeAccounts * 100) / totalValueAccounts) * 100) /
    100;

  console.log(secureTokenPercentage);

  console.log("\n");
  console.log("------------------------------------------------------\n");

  /////////////////////////////////////////////////////////////////////////

  console.log("===== TOKEN PERCENTAGE =====");

  console.log("-----------");
  console.log("Ethereum");
  const ethereumPercentage =
    Math.round(((ethereum.valueInDollar * 100) / totalValueAccounts) * 100) /
    100;
  console.log(ethereumPercentage);

  console.log("-----------");
  console.log("Bitcoin");
  const bitcoinPercentage =
    Math.round(((bitcoin.valueInDollar * 100) / totalValueAccounts) * 100) /
    100;
  console.log(bitcoinPercentage);

  console.log("-----------");
  console.log("Ethereum Classic");
  const ethereumClassicPercentage =
    Math.round(
      ((ethereumClassic.valueInDollar * 100) / totalValueAccounts) * 100
    ) / 100;
  console.log(ethereumClassicPercentage);

  //var sumOfallValueAccounts = 0
  //for (let i  = 0; i < allValueAccounts.length; i++){
  //  sumOfallValueAccounts += allValueAccounts[i];
  //}
  //console.log(sumOfallValueAccounts);
}
/*console.log("\n\n");

  console.log("======= Training on arrays ======= \n\n");

  const myArrayOfStrings = ["a", "b", "c"];
  // console.log("My array of strings: ", myArrayOfStrings);
  // console.log("The size of my array = ", myArrayOfStrings.length);
  // console.log("The value of index 0 ", myArrayOfStrings[0]);
  // console.log("The value of index 1 ", myArrayOfStrings[1]);
  // console.log("The value of index 2 ", myArrayOfStrings[2]);

  displayArrayInfos("strings", myArrayOfStrings);

  // =========================================================

  const myArrayOfNumbers = [10, 20, 30];
  // console.log("My array of numbers: ", myArrayOfNumbers);
  // console.log("la taille de mon tableau = ", myArrayOfNumbers.length);
  // console.log("la valeur de l'index 0 ", myArrayOfNumbers[0]);
  // console.log("la valeur de l'index 1 ", myArrayOfNumbers[1]);
  // console.log("la valeur de l'index 2 ", myArrayOfNumbers[2]);
  displayArrayInfos("numbers", myArrayOfNumbers);

    // =========================================================

  const myArrayOfPojos = [{ val: "hola" },{ val: "hello" },{ val: "salut" },];
  // console.log("My array of pojos: ", myArrayOfPojos);
  // console.log("The size of my array = ", myArrayOfPojos.length);
  // console.log("la valeur de l'index 0 ", myArrayOfPojos[0]);
  // console.log("la valeur de l'index 1 ", myArrayOfPojos[1]);
  // console.log("la valeur de l'index 1 ", myArrayOfPojos[2]);
  displayArrayInfos("pojos", myArrayOfPojos);

    // =========================================================

  class Car {
    color: string;
    speed: number;
    reference: number;

    constructor(color: string, speed: number, reference: number) {
      this.color = color;
      this.speed = speed;
      this.reference = reference;
    }
  }

  let myCar = new Car("red", 100, 1);

  const cars = [
    myCar,
    new Car("green", 200, 2),
    new Car("yellow", 60, 3),
    new Car("yellow", 60, 4),
  ];

  // =========================================================

  // intéressant à noter: pour accéder à mon premier objet j'ai deux choix:
  console.log("reference first car ", myCar.reference); // ma variable myCar
  
  // ou retrouver mon objet avec sa place dans le tableau: vehicules[0]
  console.log("reference first car ", cars[0]?.reference);

  displayArrayInfos("cars", cars);

  // =========================================================

  // push : ajouter 1 élement
  myArrayOfPojos.push({ val: "tata" });

  // =========================================================

  // map

  //Filter : deux opérateurs sur les tableaux

// Fonction d'affichage des infos du tableau
// paramètre 1: une string
// paramètre 2: un tableau de n'importe quel type (any)
function displayArrayInfos(nom: string, tableau: Array<any>) {
  console.log("My array of %s : ", nom, tableau);
  console.log("The size of my array = ", tableau.length);
  console.log("The value of index 0 = ", tableau[0]);
  console.log("The value of index 1 = ", tableau[1]);
  console.log("The value index 2 = ", tableau[2]);
  console.log("\n \n");
  
}
//////////////////////////////////////////////////////////

console.log ("// ----------------------------------------")
console.log ("// ----------------------------------------")
console.log("\n \n");

class Wallet {
  coin: string;
  numberOfCoins: number;

  constructor (coin: string, numberOfCoins: number){
    this.coin = coin;
    this.numberOfCoins = numberOfCoins;

  }
}

const myWallets = [
  new Wallet ("ethereum", 3),
  new Wallet ("bitcoin", 0.3),
  new Wallet ("cro", 3000),
];

function displayMyWallets (name: string, array: Array<any>) {
  console.log("My array of %s : ", name, array);
  console.log("The size of my array = ", array.length);
  console.log("The value of index 0 = ", array[0]);
  console.log("The value of index 1 = ", array[1]);
  console.log("The value of index 2 = ", array[2]);
  console.log("\n \n");
  
}
displayMyWallets("wallet: ", myWallets)

// Utiliser l'opérateur .forEach

myWallets.forEach(myWallets => console.log("I want more %s", myWallets.coin))

console.log ("\n// ----------------------------------------\n")

// Faire passer une fonction en paramètre de .forEach (ne retourne rien)
function iWantMore(myWallets: { coin: any; }){ 
  console.log("I want more %s",myWallets.coin);
}
myWallets.forEach(iWantMore)

console.log ("\n// ----------------------------------------\n")

// Utiliser .map (retourne un nouveau tableau)

const onWhichStorage = myWallets.map
(myWallets => {return myWallets.coin = myWallets.coin + " wallet is on my ledger"});

console.log(onWhichStorage);

console.log ("\n// ----------------------------------------\n")

// Utiliser .filter

const moreThan3coins = myWallets.filter
(myWallets => {return myWallets.numberOfCoins > 3});

console.log(moreThan3coins);

console.log ("\n// ----------------------------------------\n")

// .findIndex

const StartingWithE = myWallets.findIndex 
(myWallets => { return myWallets.coin[0] === "e" ? true : false;});

console.log("The index of my coins starting with an e are: " , StartingWithE);

console.log ("\n// ----------------------------------------\n")


myWallets.push(new Wallet("veChain", 5000),new Wallet("VeThor", 5000))

console.log(myWallets)
*/
