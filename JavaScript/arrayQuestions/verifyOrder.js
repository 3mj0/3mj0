function isSorted(arr) {
    return arr.every((val, index) => index === 0 || val >= arr[index -1]);
}

const nums = [3, 6, 9, 12, 15, 18];
console.log("It is sorted: ", isSorted(nums));