const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

function calculateBMI(weightLbs, heightCms) {
    
    const heightM = heightCms / 100; 
    
    const bmi = (weightLbs / (heightM * heightM)) * 703;
    return bmi; 
}

function categorizeBMI(bmi) {
    if (bmi < 18.5) {
        return "Underweight";
    } else if (bmi >= 18.5 && bmi < 24.9) {
        return "Normal weight";
    } else if (bmi >= 25.0 && bmi < 29.9) {
        return "Overweight";
    } else {
        return "Obese";
    }
}

function startBMICalculator() {
    rl.question("Enter your weight in pounds (lbs): ", (inputWeight) => {
        const weightLbs = parseFloat(inputWeight);
        
        if (isNaN(weightLbs) || weightLbs <= 0) {
            console.log("Error: Please enter a valid weight greater than 0.");
            rl.close();
            return;
        }
        rl.question("Enter your height in centimeters (cms): ", (inputHeight) => {
            const heightCms = parseFloat(inputHeight);
            
            if (isNaN(heightCms) || heightCms <= 0) {
                console.log("Error: Please enter a valid height greater than 0.");
                rl.close();
                return;
            }
            
            const bmi = calculateBMI(weightLbs, heightCms);
            const category = categorizeBMI(bmi);
            console.log(`Your BMI is ${bmi.toFixed(2)}, which is categorized as: ${category}`);
            
            rl.close(); 
        });
    });
}

startBMICalculator();