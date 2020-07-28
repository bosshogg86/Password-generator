// Assignment Code
var generateBtn = document.querySelector("#generate");

// My Variables
const lowercase = ["abcdefghijklmnopqrstuvwxyz"];
const uppercase = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
const numeric = [0123456789];
const special = ["~`!#$%^&*+=-[]\\\',;/{}|\":<>?"];
let confirmLower = promptMe.confirmLower;
let confirmUpper = promptMe.confirmUpper;
let confirmNumeric = promptMe.confirmNumeric;
let confirmSpecial = promptMe.confirmSpecial;
let passwordLength = parseInt(promptMe.passwordLength);
let characters;

// Write password to the #password input
function writePassword() {
  let password = generatePassword(); 
  let passwordText = document.querySelector("#password");
  passwordText.value = password;
}


// Added event listeners to generate button
generateBtn.addEventListener("click", promptMe);
generateBtn.addEventListener("click", writePassword);

// My Prompts/confirms
function promptMe() {
  passwordLength = prompt("Choose your password length, between 8 and 128 characters");
  //   if (passwordLength < 8 || passwordLength > 128) {
  //   alert("Please enter a number between 8 and 128");
  //   } 
  // }
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
    console.log(characters);
  } 
  let password = "";
  for (let i = 0; i < passwordLength; i++) {
  let random = Math.floor(Math.random() * characters.length);
  password += characters[random];
  }
  return password;
}