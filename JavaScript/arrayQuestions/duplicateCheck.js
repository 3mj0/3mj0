function hasDuplicate(arr) {
    const seen = new Set();
    for (const num of arr) {
        if (seen.has(num)) return true;
        seen.add(num);
    }
    return false;
}

console.log(hasDuplicate([2, 5, 7, 4, 5, 2, 6]));