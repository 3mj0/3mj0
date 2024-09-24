const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function calculateSimple(principal, rate, time) {
    return (principal * rate * time) / 100;
}

function calculateCompound(principal, quarterlyRate, time) {
    let amount = principal;
    for (let i = 0; i < quarterlyRate.length; i++) {
        amount *= (1 + quarterlyRate[i] / 100);
    }
    return amount - principal;
}
rl.question("Please enter your principal amount. ", (principalInput) => {
    const principal = parseFloat(principalInput);

    if (isNaN(principal) || principal <= 0) {
        console.log("Invalid Entry");
        rl.close();
        return;
    }

    const quarterlyRate = [];
    const prompts = ["Please enter Q1 interest rate: ",
                     "Please enter Q2 interest rate: ",
                     "Please enter Q3 interest rate: ",
                     "Please enter Q4 interest rate: ",];
    
    const askRate = (index) => {
        if (index < prompts.length) {
            rl.question(prompts[index], (rateInput) => {
                const rate = parseFloat(rateInput);

                if (isNaN(rate) || rate < 0) {
                    console.log("Invalid Entry.");

                    rl.close();
                    return;
                }
                quarterlyRate.push(rate);
                askRate(index + 1);
            });
        } else {
            const simpleInterest = calculateSimple(principal, 
                (quarterlyRate.reduce((acc, rate) => acc + rate, 0) / 4),
                1);
            
            const compoundInterest = calculateCompound(principal, quarterlyRate, 1);
            console.log(`\nSimple Interest earned: $${simpleInterest.toFixed(2)}`);
            console.log(`Compound Interest earned: $${compoundInterest.toFixed(2)}`);

            if (simpleInterest > compoundInterest) {
                console.log("Your Simple Interest earned more than your Compound Interest!");
            } else if (compoundInterest > simpleInterest) {
                console.log("Your Compound Interest earned more than your Simple Interest!");
            } else {
                console.log("Both Interests earned the same amount!")
            }
            rl.close();
            
        }
    };
    askRate(0);
});