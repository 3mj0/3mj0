function multiplyMatrices(A, B) {
    const m = A.length, n = A[0].length, p = B[0].length;
    
    if (n !== B.length) throw new Error("Incompatible matrices for multiplication.");
    const result = Array.from({ length: m }, () => Array(p).fill(0));
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < p; j++) {
            for (let k = 0; k < n; k++) {
                result[i][j] += A[i][k] * B[k][j];
            }
        }
    }
    return result;
}

const A = [[1, 2, 3], [4, 5, 6]];
const B = [[7, 8], [9, 10], [11, 12]];
console.log('Matrix Multiplication:', multiplyMatrices(A, B)); 