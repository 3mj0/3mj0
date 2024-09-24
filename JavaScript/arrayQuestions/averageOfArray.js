function calculateAverage(arr) {
    if (arr.length === 0) {
        return 0; // return 0 or handle the case for an empty array
    }
    const sum = arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    return sum / arr.length;
}

const numbers = [2, 3, 7, 8, 1, 9];
console.log(calculateAverage(numbers));