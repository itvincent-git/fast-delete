const os = require("os");
const fs = require('fs-extra')
const readlineSync = require('readline-sync');
const chalk = require('chalk')

const args = process.argv
const path = args[2]

// Wait for user's response.
var b = readlineSync.question('Delete path: \n' + chalk.red.bold.bgWhite(path) +'\nYes(Y) / No(N)? :');
if(b === 'Y' || b === 'y' || b === 'Yes' || b === 'yes'){
    //cmd.exe /k node D:\\FastDelete\\delete.js %V
    console.log('Deleting:' + chalk.red.bold.bgWhite(path))
    fs.removeSync(path)
    console.log(chalk.white.bold.bgGreen('Remove done.'))
}else{
    console.log(chalk.white.bold.bgYellow('Canceled.'))
}

