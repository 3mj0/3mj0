const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function calculateDiscount(originalPrice, day) {
    if (day === 6 || day === 7) { 
        const discount = originalPrice * 0.10; 
        const newPrice = originalPrice - discount;
        return newPrice;
    }
    return originalPrice; 
}

function startDiscountCalculator() {
    rl.question("Enter the original price of the product: ", (inputPrice) => {
        const originalPrice = parseFloat(inputPrice);
        if (isNaN(originalPrice) || originalPrice < 0) {
            console.log("Error: Please enter a valid non-negative number for the price.");
            rl.close();
            return;
        }
        rl.question("Enter the day of the week (1-7, where 1=Monday and 7=Sunday): ", (inputDay) => {
            const day = parseInt(inputDay);
            if (isNaN(day) || day < 1 || day > 7) {
                console.log("Error: Please enter a valid integer for the day (1-7).");
                rl.close();
                return;
            }
            const newPrice = calculateDiscount(originalPrice, day);
            console.log(`The new price of the product is: $${newPrice.toFixed(2)}`);
            rl.close(); 
        });
    });
}

startDiscountCalculator();