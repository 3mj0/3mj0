function removeElement(arr, element) {
    return arr.filter(value => value !== element); 
}

console.log(removeElement([2, 4, 4, 5, 7, 8], 4));