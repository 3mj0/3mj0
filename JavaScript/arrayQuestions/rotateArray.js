function rotateArray(arr, positions) {
    const n = arr.length;
    positions = positions % n;
    return arr.slice(-positions).concat(arr.slice(0, n - positions));
}

console.log(rotateArray([3, 6, 9, 12, 15], 3));