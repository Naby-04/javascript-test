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

// appellez la fonction pour pouvoir executer le programme !!

// ---------------------------------------------------------------------------------

// Exo 4 : Opérations de base :
// Demande à l’utilisateur deux nombres et affiche la somme, la différence, le produit, et le quotient des deux.

function Operateurs() {
  let a;
  let b;

  while (true) {
    let x = prompt("Veillez renter un premier nombre");
    a = Number(x);
    if (!isNaN(a) && a != 0) {
      break; // Sortie de la boucle si 'a' est un nombre valide
    }
  }
  while (true) {
    let y = prompt("Veillez renter un deuxieme nombre");
    b = Number(y);
    if (!isNaN(b) && b != 0) {
      break; // Sortie de la boucle si 'b' est un nombre valide
    }
  }

  // Calcul des résultats
  let somme = a + b;
  let difference = a - b;
  let multiplication = a * b;
  let division = a / b;

  // Affichage des résultats
  alert(
    a +
      " + " +
      b +
      " = " +
      somme +
      "\n" +
      a +
      " - " +
      b +
      " = " +
      difference +
      "\n" +
      a +
      " x " +
      b +
      " = " +
      multiplication +
      "\n" +
      a +
      " ÷ " +
      b +
      " = " +
      division
  );
}
Operateurs();
// appellez la fonction pour pouvoir executer le programme !!
// ---------------------------------------------------------------------------------
// Exo 5: Fonction de multiplication :
// Écris une fonction qui prend un nombre en paramètre et retourne la table de multiplication de ce nombre sous forme de chaîne de caractères. Par exemple, tableDeMultiplication(3) doit retourner "3 x 1 = 3, 3 x 2 = 6, ... jusqu'à 3 x 10".

function tableDeMultiplication(a) {
  for (let i = 0; i <= 10; i++) {
    let resultat = a * i;
    console.log(a + " x " + i + " = " + resultat);
  }
}

// appellez la fonction pour pouvoir executer le programme !!
// ---------------------------------------------------------------------------------
// Exo 6: Trouver les nombres pairs :
// Écris une boucle for pour afficher tous les nombres pairs de 1 à 20.
function nombresPairs() {
  for (let i = 0; i <= 20; i++) {
    if (i % 2 == 0) {
      // un nombre est pair si son modulo est egale à 0.
      console.log(i + " est un nombre pair.");
    } else {
      console.log(i + " est un nombre impair.");
    }
  }
}
nombresPairs();

// appellez la fonction pour pouvoir executer le programme !!

// ---------------------------------------------------------------------------------
// Exo 7: Boucle et tableau :
// Crée un tableau de cinq couleurs (par exemple : rouge, vert, bleu, jaune, noir). Utilise une boucle pour afficher chaque couleur en console.

let tableau = [];
tableau[0] = "Rouge";
tableau[1] = "Vert";
tableau[2] = "Bleu";
tableau[3] = "Jaune";
tableau[4] = "Noir";
console.log(tableau);
tableau.forEach((element) => {
  console.log(element);
});

// appellez la fonction pour pouvoir executer le programme !!

// ---------------------------------------------------------------------------------
// Exo 8: Conditions avancées :
// Demande un mot de passe à l’utilisateur. Si le mot de passe est "javascript123", affiche "Accès autorisé", sinon affiche "Accès refusé".
function password() {
  while (true) {
    let password = prompt("Saisissez le mot de passe !");
    if (password == "javascript123") {
      alert("Accès autorisé");
      break;
    } else {
      let password = prompt("Accès refusé. Saisissez le mot de passe !");
    }
  }
}

// appellez la fonction pour pouvoir executer le programme !!

// ---------------------------------------------------------------------------------
// Exo 9: Convertisseur Celsius-Fahrenheit :
// Crée une fonction qui prend une température en Celsius et la convertit en Fahrenheit. La formule est : F = C * 9/5 + 32. Utilise la fonction pour convertir une température et afficher le résultat.

function convertirTemp() {
  let celsius = prompt("Saisissez la température en Celsius :");
  let fahrenheit = (Number(celsius) * 9) / 5 + 32;
  alert("La température en Fahrenheit est : " + fahrenheit);
}

// appellez la fonction pour pouvoir executer le programme !!

// ---------------------------------------------------------------------------------
// Exo 10: Filtrer un tableau :
// Déclare un tableau de nombres (par exemple, [2, 8, 5, 13, 4, 6, 7]). Utilise une boucle pour créer un nouveau tableau qui contient seulement les nombres supérieurs à 5, puis affiche ce nouveau tableau.

let ancienTableau = [2, 8, 5, 13, 4, 6, 7];
let nouveauTableau = [];
ancienTableau.forEach((element) => {
  if (element > 5) {
    nouveauTableau.push(element);
  }
  console.log(nouveauTableau);
});

// appellez la fonction pour pouvoir executer le programme !!

// ----------------------------------------------------------

// Exo 11: Calculer la table de multiplication que l'utilisateur veut savoir:

function tableMultiplication() {
  var table = 0;
  while (true) {
    let y = prompt(
      "Vous voulez savoir la table de multiplication de quel nombre ?"
    );
    var table = Number(y);
    if (!isNaN(table)) {
      break; // Sortie de la boucle si 'b' est un nombre valide
    }
  }
  for (let i = 0; i <= 10; i++) {
    let resultat = table * i;
    console.log(table + " x " + i + " = " + resultat);
  }
}
// appellez la fonction pour pouvoir executer le programme !!

// ----------------------------------------------------------

// Exo12:Écrire un programme qui demande à un utilisateur d’écrire son âge, et lui retourne sa catégorie d’âge.
//  NB: 0   à   14 ans  => Enfants
//      15  à   25 ans  => Adolescents
//      25  à   64 ans  => Adultes
//      65 ans et plus  => Aînés

function categorieAge() {
  while (true) {
    var age = prompt("Veillez renseigner votre Âge !");
    var ageNumber = Number(age);
    if (!isNaN(ageNumber)) {
      break;
    }
  }
  if (ageNumber <= 14) {
    alert("tu es un enfant !!");
  } else if (ageNumber <= 25) {
    alert("Tu es un ADOLESCENCE !");
  } else if (ageNumber <= 64) {
    alert("Tu es un ADULTE");
  } else {
    alert("vous êtes AÎNÉ !");
  }
}
// categorieAge();
// appellez la fonction pour pouvoir executer le programme !!
