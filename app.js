let loginButton = document.getElementById("loginButton"); //button with login option
let registerButton = document.getElementById("registerButton"); //button with register option
let displayLogin = document.getElementById("displayLogin"); //the whole login contents
let displayRegister = document.getElementById("displayRegister"); //the whole register contents
let successAlert = document.getElementById("successAlert"); //alert variable if registeration is completed
let incorrectDetails = document.getElementById("incorrectDetails"); //alert variable if login details are wrong
let loginSuccess = document.getElementById("loginSuccess"); //gets the login success alert

let username = document.getElementById("username"); //gets username at login page
let password = document.getElementById("password"); //gets password at login page
let loginDataButton = document.getElementById("loginDataButton"); //gets the main login button

let newUsername = document.getElementById("newUsername"); //gets username at regestration page
let newPassword = document.getElementById("newPassword"); //gets password at regestration page
let email = document.getElementById("email"); //gets email at regestration page
let registerDataButton = document.getElementById("registerDataButton"); //gets the main register button

//shows an alert if login details are wrong
loginDataButton.addEventListener("click", function () {
  if (password.value === newPassword.value && username.value === newUsername.value ) {
    incorrectDetails.style.display = "none";//disables the incorrectdetails alert
    loginSuccess.style.display = "block";//enables the loginsuccess alert
  } 
  else {
    incorrectDetails.style.display = "block";//enables the incorrectdetails alert
  }
});

//shows a success message when details are given properly
registerDataButton.addEventListener("click", function () {
  if (newPassword.value === "" || newUsername.value === "" || email.value === "") {
    successAlert.style.display = "none";//disables the success alert
  } 
  else {
    successAlert.style.display = "block";//enables the success alert
  }

  console.log(newUsername.value);
  console.log(newPassword.value);
  console.log(email.value);
});

//displays login page and disables register page
loginButton.addEventListener("click", function () {
  displayRegister.style.display = "none";
  displayLogin.style.display = "block";
  newPassword.value = "" ;// these three lines resets the value of the username & password & email
  newUsername.value = "" ;
  email.value = "";
  successAlert.style.display = "none";//disables the success alert
});

//displays register page and disables login page
registerButton.addEventListener("click", function () {
  displayLogin.style.display = "none";
  displayRegister.style.display = "block";
  password.value = "" ;// these three lines resets the value of the username & password
  username.value = "" ;
  incorrectDetails.style.display = "none";//disables the incorrectdetails alert
});


//create a array which stores the username and another array which stores the password and another to store email 
//now while checking i can use these array to check if the login username is already registered or not 
