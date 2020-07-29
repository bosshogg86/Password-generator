// Assignment Code
var generateBtn = document.querySelector("#generate");

// My Variables
const lowercase = ["abcdefghijklmnopqrstuvwxyz"];
const uppercase = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
const numeric = [0123456789];
const special = ["~`!#$%^&*+=-[]\\',;/{}|\":<>?"];
let characters = "";
let password = "";

// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Added event listeners to generate button
generateBtn.addEventListener("click", promptMe);
generateBtn.addEventListener("click", writePassword);

// Prompts/confirms for character types
function promptMe() {
  passwordLength = parseInt(
    prompt("Choose your password length, between 8 and 128 characters")
  );
  while (!passwordLength || passwordLength < 8 || passwordLength > 128) {
    alert("Choose a number between 8 and 128");
    passwordLength = parseInt(
      prompt("Choose your password length, between 8 and 128 characters")
    );
  }
  confirmLower = confirm("Do you want lowercase letters?");
  confirmUpper = confirm("Do you want UPPERCASE letters?");
  confirmNumeric = confirm("Do you want numbers?");
  confirmSpecial = confirm("Do you want special characters?");
  while (!confirmLower && !confirmUpper && !confirmNumeric && !confirmSpecial) {
    alert("You must select at least one character type!");
    confirmLower = confirm("Do you want lowercase letters?");
    confirmUpper = confirm("Do you want UPPERCASE letters?");
    confirmNumeric = confirm("Do you want numbers?");
    confirmSpecial = confirm("Do you want special characters?");
  }
}

// Function to create allowed characters
function generatePassword() {
  let characters = "";
  if (confirmLower) {
    characters += lowercase;
  }
  if (confirmUpper) {
    characters += uppercase;
  }
  if (confirmNumeric) {
    characters += numeric;
  }
  if (confirmSpecial) {
    characters += special;
  }
  let password = "";

  // Generates random string
  for (let i = 0; i < passwordLength; i++) {
    password += characters[Math.floor(Math.random() * characters.length)];
  }
  return password;
}
