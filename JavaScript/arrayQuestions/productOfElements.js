function productOfOthers(arr) {
    const totalProduct = arr.reduce((product, value) => product * value, 1);
    return arr.map(value => totalProduct / value);
}

console.log(productOfOthers([2, 4, 6, 8]));