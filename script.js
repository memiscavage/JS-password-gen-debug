// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Characters required for password criteria listed here

var specialCharacters = "!#$%&'()*+,-./:;<=>?@[]^_`{|}~"; // It doesn't like when I include a backslash so that character has been left out
var lowercaseLetters = "abcdefghijklmnopqrstuvwxyz"
var uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var numberCharacters = "0123456789"

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
