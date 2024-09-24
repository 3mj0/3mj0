function hourglassSum(matrix) {
    const rows = matrix.length;
    const cols = matrix[0].length;
    let maxSum = -Infinity;
    for (let i = 0; i < rows - 2; i++) {
        for (let j = 0; j < cols - 2; j++) {
            const sum = matrix[i][j] + matrix[i][j + 1] + matrix[i][j + 2] +
                        matrix[i + 1][j + 1] +
                        matrix[i + 2][j] + matrix[i + 2][j + 1] + matrix[i + 2][j + 2];
            maxSum = Math.max(maxSum, sum);
        }
    }
    return maxSum;
}

const matrix6 = [
    [1, 1, 1, 0, 0, 0],
    [0, 1, 0, 0, 0, 0],
    [1, 1, 1, 0, 0, 0],
    [0, 0, 2, 4, 4, 0],
    [0, 0, 0, 2, 0, 0],
    [0, 1, 1, 2, 4, 0]
];
console.log('Maximum Hourglass Sum:', hourglassSum(matrix6)); 