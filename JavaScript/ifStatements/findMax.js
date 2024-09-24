function findMaximum(a, b) {
    if ( a > b) {
        console.log("The maximum is: " + a);
    } else if ( b > a) {
        console.log("the maximum is: " + b);
    } else {
        console.log("Both numbers are equal: " + a);
    }
}  

let a = 6;
let b = 4;

findMaximum(a, b);