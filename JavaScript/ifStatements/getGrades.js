const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function determineGrades(grade) {
    if (grade >= 90 && grade <= 100) {
        return "Excellent"; 
    } else if (grade >= 80 && grade < 90) {
        return "Good"; 
    } else if (grade >= 70 && grade < 80) {
        return "Average"; 
    } else if (grade >= 60 && grade < 70) {
        return "Below Average";
    } else if (grade >= 0 && grade < 60) {
        return "Need Improvement"; 
    } else {
        return "Invalid grade"; 
    }
}

rl.question("What is you your grade (0-100)", (answer) => {
    let grade = parseFloat(answer);
    if (!isNaN(grade)) {
        let grades = determineGrades(grade);
        console.log("Your grades are/may " +grades +"!");
    } else {
        console.log("That's not a valid grade!");
    }
    rl.close();
});