function transpose(matrix) {
    const n = matrix.length;
    const result = Array.from({ length: n }, () => Array(n).fill(0));
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            result[j][i] = matrix[i][j];
        }
    }
    
    return result;
}

const matrix6 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
console.log('Transposed Matrix:', transpose(matrix6));