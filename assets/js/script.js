// Assignment Code
document.querySelector("#generate").addEventListener("click", writePassword);

// creating arrays for the special characters so i dont have to manually type each code, i can just convert the ASII code to the actual character
const UPPERCASE_CHAR = arrayFromLowToHigh(65, 90)
const LOWERCASE_CHAR = arrayFromLowToHigh(97, 122)
const NUMBERS_CHAR = arrayFromLowToHigh(48, 57)
const SYMBOLS_CHAR = arrayFromLowToHigh(33, 47).concat(
  arrayFromLowToHigh(58, 64)
).concat(
  arrayFromLowToHigh(91, 96)
).concat(
  arrayFromLowToHigh(123, 126)
)

var lengthCheck = "";
var uppercaseCheck;
var lowercaseCheck;
var numbersCheck;
var symbolsCheck;

function generatePassword() {
  var lengthCheck = (window.prompt("How many characters would you like your password to be (from 8 to 128) 📏"));

  while(lengthCheck <= 7 || lengthCheck >= 129) {
    alert("😞 Password length must be between 8-128 characters. Please try again!")
    var lengthCheck = (prompt("How many characters would you like your password to be (from 8 to 128) 📏"));
  }

  var uppercaseCheck = confirm("Would you like uppercase characters in your password? 🔠");
  var lowercaseCheck = confirm("Would you like lowercase characters in your password? 🔡");
  var numbersCheck = confirm("Would you like numbers in your password? 🔢");
  var symbolsCheck = confirm("Would you like symbols in your password? 🔣");

  while(uppercaseCheck === false && lowercaseCheck === false && numbersCheck === false && symbolsCheck === false) {
    window.alert("You must atlease include one of the options to generate a password 💢")
    var uppercaseCheck = confirm("Would you like uppercase characters in your password? 🔠");
    var lowercaseCheck = confirm("Would you like lowercase characters in your password? 🔡");
    var numbersCheck = confirm("Would you like numbers in your password? 🔢");
    var symbolsCheck = confirm("Would you like symbols in your password? 🔣");
  }
  
  let charPass = [];
  if (uppercaseCheck) charPass = charPass.concat(UPPERCASE_CHAR)
  if (lowercaseCheck) charPass = charPass.concat(LOWERCASE_CHAR)
  if (numbersCheck) charPass = charPass.concat(NUMBERS_CHAR)
  if (symbolsCheck) charPass = charPass.concat(SYMBOLS_CHAR)

  const passwordCharacters = []
  for (let i = 0; i < lengthCheck; i++) {
    const characterCode = charPass[Math.floor(Math.random() * charPass.length)]
    passwordCharacters.push(String.fromCharCode(characterCode))
  }

  return passwordCharacters.join('')
}


// my array loop which counts from low number to high number (from a range) to gather the expected values for each character code set
function arrayFromLowToHigh(low, high) {
  const array = []
  for (let i = low; i <= high; i++) {
    array.push(i)
  }
  return array
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}