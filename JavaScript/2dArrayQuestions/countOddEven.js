function countEvenOdd(matrix) {
    let evenCount = 0;
    let oddCount = 0;
    for (let row of matrix) {
        for (let element of row) {
            if (element % 2 === 0) {
                evenCount++;
            } else {
                oddCount++;
            }
        }
    }
    return { evenCount, oddCount };
}

const matrix9 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
const { evenCount, oddCount } = countEvenOdd(matrix9);
console.log('Even Count:', evenCount); 
console.log('Odd Count:', oddCount); 