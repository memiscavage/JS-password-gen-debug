// Assignment code here

// Characters required for password criteria listed here

var specialCharacters = "!#$%&'()*+,-./:;<=>?@[]^_`{|}~"; // It doesn't like when I include a backslash so that character has been left out
var lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";
var uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numberCharacters = "0123456789";

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Generate password function info

function generatePassword() {
  var characterPool = "";
  var passwordLength = prompt ("Enter your desired password length (8-128 characters, please):");
  while (passwordLength > 128 || passwordLength < 8) {
    passwordLength = prompt ("Please re-enter a number between 8 and 128");
  }
  var specialCharactersConfirm = confirm ("Would you like special characters in your password?");
  if (specialCharactersConfirm === true){
    characterPool += specialCharacters;
  }
  console.log("Character pool", characterPool);
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  

}


// This is where I will prompt the page to ask about characters in the desired password

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
