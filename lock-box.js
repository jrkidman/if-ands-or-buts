/*## `lock-box.js`

You've been contracted to write the software for a lock box. 
Write a program called `lock-box.js` that stores the pin code 
to the lock box in a variable at the top of your program (i.e.: `const pinCode = '1234';`). 

After that, use `prompt-sync` to prompt the user for the passcode. If the user gets 
the passcode exactly correct, log a success message containing the word, "success". If not, 
log a failure message containing the word, "failure".

**Note:** In this assignment, the `node_modules` folder containing the `prompt-sync` 
dependency does not already exist. To add it to this project, navigate to this repository using 
the command line then install it using the Node Package Manager with `npm install prompt-sync`.

1- pin code goes in variable
2- prompt user for pin code
3a- if user gets pin code correct, log success
3b- if user gets pin code incorrect, log failure
*/


const prompt = require("prompt-sync")();

let pin = "1234";
let passcode = prompt(" Please enter your 4-digit PIN: ");

if (passcode === pin){
    console.log("Success!");
}
else if (passcode !== pin){
    console.log("Failure, please try again. ");
}