#! /usr/bin/env node

import inquirer from "inquirer";

console.log("Welcome to quiz application");

const questions = [
  {
    name: "q1",
    message: "What is JavaScript?",
    type: "list",
    choices: [
      "A programming language",
      "A coffee brand",
      "A type of car",
      "A music band",
    ],
    answer: "A programming language",
  },
  {
    name: "q2",
    message: "What is the difference between JavaScript and Java?",
    type: "list",
    choices: [
      "They are the same",
      "Java is a type of JavaScript",
      "JavaScript is a type of Java",
      "They are different programming languages",
    ],
    answer: "They are different programming languages",
  },
  {
    name: "q3",
    message: "What are the data types supported in JavaScript?",
    type: "list",
    choices: ["Radius", "String", "Symbol", "Decimal"],
    answer: "String",
  },
  {
    name: "q4",
    message: "What is a closure in JavaScript?",
    type: "list",
    choices: [
      "A type of loop",
      "A function inside another function",
      "An error",
      "A type of variable",
    ],
    answer: "A function inside another function",
  },
  {
    name: "q5",
    message: "What is the use of 'this' keyword in JavaScript?",
    type: "list",
    choices: [
      "To refer to the current object",
      "To create a new object",
      "To delete an object",
      "None of the above",
    ],
    answer: "To refer to the current object",
  },
  {
    name: "q6",
    message:
      "What is the difference between '==' and '===' operators in JavaScript?",
    type: "list",
    choices: [
      "There is no difference",
      "'==' compares value, '===' compares value and type",
      "'===' compares value, '==' compares value and type",
      "None of the above",
    ],
    answer: "'==' compares value, '===' compares value and type",
  },
  {
    name: "q7",
    message: "What is a promise in JavaScript?",
    type: "list",
    choices: [
      "A data type",
      "An object that may produce a single value some time in the future",
      "A function",
      "None of the above",
    ],
    answer: "An object that may produce a single value some time in the future",
  },
  {
    name: "q8",
    message: "What is async/await in JavaScript?",
    type: "list",
    choices: [
      "A type of loop",
      "A type of function",
      "A way to handle promises",
      "None of the above",
    ],
    answer: "A way to handle promises",
  },
  {
    name: "q9",
    message: "What is the event loop in JavaScript?",
    type: "list",
    choices: [
      "A type of loop",
      "A type of function",
      "A process in the JavaScript engine",
      "None of the above",
    ],
    answer: "A process in the JavaScript engine",
  },
  {
    name: "q10",
    message: "What is hoisting in JavaScript?",
    type: "list",
    choices: [
      "A type of loop",
      "A type of function",
      "A JavaScript mechanism where variables and function declarations are moved to the top of their containing scope",
      "None of the above",
    ],
    answer:
      "A JavaScript mechanism where variables and function declarations are moved to the top of their containing scope",
  },
];
let score = 0;
const quizQuestion = await inquirer.prompt(questions);
for (const question of questions) {
  if (quizQuestion[question.name] === question.answer) {
    score++;
  }
}

console.log(`Your score is ${score} out of ${questions.length}`);
