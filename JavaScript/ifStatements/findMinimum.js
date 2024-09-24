const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function findMinimum(a, b, c) {
    if (a < b && a < c) {
        return a;
    } else if (b < a && b < c) {
        return b;
    } else {
        return c;
    }
}

rl.question("Please enter the first integer (a): ", (answerA) => {
    let a = parseInt(answerA); 
    rl.question("Please enter the second integer (b): ", (answerB) => {
        let b = parseInt(answerB); 
        rl.question("Please enter the third integer (c): ", (answerC) => {
            let c = parseInt(answerC); 
            if (!isNaN(a) && !isNaN(b) && !isNaN(c)) {
                let min = findMinimum(a, b, c);
                console.log("The minimum of the three integers is: " + min);
            } else {
                console.log("Please enter valid integers!");
            }
            rl.close(); 
        });
    });
});