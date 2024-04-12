"use strict";

// Elements
const signupCard = document.getElementById("sign-up-container");
const successCard = document.getElementById("success-container");
const subscribeBtn = document.getElementById("subscribe-btn");

const dismissBtn = document.getElementById("dismiss-btn");
const submittedEmail = document.getElementById("submitted-email");
const errorMessage = document.querySelector(".error-message");
const emailInput = document.getElementById("email");

// validate email
function validate(str) {
  const reg = new RegExp("[a-z0-9]+@[a-z]+.[a-z]{2,3}");
  return reg.test(str);
}

function updateSuccessMessage(email) {
  submittedEmail.textContent = email.value;
}

function showErrors() {
  errorMessage.classList.remove("hidden");
  emailInput.classList.add("error");
}

function clearError() {
  if (validate(emailInput.value)) {
    errorMessage.classList.add("hidden");
    emailInput.classList.remove("error");
  } else {
    showErrors();
  }
}

function switchSections() {
  signupCard.classList.toggle("hidden");
  successCard.classList.toggle("hidden");
}

// submit form
const submitForm = (event) => {
  event.preventDefault();

  if (!validate(emailInput.value)) {
    showErrors();
  }
  if (validate(emailInput.value)) {
    clearError();
    updateSuccessMessage(emailInput);
    switchSections();
    emailInput.value = "";
  }
};

// Event-listeners
subscribeBtn.addEventListener("click", submitForm);
dismissBtn.addEventListener("click", switchSections);
emailInput.addEventListener("input", clearError);
