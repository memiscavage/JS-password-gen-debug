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
  } // Created a while loop so the user can be re-directed to prompt if number entered does not match criteria 

  var specialCharactersConfirm = confirm ("Please select 'OK' if you would like special characters in your password.");
  if (specialCharactersConfirm === true){
    characterPool += specialCharacters;
  }

  var lowercaseLettersConfirm = confirm ("Please select 'OK' if you would like lowercase letters in your password.");
  if (lowercaseLettersConfirm === true){
    characterPool += lowercaseLetters;
  }

  var uppercaseLettersConfirm = confirm ("Please select 'OK' if you would like uppercase letters in your password.");
  if (uppercaseLettersConfirm === true){
    characterPool += uppercaseLetters;
  }

  var numberCharactersConfirm = confirm ("Please select 'OK' if you would like numbers in your password.");
  if (numberCharactersConfirm === true){
    characterPool += numberCharacters;
  }
  console.log("character pool", characterPool);
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
