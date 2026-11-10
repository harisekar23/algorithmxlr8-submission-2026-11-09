const data = require('fs').readFileSync(0, 'utf-8').trim().split('\n');
const n = parseInt(data[0]);
const nums = data[1].split(/\s+/).map(Number);

// Write your solution here.
// Print "true" if any value appears at least twice, otherwise "false".
const numSet = new Set(nums);
if(n === numSet.size){
    console.log(false);
} else {
    console.log(true);
}