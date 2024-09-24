function rotateMatrix(matrix) {
    const n = matrix.length;
    const result = Array.from({ length: n }, () => Array(n));
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            result[j][n - 1 - i] = matrix[i][j];
        }
    }
    
    return result;
}

const matrix2 = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
console.log('Rotated Matrix:', rotateMatrix(matrix2));
