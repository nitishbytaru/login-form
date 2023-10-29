let loginButton = document.getElementById("loginButton");
let registerButton = document.getElementById("registerButton");
let displayLogin = document.getElementById("displayLogin");
let displayRegister = document.getElementById("displayRegister");
let successAlert=document.getElementById("successAlert");
let incorrectDetails=document.getElementById("incorrectDetails");

let username = document.getElementById("username");
let password = document.getElementById("password");
let loginDataButton = document.getElementById("loginDataButton");

let newUsername = document.getElementById("newUsername");
let newPassword = document.getElementById("newPassword");
let email = document.getElementById("email");
let registerDataButton = document.getElementById("registerDataButton");

loginDataButton.addEventListener("click",function (){
    incorrectDetails.style.display="block";
});

registerDataButton.addEventListener("click",function (){
    successAlert.style.display="block";
});

loginButton.addEventListener("click", function () {
  displayRegister.style.display = "none";
  displayLogin.style.display = "block";
});

registerButton.addEventListener("click", function () {
  displayLogin.style.display = "none";
  displayRegister.style.display = "block";
});
