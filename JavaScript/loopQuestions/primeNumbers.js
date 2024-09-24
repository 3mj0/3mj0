function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

let countPrime = 0;
const low = 1;
const high = 50;

for ( let number = low; number <= high; number++) {
    if (isPrime(number)) {
        console.log(number);
    }
}