function rearrangeElements(arr) {
    return arr.sort((a, b) => (a % 2) - (b % 2));
}

console.log(rearrangeElements([1,2,3,4,5,6,7,8,9]));