// Assignment Code
document.querySelector("#generate").addEventListener("click", writePassword);

// assigns the clipboard var to the html document
const clipboard = document.getElementById("clipboard")

// copy to clipboard function
clipboard.addEventListener('click', e => {
  // varible to be able to select the password and perform a command on it
  const textOutput = document.getElementById('password')

    // command to select the password and copy it to te clipboard
    textOutput.select();
    document.execCommand('copy');
    // an alert box allowing the individual to be notified when the password has been copied
    window.alert("You have successfully copied your UNIQUE password to your clipboard 📋") 
  
})

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

// creating variables for my functions to call from and use
var lengthCheck = "";
var uppercaseCheck;
var lowercaseCheck;
var numbersCheck;
var symbolsCheck;

// my generate password function which includes popup windows and generating the password
function generatePassword() {
  var lengthCheck = (window.prompt("How many characters would you like your password to be (from 8 to 128) 📏"));

  // checking if the user has inputed a value from at least 8-128
  while(lengthCheck <= 7 || lengthCheck >= 129) {
    // if the user puts anything below 8 or higher than 128 the user is alerted with a message and to try again
    alert("😞 Password length must be between 8-128 characters. Please try again!")
    var lengthCheck = (prompt("How many characters would you like your password to be (from 8 to 128) 📏"));
  }

  // sending all the popups so users can pick from the different character types
  var uppercaseCheck = confirm("Would you like uppercase characters in your password? 🔠");
  var lowercaseCheck = confirm("Would you like lowercase characters in your password? 🔡");
  var numbersCheck = confirm("Would you like numbers in your password? 🔢");
  var symbolsCheck = confirm("Would you like symbols in your password? 🔣");

  // error checking - making sure the user atleast choose one option
  while(uppercaseCheck === false && lowercaseCheck === false && numbersCheck === false && symbolsCheck === false) {
    // sending an alert so users know they need to atleast choose one option
    window.alert("You must atlease include one of the options to generate a password 💢")

    // looping all the popups so users can pick from the different character types
    var uppercaseCheck = confirm("Would you like uppercase characters in your password? 🔠");
    var lowercaseCheck = confirm("Would you like lowercase characters in your password? 🔡");
    var numbersCheck = confirm("Would you like numbers in your password? 🔢");
    var symbolsCheck = confirm("Would you like symbols in your password? 🔣");
  }

  // this checks if users have clicked yes on the popup confirm box if true it concats the random value generated into the array
  let charPass = [];
  if (uppercaseCheck) charPass = charPass.concat(UPPERCASE_CHAR)
  if (lowercaseCheck) charPass = charPass.concat(LOWERCASE_CHAR)
  if (numbersCheck) charPass = charPass.concat(NUMBERS_CHAR)
  if (symbolsCheck) charPass = charPass.concat(SYMBOLS_CHAR)

  // loop to convert the password with ASII characters to actual characters.
  const passwordCharacters = []
  for (let i = 0; i < lengthCheck; i++) {
    const characterCode = charPass[Math.floor(Math.random() * charPass.length)]
    passwordCharacters.push(String.fromCharCode(characterCode))
  }

  // returns the converted output into passwordCharacters which is stored into an array which will be passed through the variable
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
  // setting the password to equal to my function which generates the random password
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  // printing the generated password into the html so users can see/ use it
  passwordText.value = password;
}