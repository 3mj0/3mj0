const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})
    
function movieRatings(age) {
    let ratings = [];
    if (age >= 17) {
        ratings.push('R');
    }
    if (age >= 13) {
        ratings.push('PG-13');
    }
    ratings.push('G'); 
    return ratings;
}
rl.question("Enter your age please. ", (input) => {
    const age = parseInt(input);

    if (isNaN(age) || age < 0) {
        console.log("Invalid age entered.");
    } else {
        const ratings = movieRatings(age);
        console.log(`You are allowed to watch movies rated: ${ratings.join(', ')}`);
    }
    rl.close();
}); 