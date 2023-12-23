// Variables
const checkBox = document.getElementById("show");
const password = document.getElementById("password");
const ConfirmPassword = document.getElementById("c-password");

/* Toggles the visibility of two password input fields based on the state of a checkbox type.*/
checkBox.onclick = function () {
  if (checkBox.checked) {
    password.type = "text";
    ConfirmPassword.type = "text";
  } else {
    password.type = "password";
    ConfirmPassword.type = "password";
  }
};
