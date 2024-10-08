// Exo-1: Déclarer et manipuler des variables :
// Crée trois variables : ton prénom, ton âge, et ton pays.

let prenom = "John";
let age = 25;
let pays = "jamaica";

// Concatène-les dans une seule chaîne de caractères pour afficher une phrase comme : “Je m’appelle [prénom], j’ai [âge] ans et je viens de [pays].”

console.log(
  "Hello World, my name is " +
    prenom +
    " and i'm " +
    age +
    " years old. I live in " +
    pays
);

// -------------------------------------------------------
// Exo-2: Conditions simples :
// Écris un programme qui demande un nombre et affiche si ce nombre est positif, négatif ou nul.

// declarons une variable qu'on vas utiliser pour faire en sorte qu'apres la boucle on pourra continuer le programme qu'on veut executer.

function filtrageNombre() {
  let a;
  while (true) {
    let x = prompt("Veillez saisir un nombre !!");
    a = Number(x); // Conversion et assignation de la valeur
    if (!isNaN(a)) {
      break; // On sort de la boucle si a est un nombre
    }
  }
  if (a > 0) {
    console.log(a + " est un nombre positif");
  } else if (a < 0) {
    console.log(a + " est un nombre negatif");
  } else {
    console.log(a + " est nul");
  }
}
// appellez la fonction pour pouvoir executer le programme !!

// -------------------------------------------------------
// Exo-3: Calcul de l’âge :
// Déclare une variable pour l’année actuelle et une autre pour ton année de naissance. Calcule et affiche ton âge en utilisant une opération de soustraction.

function calculAge() {
  let naissance;
  let année;
  let âge;

  while (true) {
    let x = prompt("Quel est votre année de naissance ?");
    naissance = Number(x); // Conversion et assignation de la valeur
    if (!isNaN(naissance)) {
      break;
    }
  }
  while (true) {
    let a = prompt("Vous voullez savoir quel âge vous aurez en quel année ?");
    année = Number(a);
    if (!isNaN(année)) {
      break;
    }
  }
  âge = année - naissance;
  alert("Si nous étions en " + année + " vous aurez " + âge + " ans.");
}
calculAge();
