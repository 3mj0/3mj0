function boundaryTraversal(matrix) {
    const result = [];
    
    if (matrix.length === 0) return result;
    const rows = matrix.length;
    const cols = matrix[0].length;
    for (let i = 0; i < cols; i++) {
        result.push(matrix[0][i]); 
    }
    for (let i = 1; i < rows; i++) {
        result.push(matrix[i][cols - 1]); 
    }
    if (rows > 1) {
        for (let i = cols - 1; i >= 0; i--) {
            result.push(matrix[rows - 1][i]); 
        }
    }
    if (cols > 1) {
        for (let i = rows - 2; i > 0; i--) {
            result.push(matrix[i][0]); 
        }
    }
    return result;
}

const matrix4 = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
console.log('Boundary Traversal:', boundaryTraversal(matrix4)); 