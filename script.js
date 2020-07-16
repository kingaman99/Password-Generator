// Assignment Code
var generateBtn = document.querySelector("#generate");
// Add event listener to generate button
generateBtn.addEventListener("click", generatePassword);
var LOWERCASE = "abcdefghijklmnopqrstuvwxyz";
var UPPERCASE = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var NUMBERS = "0123456789"
var SYMBOLS = "!@#$%^&&*"
// Write password to the #password input
function generatePassword() {
  console.log("generate password");
  // var password = generatePassword();
  var passwordText = document.querySelector("#password");


  var passwordLength = promptUserForPasswordLength();
  var criteriaOpitions = promptUserForCriteria();

  var password = createPassword(passwordLength, criteriaOpitions);

  passwordText .value = password
  // render password on paige


  /// create for loop for password characters
  // for(var i = 0; < = complexity;)}
  // password = password + values.charAt(Math.floor(Math.random() * Math.floor(value.length -1)))


  //   passwordText.value = password;

}

function promptUserForPasswordLength() {
  var userInput = parseInt(prompt("provide a password length between 8-128 characters"));
  console.log(userInput)
  if (userInput) {
    if (userInput > 8 && userInput < 128) {
      return userInput
    }
  }

}
function promptUserForCriteria() {

  var lowercase = confirm("include lower case letters")
  var uppercase = confirm("include upper case letters")
  var numbers = confirm("include numbers")
  var symbols = confirm("include symbols")
  return [lowercase, uppercase, numbers, symbols]

}
function createPassword(length, opitions) {
  var sources = generateSource (opitions);
  var password = ""
  for (let index = 0; index <length; index++) {
    var random = Math.floor(Math.random()*sources.length)
    password += sources [random]
  }
  return password
}
function generateSource(opitions){
  var sources = []
  if (opitions[0]){
    sources = [...LOWERCASE]
  }
  if (opitions[1]) {
    sources = [...sources,...UPPERCASE]
    
  }
  if (opitions[2]){
    sources = [...sources,...NUMBERS]
  }
  if (opitions[3]){
    sources = [...sources,...SYMBOLS]
  }
  return sources 
}

/**
 * arrays for each type of characte
 * paige load;;
 * ask user if they want to make a password
 *  use alert to display message
 * button to genterate password
 *  add event listner to button
 *
 *
 * user clicks button
 * prompt user for password lenth must be 8 -128 letters
 *validate user input
    8<userinput<128 userinput must be number
    if invalid prompt user again

  save in variable


  ask user if wants lower case letters
  user comfirm for lower case letters

  save respone varriable
  comfirm if user wants numbers
  save response varriable
  comfirm if user wants symbols
  save in response variable
  comfirm if user wants upper case
  save in response varriable

  generate password
  create critquera array
    for each boolean add type if true
    if (lowercase === true )add lower case value to array
  use for loop based on password length
    random character
    create a random number
    use random number to pull a random value from array


  display the password
  */
