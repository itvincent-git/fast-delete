var os = require("os");
const fs = require('fs-extra')
var execa = require('execa');

var path = __dirname
const regFile = "autogen-reg.reg"
var path = path.replace("\\", "\\\\\\\\")
console.log("current path = " + path)

var data = "Windows Registry Editor Version 5.00\n\n" +
"[HKEY_CLASSES_ROOT\\Folder\\shell\\fastdelete]\n" +
"@=\"极速删除\"\n\n"+
"[HKEY_CLASSES_ROOT\\Folder\\shell\\fastdelete\\command]\n" +
"@=\"cmd.exe /k node " + path + "\\\\\\\\delete.js %V\"\n";

fs.writeFile(regFile, data, function(err){
    if (err) {
        console.error(err)
        return
    }
    console.log("generate reg file success")

    cmd(regFile, [], function(result){
        console.log('install reg done')      
    });
})

function cmd(cmd, params, cb) {
    var e = execa(cmd, params);
    e.stdout.pipe(process.stdout);
    e.then(cb);
}