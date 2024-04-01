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

modalSubmit.forEach((btn) =>
  btn.addEventListener("click", function (event) {
    let modalSubmitValue = btn.value;
    if (modalSubmitValue === "C'est parti") {
      verif();
      event.preventDefault(); // Empêcher la soumission du formulaire
    }
    console.log(modalSubmitValue);

    if (modalSubmitValue === "Fermer") {
      closeModal();
    }
  })
);

// launch modal form

// on cree la fonction qui transforme la modal de display none
// a display block pour la faire apparaitre
function launchModal() {
  modalbg.style.display = "block";
}
// on crée la fonction qui transforme la modal de display block
// a display none pour la faire disparaitre
function closeModal() {
  modalbg.style.display = "none";
}

// fonction qui vérifie s'y les input pour inscription sont correcte
function verif() {
  //on recupere tous les inputs
  const modalFirst = document.querySelector("#first").value.trim().length;
  const modalLast = document.querySelector("#last").value.trim().length;
  const modalEmail = document.querySelector("#email").value.trim();
  const modalBirthdate = document.querySelector("#birthdate").value;
  const modalTournois = document.querySelector("#quantity").value.trim();
  const modalCondition = document.querySelector("#checkbox1");
  const modalSubmit = document.querySelector(".btn-submit");
  const modalMerci = document.querySelector(".container-merci");

  // Réinitialiser data-error-visible à false avant de vérifier chaque condition
  formData.forEach((element) => {
    element.setAttribute("data-error-visible", "false");
  });

  if (modalFirst < 2) {
    formData[0].setAttribute("data-error-visible", "true");
  }
  if (modalLast < 2) {
    formData[1].setAttribute("data-error-visible", "true");
  }
  if (modalEmail === "" || !isValidEmail(modalEmail)) {
    formData[2].setAttribute("data-error-visible", "true");
  }
  if (modalBirthdate === "") {
    formData[3].setAttribute("data-error-visible", "true");
  }
  if (modalTournois === "" || modalTournois >= 100) {
    formData[4].setAttribute("data-error-visible", "true");
  }
  if (!verifCaseLocalisation()) {
    formData[5].setAttribute("data-error-visible", "true");
  }
  if (!modalCondition.checked) {
    formData[6].setAttribute("data-error-visible", "true");
  }
  // tous les condition sont true alors on change le btn submit em fermer
  if (
    !modalCondition.checked ||
    !verifCaseLocalisation() ||
    modalTournois === "" ||
    modalTournois >= 100 ||
    modalBirthdate === "" ||
    modalEmail === "" ||
    !isValidEmail(modalEmail) ||
    modalLast < 2 ||
    modalFirst < 2
  ) {
  } else {
    modalSubmit.value = "Fermer";
    if (modalSubmit.value === "Fermer") {
      console.log(modalSubmit.value);
      formData.forEach((label) => {
        label.style.visibility = "hidden";
        modalMerci.style.display = "flex";
      });
    }
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
