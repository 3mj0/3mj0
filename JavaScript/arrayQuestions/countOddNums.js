function countOddNums(arr) {
    return arr.filter(num => num % 2 !== 0).length;
}

const nums = [1,2,3,4,5,6,7,8,9];
console.log("Number of odd numbers is: ", countOddNums(nums));