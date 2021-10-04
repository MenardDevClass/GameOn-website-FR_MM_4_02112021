function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }

}


// DOM Elements
const submitButton = document.querySelector(".btn-submit")
const wrongMail = document.querySelector("#quantity")
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const closeBtn = document.querySelector(".close")
const inputFields = document.querySelectorAll(".text-control")
const validInputs = Array.from(inputFields).filter( input => input.value !== "");
// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() { 
  modalbg.style.display = "block";
}

//bouton "close"

closeBtn.addEventListener("click", closeModal);
	

function closeModal() {
	modalbg.style.display = "none";
}

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


