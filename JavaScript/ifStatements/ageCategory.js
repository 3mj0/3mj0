const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function ageCategory(age) {
    if (age >= 0 && age <= 12) {
        return "Child";
    } else if (age >= 13 && age <= 19) {
        return "Teen";
    } else if (age >= 20 && age <= 64) {
        return "Adult";
    } else if (age >= 65) {
        return "Senior";
    } else {
        return "Invalid age!"
    }
}

rl.question("Please enter your age: ", (answer) => {
    let age = parseInt(answer);
    if (!isNaN(age)) {
        let category = ageCategory(age);
        console.log("You are in the " + category + " age group!");
    } else {
        console.log("That is not a valid age!");
    }
    rl.close();
});