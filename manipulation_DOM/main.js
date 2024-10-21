// Création, Ajout, et Suppression d’Éléments
// Ajouter un nouvel élément à une liste
// Crée une liste <ul> vide dans ton HTML. En JavaScript, utilise createElement et appendChild pour ajouter trois éléments <li> à cette liste avec des textes différents.

let list = document.querySelector(".List");
if (list) {
  let textArray = [
    "I'm my mama's first child",
    "I'm my mama's second child",
    "I'm my mama's third child",
  ];
  textArray.forEach((text) => {
    let item = document.createElement("li");
    item.textContent = text;
    list?.appendChild(item);
  });
} else {
  console.log("La liste est vide");
}

// ---------------------------------------------------------------------------------
// Ajouter un élément avant un autre
// Crée un conteneur avec plusieurs éléments enfants. Utilise insertBefore pour ajouter un nouvel élément avant un élément spécifique.

let oldBox = document.getElementById("box-1");
let container = document.getElementsByClassName("box-container")[0];
let newbox = document.createElement("div");
newbox.className = "box";
newbox.textContent = "Je suis le nouvel element ajouté";
if (container) {
  //verifie que le container existe reelement
  container.insertBefore(newbox, oldBox);
}
// ---------------------------------------------------------------------------------

// Supprimer le dernier élément d’une liste
// Crée une liste avec plusieurs éléments <li>. Utilise JavaScript pour sélectionner le dernier élément de cette liste et le supprimer avec removeChild.

let List = document.getElementById("list");
if (List && List.lastElementChild) {
  // pour verifier que la liste n'est pas vide
  List.removeChild(List.lastElementChild);
} else {
  console.log("La liste est vide");
}

// ---------------------------------------------------------------------------------

// Créer une carte d’information avec du contenu dynamique
// Crée une <div> vide en HTML. Utilise JavaScript pour y ajouter un titre <h2>, une image <img>, et un paragraphe <p> avec du texte. Ajoute tous ces éléments en tant qu’enfants de la <div>.

let containerVide = document.getElementsByClassName("container-null");
if (containerVide) {
  let title = document.createElement("h2");
  title.textContent = "Titre de la carte d'information";
  let image = document.createElement("img");
  image.src =
    "https://m.media-amazon.com/images/I/61aQBGDwXCL._AC_UF1000,1000_QL80_.jpg";
  let paragraph = document.createElement("p");
  paragraph.textContent =
    "Il fut le premier membre à rejoindre l'Équipage du Chapeau de Paille, il en est le premier et principal épéiste. Son ambition est de devenir le meilleur sabreur au monde et il a d'ailleurs montré une volonté de fer dans le but d'y parvenir.";
  containerVide[0].appendChild(title);
  containerVide[0].appendChild(image);
  containerVide[0].appendChild(paragraph);
} else {
  console.log("La liste est vide");
}

// ---------------------------------------------------------------------------------

// Basculer entre deux classes avec toggle
// Crée un bouton et un paragraphe en HTML. Utilise classList.toggle pour ajouter une classe de style (par exemple, highlight) au paragraphe à chaque clic sur le bouton.

let paragraph = document.getElementById("changeColor");
function highlight() {
  paragraph?.classList.toggle("highlight");
}

// ---------------------------------------------------------------------------------

// Gestion des Événements et Interactions
// Écouter l’événement de clic
// Crée un bouton en HTML. En JavaScript, utilise addEventListener pour écouter l’événement click sur ce bouton et afficher une alerte.

let button = document.getElementById("Events");
button?.addEventListener("click", function alertEvent() {
  alert("Bouton cliqué !");
});

// ---------------------------------------------------------------------------------

// Afficher une alerte au survol d’un texte
// Crée un paragraphe en HTML. Ajoute un écouteur d’événement mouseover qui affiche une alerte ou change la couleur du texte.
let colorEvent = document.getElementById("colorEvent");
colorEvent?.addEventListener("mouseover", function () {
  alert("Vous avez survolé le texte !");
});

// ---------------------------------------------------------------------------------

// Modifier le texte d’un bouton au clic
// Crée un bouton en HTML. À chaque clic, change le texte du bouton entre "Cliqué" et "Cliquez-moi" en utilisant textContent.
let contentChange = document.getElementById("contentChange");
contentChange?.addEventListener("click", function () {
  if (contentChange?.textContent == "Cliqué") {
    contentChange.textContent = "Cliquez-moi";
  } else {
    contentChange.textContent = "Cliqué";
  }
});

// ---------------------------------------------------------------------------------

// Changer l’image au survol
// Crée une balise <img> avec une image initiale. Utilise addEventListener pour changer l’attribut src de l’image lors du survol (mouseover) et le remettre à l’image originale lorsque la souris quitte l’image (mouseout).

let imageChange = document.getElementById("imageChange");
imageChange?.addEventListener("mouseover", function imagechange() {
  imageChange.src = "images/fun.jpg";
});
imageChange?.addEventListener("mouseout", function Imagechange() {
  imageChange.src = "images/luffy.jpg";
});

// ---------------------------------------------------------------------------------

// Afficher la longueur du texte entré

// Crée un champ <input type="text"> et un <p> vide en HTML. Utilise addEventListener sur l’événement input pour afficher en temps réel la longueur du texte dans le paragraphe.

// ---------------------------------------------------------------------------------
// Interactions Avancées et Création Dynamique de Contenu
// Créer un compteur de clics
// Crée un bouton en HTML. Chaque fois que l’utilisateur clique dessus, incrémente une variable et affiche la valeur actuelle du compteur dans un paragraphe.

// ---------------------------------------------------------------------------------

// Afficher un message si le formulaire est soumis sans remplir les champs
// Crée un formulaire avec un champ <input> et un bouton de soumission <button>. Ajoute un écouteur submit sur le formulaire qui vérifie si le champ est vide et empêche la soumission avec un message d’alerte.

// ---------------------------------------------------------------------------------

// Créer un calculateur de prix
// Crée deux champs <input> (prix unitaire et quantité) et un bouton "Calculer" en HTML. Utilise JavaScript pour calculer et afficher le prix total lorsqu’on clique sur "Calculer".

// ---------------------------------------------------------------------------------

// Ajouter et supprimer des éléments dynamiquement

// Crée une liste vide et deux boutons : "Ajouter" et "Supprimer". Au clic sur "Ajouter", un nouvel élément de liste est créé avec du texte. Au clic sur "Supprimer", le dernier élément ajouté est retiré.

// ---------------------------------------------------------------------------------
// Convertir une liste d’objets en tableau HTML
// Crée un tableau d’objets en JavaScript, par exemple avec des informations de nom et âge. Utilise JavaScript pour générer un tableau HTML <table> avec une ligne pour chaque objet. Ajoute ce tableau au DOM et affiche-le sur la page.
