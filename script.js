// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {

  alert("You will select password criteria");
  do var charCount = prompt("how many characters does it need to be? Min 8 Max 128.");
  while (charCount > 128 || charCount < 8)
  if (Number.isInteger(charCount)) {
    do var charCount = prompt("how many characters does it need to be? Min 8 Max 128.");
  while (charCount > 128 || charCount < 8)
  }
  //criteria function
  function criteriator() {
    alert("Type 'yes' or 'no' if you want the following criteria. Select 'yes' to least one.");
    
    do var stringLower = prompt("Do you want lowercase characters?").toLowerCase();
    while (stringLower !== 'yes' && stringLower !== 'no')

    do var stringUpper = prompt("Do you want uppercase characters?").toLowerCase();
    while (stringUpper !== 'yes' && stringUpper !== 'no')

    do var stringNum = prompt("Do you want numeric characters?").toLowerCase();
    while (stringNum !== 'yes' && stringNum !== 'no')

    do var stringSpecial = prompt("Do you want special characters?").toLowerCase();
    while (stringSpecial !== 'yes' && stringSpecial !== 'no')

  return [stringLower, stringUpper, stringNum, stringSpecial];
  }

  //criteria array
  let criteriaArray = new criteriator();
  var noFreq = 0;

  //at least one yes
  for (var answer in criteriaArray) (criteriaArray[answer] === 'no') ? noFreq++ : null;
  (noFreq === 4) ? criteriaArray = new criteriator() : null;

  //hardcoded data
  var alphaLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var alphaUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  var specials = [" ", "!", "#", "$", "%", "&", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", ">", "=", "?", "@", "[", "]", "^", "_", "{", "|", "}", "~", "\'", "\"", "\\", "\`"];
  
  //make variable which will house the validated data
  var validatedChars = [];
  (criteriaArray[0] === 'yes') ? Array.prototype.push.apply(validatedChars, alphaLower) :null;
  (criteriaArray[1] === 'yes') ? Array.prototype.push.apply(validatedChars, alphaUpper) :null;
  (criteriaArray[2] === 'yes') ? Array.prototype.push.apply(validatedChars, numbers) :null;
  (criteriaArray[3] === 'yes') ? Array.prototype.push.apply(validatedChars, specials) : null;
  
  //generate random characters up to the requested legnth
  passGen = [];
  for (i = 0; i < charCount; i++){
    var randomNum = Math.floor((Math.random() * validatedChars.length));
    console.log(randomNum);
    passGen = passGen + validatedChars[randomNum];
    console.log(passGen);
  }
  
  
  return passGen;
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
