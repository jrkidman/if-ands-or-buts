/*## Extra Credit: `triple-bill-splitter.js`

Write a new program that expands on `bill-splitter.js` This program should be able to 
split a bill between three people! Once again, prompt the user for how much each person 
paid. Then, log out messages indicating who needs to pay who. 

You'll probably need to use a system of equations to solve this!

1- prompt for how much person1 paid? (save input as person1Paid)
2- prompt for how much person2 paid? (save input as person2Paid)
3- prompt for how much person3 paid? (save input as person3Paid)
4- assign totalBill variable with value of (person1Paid + person2Paid + person3Paid)
5- assign evenBill variable with totalBill/3
6- evaluate who owes how much?
    math in if statements will be:
     evenBill = totalBill/3 minus each persons paid amount
7- log statements for:
 if paid amount is smaller than evenly owed amount
 if paid amount is greater than evenly owed amount

 after-notes...ended up setting each result was a variable within each if statement, so i could limit the decimal places in the logged result
*/

const prompt = require("prompt-sync")();


//steps 1, 2, and 3 prompts
let person1Paid = Number(prompt("How much did Person 1 pay? "));
let person2Paid = Number(prompt("How much did Person 2 pay? "));
let person3Paid = Number(prompt("How much did Person 3 pay? "));

//steps 4 and 5 variables
let totalBill = person1Paid + person2Paid + person3Paid;
let evenBill = totalBill / 3;

if (evenBill > person1Paid) {
    let owes1 = evenBill - person1Paid;
    let owed1 = person1Paid - evenBill;
    console.log("Person 1 owes $" + owes1.toFixed(2));
} else if (evenBill < person1Paid) {
    let owes1 = evenBill - person1Paid;
    let owed1 = person1Paid - evenBill;
    console.log("Person 1 is owed $" + owed1.toFixed(2));
}

if (evenBill > person2Paid) {
    let owes2 = evenBill - person2Paid;
    let owed2 = person2Paid - evenBill;
    console.log("Person 2 owes $" + owes2.toFixed(2));
} else if (evenBill < person2Paid) {
    let owes2 = evenBill - person2Paid;
    let owed2 = person2Paid - evenBill;
    console.log("Person 2 is owed $" + owed2.toFixed(2));
}

if (evenBill > person3Paid) {
    let owes3 = evenBill - person3Paid;
    let owed3 = person3Paid - evenBill;
    console.log("Person 3 owes $" + owes3.toFixed(2));
} else if (evenBill < person3Paid) {
    let owes3 = evenBill - person3Paid;
    let owed3 = person3Paid - evenBill;
    console.log("Person 3 is owed $" + owed3.toFixed(2));
}





