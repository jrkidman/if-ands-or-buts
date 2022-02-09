/*## `bill-splitter.js`

You've once again been contracted to write a program, this time for an app that 
helps two people split a bill at a restaurant evenly.
Write a program called `bill-splitter.js` that prompts the user for how much Person 1's items are , 
then for how much Person 2's items are. It should then log out the message, 'Person 1 owes $_____' or 'Person 2 owes $_____' depending on who owes who.


1- prompt for how much person1 paid? (save input as person1Paid)
2- prompt for how much person2 paid? (save input as person2Paid)
3- assign total bill to a variable
4- assign the evenly split bill to a variable
5- evaluate who owes how much?
    math will be:
     (totalBill/2 minus each person's paid amount)
6-log statements

*/

const prompt = require("prompt-sync")();

//steps 1 and 2
let person1Paid = Number(prompt("How much did Person 1 pay? "));
let person2Paid = Number(prompt("How much did Person 2 pay? "));

//steps 3 and 4
let totalBill = person1Paid + person2Paid
let evenBill = totalBill/2;

//step 5
if (evenBill > person1Paid) {
    console.log("The total bill is $" + totalBill + ". Person 1 owes Person 2 $" + (evenBill - person1Paid));
}
else if (evenBill > person2Paid){
    console.log("The total bill is $" + totalBill + ". Person 2 owes Person 1 $" + (evenBill - person2Paid));
}
