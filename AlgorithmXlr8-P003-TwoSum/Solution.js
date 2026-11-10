const data = require('fs').readFileSync(0, 'utf-8').trim().split('\n');
const [n, target] = data[0].split(/\s+/).map(Number);
const nums = data[1].split(/\s+/).map(Number);

// Write your solution here.
// Print the two indices (space-separated) whose values sum to target.
var twoSum = function(nums, target) {
    const seen = new Map();

    for(let i = 0; i < nums.length; i++) {
        let complement = target - nums[i];

        if(seen.has(complement)) {
            return console.log([seen.get(complement), i]);
        }

        seen.set(nums[i], i);
    }
};

twoSum(nums, target);