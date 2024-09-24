function arraySum(arr) {
    return arr.reduce((acc, val) => acc + val, 0);
}

const nums = [1, 2, 3, 4, 5];
console.log("The sum is: ", arraySum(nums));