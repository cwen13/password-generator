// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

/*Pseudo code

  +Prompt use
   -number of chars?
   -include special chars?
   -include upper case?
   -include lower case?
   -include numbers?
  +Build array of possible char to use
  +loop to build pass
   -loop until you get to number of chars

  
  */
