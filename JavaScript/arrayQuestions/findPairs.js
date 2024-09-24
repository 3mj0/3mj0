function findPairsSum(arr, targetSum) {
    const pairs = [];
    const seen = new Set();
    arr.forEach(num => {
        const complement = targetSum - num;
        if (seen.has(complement)) {
            pairs.push([num, complement]);
        }
        seen.add(num);
    });
    return pairs;
}

console.log(findPairsSum([1, 2, 3, 4, 5], 5));