function countChar(arr, char) {
    return arr.reduce((count, str) => count + (str.match( new RegExp(char, 'g')) || []).length, 0);
}

const strings = ["Maggi", "Nate", "Elias", "Duane"];
console.log("Number of g's: ", countChar(strings, 'g'));