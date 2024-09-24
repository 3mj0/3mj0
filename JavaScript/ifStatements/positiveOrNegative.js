const readline = require('readline');

const rl = readline.createInterface( {
    input: process.stdin,
    output: process.stdout
});

function checkNumber(x) {
    if (x > 0) {
        console.log(x + " is positive.")
    } else if (x < 0) {
        console.log(x + " is negative.")
    } else {
        console.log("The number is zero.")
    }
}

rl.question("Please enter an integer: ", (answer) => {
    let number = parseInt(answer); 
    if (!isNaN(number)) {
        checkNumber(number);
    } else {
        console.log("That's not a valid integer!");
    }
    rl.close(); 
});