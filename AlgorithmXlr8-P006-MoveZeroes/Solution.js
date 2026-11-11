const data = require('fs').readFileSync(0, 'utf-8').trim().split('\n');
const n = parseInt(data[0]);
const nums = data[1].split(/\s+/).map(Number);

// Write your solution here.
// Print nums after moving all zeroes to the end, preserving the
// relative order of the non-zero elements, space-separated.

var [left, right] = [0, 1];
while (left < right && (right < n)) {
    if (nums[left] === 0) {
        if (nums[left] !== nums[right]) {
            nums[left] = nums[right];
            nums[right] = nums[right] - nums[right];
            left++;
            right++;
        } else {
            right++;
        }
    } else {
        left++;
        right++;
    }
}
console.log(nums);