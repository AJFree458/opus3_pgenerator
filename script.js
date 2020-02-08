// Assignment Code
var generateBtn = document.querySelector("#generate");

//Variables for use in function
var lowercase = "abcdefghijklmnopqrstuvwxyz";
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "0123456789";
var symbols = "!@#$%^&*()_+~`|}{[]:;?><,./-=";
var pwField = document.getElementById("password")
var plength;
var generatePassword;
var pwCharSet;

// Write password to the #password input
function writePassword() {
  writePassword = "";
  pwCharSet = "";
  //Write the prompt for the password length
  var plength = prompt ("What length of password do you want? Must be a number between 8 and 128");
  //give alerts for lengths that are too long or too short
    if(plength < 8) {
      alert("Please select a number between 8 and 128!");
    }

    if(plength > 128) {
      alert("Please select a nuber between 8 and 128!")
    }

  //Write the confirms for the four variables
  var lowercase = confirm("Do you wish to use Lowercase letters in your password?");
  //Write what to do with the variable if true value is returned
    if (lowercase == true) {
      pwCharSet += lowercase;
    }

  var uppercase = confirm("Do you wish to use Uppercase letters in your password?");
    if (uppercase == true) {
      pwCharSet += lowercase;
    }
  var numbers = confirm("Do you wish to use Numbers in your password?");
    if (numbers == true) {
      pwCharSet += lowercase;
    }
  var symbols = confirm("Do you wish to use Symbols in your password?");
    if (symbols == true) {
      pwCharSet += lowercase;
    }
  for (let i = 8; i <= plength; i++) {
        generatePassword += pwCharSet.charAt(Math.floor(Math.random() * pwCharSet.length));
      }

  pwField.innerHTML = generatePassword
  
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
