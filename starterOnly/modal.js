function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
//on recuper le btn pour fermer la modal et on le stock dans un const
const modalBtnClose = document.querySelectorAll(".close");
// on recuper le btn submit et on les stock dans un const
const modalSubmit = document.querySelectorAll(".btn-submit");

// launch modal event

// on ce sert de la variable qui stock le btn pour ouvrir la modal et on lui dis
// que quand on click la fonction launchModal ce declanche
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// on ce sert de la variable qui stock le btn pour fermer la modal et on lui dis
// que quand on click la fonction closeMale ce declanche
modalBtnClose.forEach((btn) => btn.addEventListener("click", closeModal));

modalSubmit.forEach((btn) => btn.addEventListener("click", Name));

// launch modal form

// on cree la fonction qui transforme la modal de display none
// a display block pour la faire apparaitre
function launchModal() {
  modalbg.style.display = "block";
}
// on cree la fonction qui transforme la modal de display block
// a display none pour la faire disparaitre
function closeModal() {
  modalbg.style.display = "none";
}


// fonction qui verifie s'y les input pour inscription sont correcte

function Name() {
  // on recuper le prenon et le nom et on les stock dans un const
  const modalFirst = document.querySelector("#first").value.trim().length;
  const modalLast = document.querySelector("#last").value.trim().length;
  // on recuper l'email et on les stock dans un const
  const modalEmail = document.querySelector("#email").value.trim();
  // on recuper birthdate et on les stock dans un const
  const modalBirthdate = document.querySelector("#birthdate").value;
  // on recuper le nombre de tournois et on les stock dans un const
  const modalTournois = document.querySelector("#quantity").value.trim();
   // on recuper la case des condition et on les stock dans un const
  const modalCondition = document.querySelector("#checkbox1");

  if (modalFirst >= 2 && modalLast >= 2) {
    console.log("Nom et prénom corrects");
  } else {
    alert("Veuillez entrer 2 caractères ou plus pour le champ du nom.");
  }

  if (modalEmail !== "" && isValidEmail(modalEmail)) {
    console.log("Email correct");
  } else {
    alert("Veuillez entrer une adresse e-mail valide.");
  }

  if (modalBirthdate === "") {
    alert("Vous devez entrer votre date de naissance");
  }

  if (modalTournois < 99) {
    console.log("Nombre valide");
  } else {
    alert("Le nombre de tournois doit être inférieur à 99.");
  }

  if (verifCaseLocalisation()) {
    console.log("Au moins une case est cochée");
  } else {
    alert("Vous devez choisir une option de localisation.");
  }

  if (modalCondition.checked) {
    console.log("La case des conditions est cochée");
  } else {
    alert("Vous devez accepter les termes et conditions.");
  }
}








// on verifie si il y un @ et un point dans l'email
function isValidEmail(email) {
  return email.includes("@") && email.includes(".");
}
// boucle for pour verifier si l'une des case localisation est cocher si oui = true si non = false
function verifCaseLocalisation() {
  // on recupere tous les case de localisation 
  const modalLocalisation = document.querySelectorAll(
    'input[type="radio"][name="location"]'
  );

  for (let i = 0; i < modalLocalisation.length; i++) {
    if (modalLocalisation[i].checked) {
      return true; // Au moins une case est cochée
    }
  }

  return false; // Aucune case n'est cochée
}
