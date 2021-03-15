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

const lengthCheck = "";
const uppercaseCheck;
const lowercaseCheck;
const numbersCheck;
const symbolsCheck;

function generatePassword() {
  const LengthCheck = (promt("How many characters would you like your password to be (from 8 to 128) 📏"));

  while(lengthCheck <= 7 || lengthCheck >= 129) {
    window.alert("😞 Password length must be between 8-128 characters. Please try again!")
  }

}


// my array loop which counts from low number to high number (from a range) to gather the expected values for each character code set
function arrayFromLowToHigh(low, high) {
  const array = []
  for (let i = low; i <= high; i++) {
    array.push(i)
  }
  return array
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}