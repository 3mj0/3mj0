const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function isLeapYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0 || year % 400 === 0)) {
        return true;
    } else {
        return false;
    }
}

rl.question("Please enter the year to check: ", (answer) => {
    let year = parseInt(answer);
    
    if (!isNaN(year)) {
        if (isLeapYear(year)) {
            console.log(year + " is a leap year.");
        } else {
            console.log(year + " is not a leap year.")
        }
    } else {
        console.log("That is not a valid year!");
    }
    rl.close();
}); 