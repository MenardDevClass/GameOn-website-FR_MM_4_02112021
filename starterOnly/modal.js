function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalBg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
//Modal close
const closeBtn = document.querySelector(".close");

// Regex elements
// (< 2 characters; Pas de chiffres)
const firstLastRegex = /^[^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{2,}$/;
// Vérification d'email
const emailRegex =
  /^(([^<>()[]\.,;:s@]+(.[^<>()[]\.,;:s@]+)*)|(.+))@(([[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}])|(([a-zA-Z-0-9]+.)+[a-zA-Z]{2,}))$/;


// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalBg.style.display = "block";
}

// close modal
function closeModal() {
  modalBg.style.display = "none";
}
closeBtn.addEventListener("click", closeModal);


// mail error 

function isValidEmail($email)
{
   if(preg_match("/^([w-.]+)@((?:[w]+.)+)([a-zA-Z]{2,4})/i", $email)) {
       return true;
   } else {
       return false;
   }
}

// empty form error

