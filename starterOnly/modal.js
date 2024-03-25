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

// launch modal event

// on ce sert de la variable qui stock le btn pour ouvrir la modal et on lui dis
// que quand on click la fonction launchModal ce declanche
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// on ce sert de la variable qui stock le btn pour fermer la modal et on lui dis
// que quand on click la fonction closeMale ce declanche
modalBtnClose.forEach((btn) => btn.addEventListener("click", closeModal));

// launch modal form

// on cree la fonction qui transforme la modal de display none 
// a display block pour la faire apparaitre
function launchModal() {
  modalbg.style.display = "block";
}
// on cree la fonction qui transforme la modal de display block 
// a display none pour la faire disparaitre
function closeModal(){
  modalbg.style.display = "none";
}


