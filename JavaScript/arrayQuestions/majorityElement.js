const findMajorityElement = (nums) => {
    const elementCount = {};
    const majorityCount = Math.floor(nums.length / 2);
    
    for (let num of nums) {
        if (elementCount[num]) {
            elementCount[num]++;
        } else {
            elementCount[num] = 1;
        }
        
        if (elementCount[num] > majorityCount) {
            return num; 
        }
    }
    
    return null; 
};

const array = [3, 2, 3]; 
const majorityElement = findMajorityElement(array);

console.log(majorityElement);