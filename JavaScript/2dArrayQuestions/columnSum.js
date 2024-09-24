function columnSums(matrix) {
    const colCount = matrix[0].length;
    const sums = Array(colCount).fill(0);
    
    for (let row of matrix) {
        for (let j = 0; j < colCount; j++) {
            sums[j] += row[j];
        }
    }
    return sums;
}

const matrix5 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
console.log('Column Sums:', columnSums(matrix5)); 