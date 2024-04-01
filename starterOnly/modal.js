// Fonction pour modifier la navigation responsive
function editNav() {
  var x = document.getElementById("myTopnav");
  // Vérifie si la classe actuelle est "topnav"
  if (x.className === "topnav") {
    // Si c'est le cas, ajoute la classe "responsive"
    x.className += " responsive";
  } else {
    // Sinon, remplace la classe par "topnav"
    x.className = "topnav";
  }
}

// Éléments du DOM
const modalbg = document.querySelector(".bground"); // Sélectionne la modal
const modalBtn = document.querySelectorAll(".modal-btn"); // Sélectionne tous les boutons pour ouvrir la modal
const formData = document.querySelectorAll(".formData"); // Sélectionne les champs du formulaire
const modalBtnClose = document.querySelectorAll(".close"); // Sélectionne les boutons pour fermer la modal
const modalSubmit = document.querySelectorAll(".btn-submit"); // Sélectionne les boutons de soumission

// Événement pour ouvrir la modal lorsqu'un bouton est cliqué
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// Événement pour fermer la modal lorsqu'un bouton de fermeture est cliqué
modalBtnClose.forEach((btn) => btn.addEventListener("click", closeModal));

// Événement pour le bouton de soumission du formulaire
modalSubmit.forEach((btn) =>
  btn.addEventListener("click", (event) => {
    let modalSubmitValue = btn.value;
    // Vérifie la valeur du bouton de soumission
    if (modalSubmitValue === "C'est parti") {
      // Si la valeur est "C'est parti", vérifie le formulaire
      verif();
      event.preventDefault(); // Empêche la soumission du formulaire par défaut
    }
    if (modalSubmitValue === "Fermer") {
      // Si la valeur est "Fermer", ferme la modal
      closeModal();
    }
  })
);

// Fonction pour afficher la modal
function launchModal() {
  modalbg.style.display = "block"; // Affiche la modal en changeant son style
}

// Fonction pour cacher la modal
function closeModal() {
  modalbg.style.display = "none"; // Cache la modal en changeant son style
}

// Fonction pour vérifier les champs du formulaire
function verif() {
  const modalFirst = document.querySelector("#first").value.trim().length; // Longueur du prénom
  const modalLast = document.querySelector("#last").value.trim().length; // Longueur du nom
  const modalEmail = document.querySelector("#email").value.trim(); // Email
  const modalBirthdate = document.querySelector("#birthdate").value; // Date de naissance
  const modalTournois = document.querySelector("#quantity").value.trim(); // Nombre de tournois
  const modalCondition = document.querySelector("#checkbox1"); // Condition d'utilisation
  const modalSubmit = document.querySelector(".btn-submit"); // Bouton de soumission
  const modalMerci = document.querySelector(".container-merci"); // Message de remerciement

  // Réinitialise les indicateurs d'erreur
  formData.forEach((element) => {
    element.setAttribute("data-error-visible", "false");
  });

  // Variable pour vérifier si toutes les conditions sont remplies
  const isFormValid = modalFirst >= 2 && modalLast >= 2 && isValidEmail(modalEmail) && modalBirthdate !== "" && modalTournois !== "" && modalTournois < 100 && verifCaseLocalisation() && modalCondition.checked;

  // Vérifie si le formulaire est valide
  if (isFormValid) {
    modalSubmit.value = "Fermer"; // Change la valeur du bouton de soumission en "Fermer"
    // Masque les champs du formulaire et affiche le message de remerciement
    formData.forEach((label) => {
      label.style.visibility = "hidden";
    });
    modalMerci.style.display = "flex";
  } else {
    // Affiche les messages d'erreur appropriés selon les conditions non remplies
    if (modalFirst < 2) formData[0].setAttribute("data-error-visible", "true");
    if (modalLast < 2) formData[1].setAttribute("data-error-visible", "true");
    if (modalEmail === "" || !isValidEmail(modalEmail)) formData[2].setAttribute("data-error-visible", "true");
    if (modalBirthdate === "") formData[3].setAttribute("data-error-visible", "true");
    if (modalTournois === "" || modalTournois >= 100) formData[4].setAttribute("data-error-visible", "true");
    if (!verifCaseLocalisation()) formData[5].setAttribute("data-error-visible", "true");
    if (!modalCondition.checked) formData[6].setAttribute("data-error-visible", "true");
  }
}

// Fonction pour valider le format de l'email
function isValidEmail(email) {
  return email.includes("@") && email.includes(".");
}

// Fonction pour vérifier si au moins une case de localisation est cochée
function verifCaseLocalisation() {
  const modalLocalisation = document.querySelectorAll(
    'input[type="radio"][name="location"]'
  );

  // Vérifie si au moins une case de localisation est cochée
  for (let i = 0; i < modalLocalisation.length; i++) {
    if (modalLocalisation[i].checked) {
      return true;
    }
  }

  return false;
}
