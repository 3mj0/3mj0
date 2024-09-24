function findElement(matrix, target) {
    for (let row of matrix) {
        if (row.includes(target)) {
            return true;
        }
    }
    return false;
}

const matrix8 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
console.log('Find Element 5:', findElement(matrix8, 5)); 
console.log('Find Element 10:', findElement(matrix8, 10)); 