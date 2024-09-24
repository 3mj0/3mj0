function sumOf(array) {
    let sum = 0;
    for ( let row of array) {
        for (let num of row) {
            sum += num;
        }
    }
    return sum;
}

const array2d = [[1,2,3], [4,5,6], [7,8,9]];
console.log(sumOf(array2d));