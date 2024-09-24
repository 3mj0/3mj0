const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout 
});

function trafficLightMeaning(color) {
    switch (color.toLowerCase()) {
        case 'green':
            return "Go!";
        case 'yellow':
            return "Slow Down!";
        case 'red':
            return "Stop!";
        default:
            return "Error: Invalid color!! Please choose red, yellow or green!";
    }
}

function startTrafficLights() {
    rl.question("What color is the traffic light? ", (inputColor) => {
        const action = trafficLightMeaning(inputColor);
        console.log(action);
        rl.close();
    });
}

startTrafficLights();