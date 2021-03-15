# Password Generator by Benjamin Wilson (WITH PROMPTS ✨)

## DESCRIPTION 💣

I have developed a password generator that shows users prompts and confirm boxes in the browser, from these user inputs my function creates a unqiue completely random password that meets the criteria of the user. Whether that is to include uppercase, lowercase, numbers, symbols and the length of the password that is generated. for a little add on I have created a copy to clipboard button to make the generator easier to use!

I have also developed a second password generator, however this time the user has to input the information using checkboxes and a slider or number box! if you would like to view this project please check out the links at the bottom of this document! ✒️

> NOTE: This is the default styling of the website that I have recieved
![SCREENSHOT](https://user-images.githubusercontent.com/77607177/111131518-705e8f80-85cc-11eb-9171-f9cc4c9a6141.png)

> NOTE: Here is a screenshot of the functionallity of my password generator
![SCREENSHOT](https://user-images.githubusercontent.com/77607177/111131798-b6b3ee80-85cc-11eb-8b4d-4a02876199ff.PNG)

## FEATURES ⚔️

The features of this project include the following:

- A prompt box when the users click the generate button, which allows users to input the length of their desired password
- Multiple comfirm boxes which gives the user an option to include uppercase, lowercase, numbers or symbols
- Completely unique and never seen before password which follows the users criteria
- Copy to clipboard button which allows users just to click the clipboard button and the password is ready to use
- Error detection which makes sure users input a value from 8-128 characters, and users actually atleast select one input type

## REPOSITARY 📁

What I have been doing to keep my repo clean and up to date

- I have constantly used git add, commit and push to ensure all changes have been updated to the github repo
- added extensive comments describing changes and what they could possibly mean for the client or developer
- Created a high quality read me file using different methods to convey and display info

I have ensured all my code has been constantly pushed to my repository to ensure quality and easy of rollbacks. I have used code from my other password generator to make the code function the same however user inputs have been updated 💎

## CODE 🖥️

> NOTE: All of the CSS and HTML has been kept relatively untouched, the only modifications I have made is to include a copy to clipboard button in both thr HTML file and CSS File.

```JAVASCRIPT
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
```
> EXAMPLE: This shows my function to randomly generate a password plus all the prompts and confirm boxes which gather the user inputs to create a unique password fitting the users criteria

## LINKS 🔗

### THIS PROJECT
[REPOSITARY - THIS PROJECT](https://github.com/MarketingPlus/gen-password/)

[WEBSITE - THIS PROJECT](https://marketingplus.github.io/gen-password/)

### OTHER PASSWORD GENERATOR

[REPOSITARY - OTHER PROJECT](https://github.com/MarketingPlus/password-generator)

[WEBSITE - OTHER PROJECT](https://marketingplus.github.io/password-generator/)