const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

function taxBracket(income) {
    if (income <= 10000) {
        return '10%';
    } else if (income <= 50000) {
        return '20%';
    } else {
        return '30%';
    }
}

rl.question("Please enter you annual income: ", (input) => {
    const annual = parseFloat(input);

    if (isNaN(annual) || annual <0) {
        console.log("Invalid Entry");
    } else {
        const bracket = taxBracket(annual);
        console.log(`With your annual income of $${annual.toFixed(2)}, you fall into the ${bracket} tax bracket.`);
    }
    rl.close();
});