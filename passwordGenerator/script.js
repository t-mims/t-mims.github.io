// Assignment Code
var generateBtn = document.querySelector("#generate");
let upper=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y",",Z"]
let lower=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","s"]
let special=["!","@","#","$","%","^","&","*","(",")","+","=","`","~","?",">","<",",",".",";"]
let number=["0123456789"]
let characters=["upper", "lower", "special", "number"]

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
