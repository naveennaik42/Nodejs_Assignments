function getNameFromCommandLine() {
    // Write you code here, name should be taken as args in process.argv
    return process.argv[5]; 
}

function getNameFromEnv() {
    // Write your code here
    return process.env.name;
   
}

function getNameFromReadLine() {
    // Write your code here
    const input = readline.createInterface({
        input:process.stdin,
        output:process.stdout
    })
    const printname = input.question()
    console.log(printname)

// const readline = require("readline");
// const r1 = readline.question()
// console.log(r1)
}

module.exports = {
    getNameFromCommandLine,
    getNameFromEnv,
    getNameFromReadLine
}