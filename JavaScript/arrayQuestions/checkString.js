function containsString(arr, str) {
    return arr.some(item => item.toLowerCase() === str.toLowerCase());
}

const strings = ["Maggi", "Duane", "Elias", "Jamaul"];
console.log("Contains 'Maggi': ", containsString(strings, 'Maggi'));