const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function calculateFine(speedLimit, actualSpeed) {
    const excessSpeed = actualSpeed - speedLimit;
    if (excessSpeed <= 5) {
        return 0;
    } else if (excessSpeed <= 10) {
        return 50;
    } else if (excessSpeed <= 20) {
        return 100;
    } else if (excessSpeed <= 30) {
        return 200;
    } else {
        return "You have lost your license!!";
    }
}

rl.question("Please enter the speed limit: ", (limitInput) => {
    const speedLimit = parseFloat(limitInput);

    if (isNaN(speedLimit) || speedLimit <= 0) {
        console.log("Invalid Input!");
        rl.close();
        return;
    }
    rl.question("Please enter your speed: ", (actualInput) => {
        const actualSpeed = parseFloat(actualInput);

        if (isNaN(actualSpeed) || actualSpeed < 0) {
            console.log("Invalid Input");
            rl.close();
            return;
        }

        const fine = calculateFine(speedLimit, actualInput);

        if (fine > 0) {
            console.log(`You have a speeding fine! Your total is: $${fine}`);
        } else {
            console.log(`No fine! Please continue to drive safe! `);
        }
        rl.close();
    });
});