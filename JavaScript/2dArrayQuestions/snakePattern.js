function printSnakePattern(matrix) {
    const result = [];
    
    for (let i = 0; i < matrix.length; i++) {
        if (i % 2 === 0) {
            
            for (let j = 0; j < matrix[i].length; j++) {
                result.push(matrix[i][j]);
            }
        } else {
            
            for (let j = matrix[i].length - 1; j >= 0; j--) {
                result.push(matrix[i][j]);
            }
        }
    }
    
    return result;
}

const matrix5 = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
console.log('Snake Pattern:', printSnakePattern(matrix5)); 