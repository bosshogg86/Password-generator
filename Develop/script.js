// Assignment Code
var generateBtn = document.querySelector("#generate");

// My Variables
var passwordLength;
var lowercase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var uppercase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var numeric = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var special = ["~`!#$%^&*+=-[]\\\';,/{}|\":<>?"];

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
  confirm("Do you want lowercase letters?");
  confirm("Do you want UPPERCASE letters?");
  confirm("Do you want numbers?"); 
  confirm("Do you want special characters?");  
}

// My for loop
// for (var i=0; i<passwordLength.length; i++) {

// }