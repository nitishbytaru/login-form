
let usernameArr=["nitish"];//these are the arrays which store the user data received while registring
let passwordArr=["1234"];
let emailArr=["nitishdurgab2004@gmail.com"];

let displayLogin = document.getElementById("displayLogin"); //the whole login contents
let displayRegister = document.getElementById("displayRegister"); //the whole register contents
let successAlert = document.getElementById("successAlert"); //alert variable if registeration is completed
let incorrectDetails = document.getElementById("incorrectDetails"); //alert variable if login details are wrong
let loginSuccess = document.getElementById("loginSuccess"); //gets the login success alert
let userExists = document.getElementById("userExists");//gives alert if the user already exists

let username = document.getElementById("username"); //gets username at login page
let password = document.getElementById("password"); //gets password at login page

let newUsername = document.getElementById("newUsername"); //gets username at regestration page
let newPassword = document.getElementById("newPassword"); //gets password at regestration page
let email = document.getElementById("email"); //gets email at regestration page


// this function submits the the form at the login block 
document.getElementById("login-form-login").onsubmit = function (event){
  event.preventDefault();// Prevent default form submission

  if (usernameArr.includes(username.value.trim()) && passwordArr.includes(password.value) ) {
    incorrectDetails.style.display = "none";//disables the incorrectdetails alert
    loginSuccess.style.display = "block";//enables the loginsuccess alert
  } 
  else {
    incorrectDetails.style.display = "block";//enables the incorrectdetails alert
    loginSuccess.style.display = "none";//disables the loginsuccess alert
  }
};

// this function submits the the form at the register block 
document.getElementById("login-form-register").onsubmit = function (event){
  event.preventDefault();// Prevent default form submission

  if (newPassword.value === "" || newUsername.value.trim() === "" || email.value === "") {
    successAlert.style.display = "none";//disables the success alert
  } 
  else if(emailArr.includes(email.value.trim())){
    userExists.style.display="block";
    successAlert.style.display = "none";
  }
  else {
    successAlert.style.display = "block";//enables the success alert
    usernameArr.push(newUsername.value.trim());
    passwordArr.push(newPassword.value);
    emailArr.push(email.value);
  }
};


//displays login page and disables register page
document.getElementById("loginButton").addEventListener("click", function () {
  displayRegister.style.display = "none";
  displayLogin.style.display = "block";
  newPassword.value = "" ;// these three lines resets the value of the username & password & email
  newUsername.value = "" ;
  email.value = "";
  successAlert.style.display = "none";//disables the success alert
});

//displays register page and disables login page
document.getElementById("registerButton").addEventListener("click", function () {
  displayLogin.style.display = "none";
  displayRegister.style.display = "block";
  loginSuccess.style.display = "none";
  password.value = "" ;// these three lines resets the value of the username & password
  username.value = "" ;
  incorrectDetails.style.display = "none";//disables the incorrectdetails alert
});
