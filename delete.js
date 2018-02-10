var os = require("os");
const fs = require('fs-extra')

//cmd.exe /k node D:\\FastDelete\\delete.js %V
const args = process.argv
const path = args[2]
console.log('delete path :' + path)
fs.removeSync(path)
console.log("remove " + path + " done")
