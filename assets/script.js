// Assignment code here

let bucket= ""
let passcode = "" 
const char = {
        numbers:"0123456789",
        letterl:"qwertyuiopasdfghjklzxcvbnm",
        letteru:"QWERTYUIOPASDFGHJKLZXCVBNM",
        specialChar:"!\"#$%&'()*+,-./:;<=>[]^_`{|}~"

}

function generatePassword(){
        const length = prompt('How long do you need your password to be?')

        const lower = confirm('Do you need lowercase?') 
          if (lower) {
            bucket+=char.letterl;
          }
        const upper = confirm('Do you need uppercase?')
        if (upper) {
          bucket+=char.letteru;
        }
        const num = confirm('Do you need numeric?')
        if (num) {
          bucket+=char.numbers;
        }
        const spec = confirm('Do you need special characters?')
        if (spec) {
          
         bucket+=char.specialChar;
        }


                if (length >= 8 && length <=128)
                { console.log('In range')}
                else{
                  alert('You must be between 8 & 128 characters')
                  return generatePassword(); 
                }

                if (bucket==="") {return generatePassword();}

                else{
          
                    for (let i = 0; i < length; i++) {
                
                    
                      console.log("first length"); 
                      console.log(bucket[Math.floor(Math.random() * bucket.length)]);
                      passcode+=bucket[Math.floor(Math.random() * bucket.length)];
                    }

                    return passcode; 
        }

      }

// Add alert for range
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
   
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
  

