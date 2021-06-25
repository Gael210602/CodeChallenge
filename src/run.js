var replacer = require('./index');
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('Write your test: ', test => {
    console.log(replacer(test));
    readline.close();
});