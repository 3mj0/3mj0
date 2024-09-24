const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
function findQuadrant(x, y) {
    if (x > 0 && y > 0) {
        return "Quadrant I.";
    } else if (x < 0 && y > 0) {
        return "Qudrant II.";
    } else if (x < 0 && y < 0) {
        return "Qudrant III.";
    } else if (x > 0 && y < 0) {
        return "Quadrant IV.";
    } else if (x === 0 && y !== 0) {
        return "X Axis.";
    } else if (y === 0 && x !== 0) {
        return "Y Axis.";
    } else {
        return "You're at the origin.";
    }
}

rl.question("Enter the coordinates for x: ", (xInput) => {
    rl.question("Enter the coordinates for y: ", (yInput) => {
        const x = parseFloat(xInput);
        const y = parseFloat(yInput);

        if (isNaN(x) || isNaN(y)) {
            console.log("Invalid Input! Numeric values please!")
        } else {
            const quadrant = findQuadrant(x, y);
            console.log(`According to your entered coordinates (${x}, ${y}) you are in ${quadrant}`);
        }
        rl.close();
    });
});