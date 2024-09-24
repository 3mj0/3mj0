const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function isEligibleForScholarship(grade, activitiesCount) {
    const gradeThreshold = 80; 
    const activitiesThreshold = 3; 
    if (grade >= gradeThreshold && activitiesCount >= activitiesThreshold) {
        return true;
    }
    return false;
}

function startEligibilityChecker() {
    rl.question("Enter the student's grade (0-100): ", (inputGrade) => {
        const grade = parseFloat(inputGrade);
        
        if (isNaN(grade) || grade < 0 || grade > 100) {
            console.log("Error: Please enter a valid grade between 0 and 100.");
            rl.close();
            return;
        }
        rl.question("Enter the number of extracurricular activities: ", (inputActivities) => {
            const activitiesCount = parseInt(inputActivities);
            
            if (isNaN(activitiesCount) || activitiesCount < 0) {
                console.log("Error: Please enter a valid number of extracurricular activities.");
                rl.close();
                return;
            }
            const eligible = isEligibleForScholarship(grade, activitiesCount);
            if (eligible) {
                console.log("The student is eligible for the scholarship.");
            } else {
                console.log("The student is not eligible for the scholarship.");
            }
            rl.close(); 
        });
    });
}

startEligibilityChecker();