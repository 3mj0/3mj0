const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});     
    
let correctNumber = 7;
let userGuess = null;

const gameLoop = () => {

    rl.setPrompt("Guess a number between 1 and 10! ");
    rl.prompt();
    rl.on('line', (answer) => {
        userGuess = parseInt(answer, 10);

        if (isNaN(userGuess)) {
            console.log("Please enter a valid number! ");
            rl.prompt();
        } else if (userGuess < correctNumber) {
            console.log("Too Low, Try Again! ");
            rl.prompt();
        } else if (userGuess > correctNumber) {
            console.log("Too High, Try Again ");
            rl.prompt();
        } else {
            console.log("Congratulations!! You guess the number!");
            rl.close();
        }
    });
}
gameLoop();