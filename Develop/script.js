// Assignment Code
var generateBtn = document.querySelector("#generate");

// My Variables
var lowercase = ["abcdefghijklmnopqrstuvwxyz"];
var uppercase = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
var numeric = [0123456789];
var special = ["~`!#$%^&*+=-[]\\\',;/{}|\":<>?"];
var confirmLower = promptMe.confirmLower;
var confirmUpper = promptMe.confirmUpper;
var confirmNumeric = promptMe.confirmNumeric;
var confirmSpecial = promptMe.confirmSpecial;
var passwordLength = parseInt(promptMe.passwordLength);
var characters;

// Write password to the #password input
function writePassword() {
  var password = generatePassword(); 
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}


// Added event listeners to generate button
generateBtn.addEventListener("click", promptMe);
generateBtn.addEventListener("click", writePassword);

// My Prompts/confirms
function promptMe() {
  passwordLength = prompt("Choose your password length, between 8 and 128 characters");
  confirmLower = confirm("Do you want lowercase letters?");
  confirmUpper = confirm("Do you want UPPERCASE letters?");
  confirmNumeric = confirm("Do you want numbers?"); 
  confirmSpecial = confirm("Do you want special characters?");  
}

// My Function
function generatePassword() {
  if (confirmLower === true) {
    characters += lowercase;
  } 
  if (confirmUpper === true) {
    characters += uppercase;
  } 
  if (confirmNumeric === true) {
    characters += numeric;
  } 
  if (confirmSpecial === true) {
    characters += special;
  } 
  var password = "";
  for (var i = 0; i < passwordLength; i++) {
  var random = Math.floor(Math.random() * characters.length);
  password += characters[random];
  }
  return password;
}