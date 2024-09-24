function minElement(matrix) {
    let min = Number.POSITIVE_INFINITY;
    for (let row of matrix) {
        for (let element of row) {
            min = Math.min(min, element);
        }
    }
    return min;
}

const matrix3 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
console.log('Minimum Element:', minElement(matrix3)); 