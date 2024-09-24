const mergeSorted = (arr1, arr2)  => {
    return [...arr1, ...arr2].sort((a, b) => a - b);
};

const arr1 = [2, 4, 6];
const arr2 = [3, 6, 9];

const mergedArray = mergeSorted(arr1, arr2);

console.log(mergedArray);