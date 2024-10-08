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
    if (!isNaN(a)) {
      break; // Sortie de la boucle si 'a' est un nombre valide
    }
  }
  while (true) {
    let y = prompt("Veillez renter un deuxieme nombre");
    b = Number(y);
    if (!isNaN(b)) {
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

// appellez la fonction pour pouvoir executer le programme !!

// ---------------------------------------------------------------------------------
// Exo 7: Boucle et tableau :
// Crée un tableau de cinq couleurs (par exemple : rouge, vert, bleu, jaune, noir). Utilise une boucle pour afficher chaque couleur en console.

// appellez la fonction pour pouvoir executer le programme !!

// ---------------------------------------------------------------------------------
// Exo 8: Conditions avancées :
// Demande un mot de passe à l’utilisateur. Si le mot de passe est "javascript123", affiche "Accès autorisé", sinon affiche "Accès refusé".

// appellez la fonction pour pouvoir executer le programme !!

// ---------------------------------------------------------------------------------
// Exo 9: Convertisseur Celsius-Fahrenheit :
// Crée une fonction qui prend une température en Celsius et la convertit en Fahrenheit. La formule est : F = C * 9/5 + 32. Utilise la fonction pour convertir une température et afficher le résultat.

// appellez la fonction pour pouvoir executer le programme !!

// ---------------------------------------------------------------------------------
// Exo 10: Filtrer un tableau :
// Déclare un tableau de nombres (par exemple, [2, 8, 5, 13, 4, 6, 7]). Utilise une boucle pour créer un nouveau tableau qui contient seulement les nombres supérieurs à 5, puis affiche ce nouveau tableau.

// appellez la fonction pour pouvoir executer le programme !!
