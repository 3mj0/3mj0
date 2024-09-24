function indexOfMax(arr) {
    const maxValue = Math.max(...arr);
    return arr.indexOf(maxValue);
}

const nums = [22, 47, 86, 18, 10, 45];
console.log("The index of the max value in the array is ", indexOfMax(nums))