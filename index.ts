#!/usr/bin/env node 


import inquirer from "inquirer";


const answer = await inquirer.prompt([
  { message: "Enter First number:", type: "number", name: "firstNumber" },
  { message: "Enter Second number:", type: "number", name: "secondNumber" },
  {
    message: "select your one operator to perform operation",
    type: "list",
    name: "operator",
    choices: ["ADDITION", "SUBTRACTION", "MULTIPLICATION", "DIVISION"],
  },
]);
// Conditional Statement;
if (answer.operator === "ADDITION"){
  console.log("your value is :",(answer.firstNumber + answer.secondNumber));
}else if (answer.operator === "SUBTRACTION"){
  console.log("your value is:" ,(answer.firstNumber - answer.secondNumber));
} else if (answer.operator === "MULTIPLICATION"){
  console.log("your value is:" ,(answer.firstNumber * answer.secondNumber) );
}else if(answer.operator === "DIVISION"){
  console.log("your value is:" ,(answer.firstNumber / answer.secondNumber));
}else{
 console.log( "Please select valid operator");
};
console.log("Thank you");

