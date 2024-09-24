function upperTriangleSum(matrix) {
    let sum = 0;
    const n = matrix.length;
    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            sum += matrix[i][j];
        }
    }
    return sum;
}

const matrix10 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
console.log('Upper Triangle Sum:', upperTriangleSum(matrix10)); 