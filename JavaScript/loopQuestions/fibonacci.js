let count = 0;
let a = 0;
let b = 1;
console.log("The first 10 numbers in the Fibonacci Sequence are: " );

while (count < 10) {
    console.log(a);
    const next = a + b;
    a = b;
    b = next;
    count++;
}