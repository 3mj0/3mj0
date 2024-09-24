function rowSums(matrix) {
    return matrix.map(row => row.reduce((sum, element) => sum + element, 0));
}

const matrix4 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
console.log('Row Sums:', rowSums(matrix4)); 