// Assignment Code
var generateBtn = document.querySelector("#generate");
let upper="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let lower="abcdefghijklmnopqrstuvwxyz";
let special="!@#$%^&*()+-=_:;?.";
let number="0123456789";
let characters=[];

let incUpper= confirm("Would you like to include upper case letters?");
let incLower= confirm("Would you like to include lower case letters?");
let incSpecial= confirm("Would you like to include special characters?");
let incNumber= confirm("Would you like to include numbers?");
let length= prompt("How many characters would you like in the password? (enter number between 8 and 128");
let lengthNum=parseInt(length)

function definePassword(){
  if (lengthNum>128 || lengthNum<8) {
    length= prompt ("Please enter a number between 8 and 128.");
  }
  if (8<=length<=128){
    if (incUpper===true){
      characters+= upper;
    }
    if (incLower===true){
      characters+= lower;

    }
    if (incSpecial===true){
      characters+= special;
     
    }
    if (incNumber===true){
      characters+= number;
    }
  }
  return characters
}
definePassword();

word = "";
function generatePassword(){
  
  for ( var i=0; i<length; i++){
     char= characters[(Math.floor(Math.random() * characters.length))];
     word= word.concat(char);
     }
    return word
}

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


