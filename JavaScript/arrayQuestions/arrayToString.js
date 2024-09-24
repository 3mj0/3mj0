function formatArray(arr) {
    return "[" + arr.join(", ") + "]";
}

const nums = [3,6,9,12,15,18];
console.log("Formatted Array: ", formatArray(nums));