const data = require('fs').readFileSync(0, 'utf-8').trim().split('\n');
const num = data[0].trim();

// Write your solution here.
// Print the maximum number after changing at most one digit 6 to 9.

const digits = String(num).split('');
for (let i = 0; i < digits.length; i++) {
    if (digits[i] === '6') {
        digits[i] = '9';
        break;
    }
}
console.log(digits.join(''));