function isPrime(n) {
    if (n < 2) {
        return 'The Num must be greater than 2';
    } else if (n === 2) {
        return 'Prime';
    }

    let i = 2;
    const limit = Math.sqrt(n);
    while (i <= limit) {
        if (n % i === 0) {
            return 'Not Prime';
        }
        i++;
    }

    return 'Prime';
}


console.log(`100:${isPrime(100)}`);
console.log(`7:${isPrime(7)}`);
console.log(`11:${isPrime(11)}`);
console.log(`2:${isPrime(2)}`);
console.log(`0:${isPrime(0)}`);
