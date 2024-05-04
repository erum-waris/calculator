#!/usr/bin/env node 
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const inquirer_1 = __importDefault(require("inquirer"));
const answer = await inquirer_1.default.prompt([
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
if (answer.operator === "ADDITION") {
    console.log("your value is :", (answer.firstNumber + answer.secondNumber));
}
else if (answer.operator === "SUBTRACTION") {
    console.log("your value is:", (answer.firstNumber - answer.secondNumber));
}
else if (answer.operator === "MULTIPLICATION") {
    console.log("your value is:", (answer.firstNumber * answer.secondNumber));
}
else if (answer.operator === "DIVISION") {
    console.log("your value is:", (answer.firstNumber / answer.secondNumber));
}
else {
    console.log("Please select valid operator");
}
;
console.log("Thank you");
