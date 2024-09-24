const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function calculate(a, b, operator) {
    switch (operator) {
        case '+':
            return a + b;
        case '-':
            return a - b;
        case '*':
            return a * b;
        case '/':
            if (b !== 0) {
                return a / b;
            } else {
                return "Error: Division by zero is not allowed.";
            }
        default:
            return "Error: Invalid operator.";
    }
}

function startCalculator() {
    rl.question("Enter the first integer (a): ", (inputA) => {
        const a = parseInt(inputA);
        if (isNaN(a)) {
            console.log("Error: Please enter a valid integer for a.");
            rl.close();
            return;
        }
        rl.question("Enter the second integer (b): ", (inputB) => {
            const b = parseInt(inputB);
            if (isNaN(b)) {
                console.log("Error: Please enter a valid integer for b.");
                rl.close();
                return;
            }
            rl.question("Enter the operator (+, -, *, /): ", (operator) => {
                const result = calculate(a, b, operator);
                console.log(`Result: ${result}`);
                rl.close(); 
            });
        });
    });
}

startCalculator();