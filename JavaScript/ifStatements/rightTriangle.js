const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function rightTriangleCheck(a, b, c) {
    const sides = [a, b, c].sort((x, y) => x - y);
    return sides[2] ** 2 === sides[0] ** 2 + sides[1] ** 2;
}

function askSides() {
    rl.question("Enter the length of the side a: ", (a) => {
        rl.question("Enter the length of the side b: ", (b) => { 
            rl.question("Enter the length of the side c: ", (c) => {
                const lengthA = parseInt(a);
                const lengthB = parseInt(b);
                const lengthC = parseInt(c);
                if (!isNaN(lengthA) && !isNaN(lengthB) && !isNaN(lengthC)) {
                    if (rightTriangleCheck(lengthA, lengthB, lengthC)) {
                    console.log("The triangle with sides " + lengthA + " , " + lengthB + " and " + lengthC + " is a right triangle!")
                    } else {
                        console.log("The triangle with sides " + lengthA + " , " + lengthB + " and " + lengthC + " is not a right triangle!")
                    }
                } else {
                    console.log("Please enter valids integers!")
                }
                rl.close();
            });
        });
    });
}
askSides();