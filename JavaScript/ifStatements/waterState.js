const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout 
});

function getWaterState(temp) {
    if (temp <= 0) {
        return "Solid"; 
    } else if (temp > 0 && temp < 100) {
        return "Liquid"; 
    } else if (temp >= 100) {
        return "Gaseous";
    } else {
        return "Invalid temperature";
    }
}

rl.question("Please enter the temperature in Celsius: ", (answer) => {
    let temperature = parseFloat(answer);
    if (!isNaN(temperature)) {
        let state = getWaterState(temperature);
        console.log("The water is in a " + state + " state at " + temperature + " degress Celcius!");
    } else {
        console.log("That is not a valid temperature! Please try again!");
    }
    rl.close();
});