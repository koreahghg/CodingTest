const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let n;

rl.on('line', function (line) {
    n = Number(line);
}).on('close', function () {
    for (let i = 1; i <= n; i++) {
        console.log('*'.repeat(i));
    }
});