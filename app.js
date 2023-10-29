let loginButton = document.getElementById("loginButton");
let registerButton = document.getElementById("registerButton");
let displayLogin = document.getElementById("displayLogin");
let displayRegister = document.getElementById("displayRegister");


loginButton.addEventListener("click",function(){
    displayRegister.style.display="none";
    displayLogin.style.display="block";
});

registerButton.addEventListener("click",function(){
    displayLogin.style.display="none";
    displayRegister.style.display="block";
});