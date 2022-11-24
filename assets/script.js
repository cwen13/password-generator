// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
    const alpha = "abcdefghijklmnopqrstuvwxyz";;
    const specialChar = "!@\#$%^&*()_+-=`~;:[]\{}|<>?\"'";
    var possibleChars = [];
    
/*Pseudo code
  +Prompt use
   -number of chars?
   -include special chars?
   -include upper case?
   -include lower case?
   -include numbers?
   -include space?
  +Build array of possible char to use
  +loop to build pass
   -loop until you get to number of chars  
  */

    // get length of password
    let numChar_num = Number(prompt("How many characters should you passwrod be?"));
    while (((numChar_num < 8) || (numChar_num > 128)) || isNaN(Number(numChar_num))) {
	numChar_num = Number(prompt("Please enter a number between 8 and 128."));
    }
    numChar_num = Math.floor(numChar_num);

    const cbSpecial = document.querySelector('#special');
    const cbUPPER = document.querySelector('#upper');
    const cbLower= document.querySelector('#lower');
    const cbNumbers = document.querySelector('#numbers');
    const cbSpace = document.querySelector('#space');

    if (cbSpecial.checked) {
	possibleChars = possibleChars.concat(specialChar.split(""));
    }
    if (cbUPPER.checked) {
	possibleChars = possibleChars.concat(alpha.toUpperCase().split(""));
    }
    if (cbLower.checked) {
	possibleChars = possibleChars.concat(alpha.split(""));
    }
    if (cbNumbers.chcked) {
	possibleChars = possibleChars.concat("0123456789".split(""));
    }
    if (cbSpace.checked) {
	possibleChars = possibleChars.concat(" ");
    }
    
    
 /* BASIC CODE   
    // include special characters?
    if (confirm("Use $pec;@| characters?")) {
	possibleChars = possibleChars.concat(specialChar.split(""));
	if (confirm("Include space?")) {
	    possibleChars = possibleChars.concat(" ");
	}
    }
    // include UPPER CASE?
    if (confirm("Use UPPER CASE letters?")) {
	possibleChars = possibleChars.concat(alpha.toUpperCase().split(""));
    }
    // include lower case
    if (confirm("Use lower case letters?")) {
	possibleChars = possibleChars.concat(alpha.split(""));
    }
    // include numbers?
    if (confirm("Use numbers")) {
	possibleChars = possibleChars.concat("0123456789".split(""));
    }
*/

    //build the passwords
    let character = "";
    let password = "";
    for (let i = 0; i < numChar_num; i++) {
	character = String(possibleChars[Math.floor((Math.random()*100) % possibleChars.length)]);
	password += character;
    }
    return password;
}
	
    
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

