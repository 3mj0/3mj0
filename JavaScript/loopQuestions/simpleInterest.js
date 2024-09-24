const principal = 1000;
const rate = 5;

for (let years = 1; years <= 5; years++) {
    const simpleInterest = (principal * rate * years) / 100;

    console.log(`Simple Interest for ${years} years: $${simpleInterest}`);
}