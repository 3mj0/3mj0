const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

function calculateCompound(principal, quarterlyRates) {
    let amount = principal;
    for (let i = 0; i < quarterlyRates.length; i++) {
        amount *= (1 + quarterlyRates[i] / 100);
    }
    return amount - principal; 
}

rl.question("Please enter the principal amount: ", (principalInput) => {
    const principal = parseFloat(principalInput);
    
    if (isNaN(principal) || principal <= 0) {
        console.log("Invalid input!");
        rl.close();
        return;
    }
    
    const quarterlyRates = [];
    const prompts = [
        "Q1 Interest Rate: ",
        "Q2 Interest Rate: ",
        "Q3 Interest Rate: ",
        "Q4 Interest Rate: ",] 
    const askRate = (index) => {
        if (index < prompts.length) {
            rl.question(prompts[index], (rateInput) => {
                const rate = parseFloat(rateInput);
                
                
                if (isNaN(rate) || rate < 0) {
                    console.log("Invalid input! Please enter a non-negative numeric value for the rate.");
                    rl.close();
                    return;
                }
                quarterlyRates.push(rate);
                askRate(index + 1); 
            });
        } else {
            
            const compoundInterest = calculateCompound(principal, quarterlyRates);
            console.log(`\nCompound Interest (CI) earned: $${compoundInterest.toFixed(2)}`);
            rl.close();
        }
    };
    askRate(0); 
});