const data = require('fs').readFileSync(0, 'utf-8').trim().split('\n');
const n = parseInt(data[0]);

// Write your solution here.
// Print each answer on its own line: "FizzBuzz", "Fizz", "Buzz", or the number.

const result = [];
for (let i = 1; i < n + 1; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        result.push('FizzBuzz');
    } else if (i % 3 === 0) {
        result.push('Fizz');
    } else if (i % 5 === 0) {
        result.push('Buzz');
    } else {
        result.push(`${i}`);
    }
}

console.log(result);
