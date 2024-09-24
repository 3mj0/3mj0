function maxElement(matrix) {
    let max = Number.NEGATIVE_INFINITY;
    for (let row of matrix) {
        for ( let element of row) {
            max = Math.max(max, element);
        }
    }
    return max;
}
const matrix2 = [ [1,2,3], [4,5,6], [7,8,9] ];
console.log('Maximum Element: ', maxElement(matrix2));