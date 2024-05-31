#!/usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
// 1) user will write a sentence or paragraph.
// 2) programm will count the number of words exluding whitespaces.
console.log(chalk.bold.blueBright("WELCOME TO ANAS'S WORD COUNTER APP!"));
console.log(chalk.bold.greenBright("HOPE YOU WILL LIKE IT!"));
console.log("=".repeat(50)); //===================
// first we have to ask user for text/input:
let textFromUser = await inquirer.prompt({
    name: "text",
    type: "input",
    message: chalk.italic.red("Please enter your sentence/paragraph:"),
});
/* now we will remove white spaces from leading
and trailing spaces of text using trim method:*/
let textWithoutSpaces = textFromUser.text.trim();
/* now we will use split method to make an array
of words present inside text:*/
let finalTextFromUser = textWithoutSpaces.split(" ");
/* now we will count the number of words in final
text from user using length method:*/
console.log("=".repeat(50)); //=====================
let noOfWords = finalTextFromUser.length;
console.log(`Your text has total of ${chalk.bold.redBright(noOfWords)} words.`);
console.log("=".repeat(50)); //=====================
console.log(chalk.bold.blueBright("THANKS FOR USING MY WORD COUNTER APP. SEE YOU AGAIN."));
