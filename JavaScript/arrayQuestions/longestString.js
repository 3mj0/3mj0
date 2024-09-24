function findLongest(arr) {
    return arr.reduce((longest, current) => current.length > longest.length ? current : longest, "");
}

console.log(findLongest(['maggi', 'elias', 'jamaul', 'nate']));