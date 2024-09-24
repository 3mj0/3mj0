function countCommon(arr1, arr2) {
    const commonElements = arr1.filter(value => arr2.includes(value));
    return new Set(commonElements).size;
}

console.log(countCommon([1, 2, 3, 4, 2, 4], [3, 5, 2, 3, 4, 6]));