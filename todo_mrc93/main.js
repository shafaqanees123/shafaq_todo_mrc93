#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from 'chalk';
let todos = [];
let condition = true;
console.log(chalk.magentaBright.bold("\n\t Welocome to Shafaq Anees Todo-List Application \n"));
while (condition) {
    let addtask = await inquirer.prompt([
        {
            name: 'todo',
            type: 'input',
            message: chalk.green('what do you want to add in your todo list?')
        },
        {
            name: 'addMoreTodo',
            type: 'confirm',
            message: chalk.blueBright('do you want to add more in your todo list?'),
            default: 'false'
        },
    ]);
    todos.push(addtask.todo);
    condition = addtask.addMoreTodo;
    console.log(chalk.yellowBright(`Your Update todo list is : ${todos} `));
}
