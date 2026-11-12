const data = require('fs').readFileSync(0, 'utf-8').trim().split('\n');
const n = parseInt(data[0]);
const nums = data[1].split(/\s+/).map(Number);

// Write your solution here.
// Print the one number in [0, n] that is missing from nums.
const newSet = new Set(nums);
let i = 0;

while(i <= n && newSet.has(i)) {
    i++;
}
console.log(i);