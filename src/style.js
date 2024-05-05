import chalk from "chalk";
import figlet from "figlet";

const Icon = `
  _______
 /      //
/______//
(______(/
`;

const success = chalk.bold.green;
const error =  chalk.bold.yellow;
const warning = chalk.bold.yellow;

const dictionary = Icon+figlet.textSync(
    "Word Finder",
    {
        font: "Shadow",
        horizontalLayout:"full",
        verticalLayout:"full",
        width: 100,
        height: 100,
        whitespaceBreak:true
    }, 
    // write a callback function through app.js
);

console.log(dictionary);
