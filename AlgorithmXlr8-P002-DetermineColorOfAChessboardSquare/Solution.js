const data = require('fs').readFileSync(0, 'utf-8').trim().split('\n');
const coordinates = data[0].trim();

// Write your solution here.
// Print "White" or "Black".

const columns = new Map([
    ['a', 1],
    ['b', 2],
    ['c', 3],
    ['d', 4],
    ['e', 5],
    ['f', 6],
    ['g', 7],
    ['h', 8]
]);

const box = coordinates.split('');
const col = columns.get(box[0]);
const row = +box[1];

if((col + row) % 2 === 0) {
    console.log('Black');
} else {
    console.log('White');
}