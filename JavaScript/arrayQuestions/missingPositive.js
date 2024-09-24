function smallestMissingPositive(arr) {
    const positiveInt = new Set(arr.filter(num => num >0));
    let smallestMissing = 1;
    while (positiveInt.has(smallestMissing)) {
        smallestMissing++;
    }
    return smallestMissing;
}

console.log(smallestMissingPositive([-2, -1, 0, 1, 2, 3]));