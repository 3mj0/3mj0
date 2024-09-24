function diagonalSum(matrix) {
    let sum = 0;
    for (let i = 0; i < matrix.length; i++) {
        sum += matrix[i][i];
    }
    return sum;
}

const matrix7 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
console.log('Diagonal Sum:', diagonalSum(matrix7));