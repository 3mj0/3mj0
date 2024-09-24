function secLargrestNum(arr) {
    const findNum = Array.from(new Set(arr)).sort((a, b) => b - a);
    return findNum[1]
}

const nums = [45, 76, 49, 91, 25, 88, 61];
console.log("Second largest in this array: ", secLargrestNum(nums));