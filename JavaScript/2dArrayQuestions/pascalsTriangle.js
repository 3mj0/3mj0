function generatePascalsTriangle(numRows) {
    const triangle = [];
    
    for (let rowIndex = 0; rowIndex < numRows; rowIndex++) {
        const row = Array(rowIndex + 1);
        
        for (let j = 0; j <= rowIndex; j++) {
            if (j === 0 || j === rowIndex) {
                row[j] = 1;
            } else {
                row[j] = triangle[rowIndex - 1][j - 1] + triangle[rowIndex - 1][j];
            }
        }
        triangle.push(row);
    }
    
    return triangle;
}

console.log('Pascal\'s Triangle:', generatePascalsTriangle(5));
