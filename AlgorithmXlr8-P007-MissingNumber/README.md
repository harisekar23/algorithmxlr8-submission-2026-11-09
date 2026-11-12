<p align="center"><img src="https://algorithmxlr8.io/logo-mark.png" width="56" alt="AlgorithmXlr8.io logo" /></p>
<h3 align="center">AlgorithmXlr8.io</h3>
<p align="center"><sub>Solved and synced automatically from <a href="https://algorithmxlr8.io">AlgorithmXlr8.io</a></sub></p>

---

# Missing Number

**Difficulty:** `Easy`

## Problem

Given an array nums containing n distinct numbers in the range [0, n], return the only number in the range that is missing from the array.

The range [0, n] contains n + 1 integers, and nums holds exactly n of them with no repeats, so exactly one value from 0 to n is absent. Note that the missing number can be 0 itself or n itself. The elements of nums are not given in any particular order.

Follow up: Could you implement a solution using only O(1) extra space complexity and O(n) runtime complexity?

Input format: The first line contains an integer n, the length of nums. The second line contains n space-separated distinct integers, the elements of nums.

Output format: Print a single integer: the number in the range [0, n] that does not appear in nums.

## Examples

### Example 1

**Input**
```
nums = [3,0,1]
```
**Output**
```
2
```

**Explanation:** n = 3 since there are 3 numbers, so all numbers are in the range [0,3]. 2 is the missing number in the range since it does not appear in nums.

### Example 2

**Input**
```
nums = [0,1]
```
**Output**
```
2
```

**Explanation:** n = 2 since there are 2 numbers, so all numbers are in the range [0,2]. 2 is the missing number in the range since it does not appear in nums.

### Example 3

**Input**
```
nums = [9,6,4,2,3,5,7,0,1]
```
**Output**
```
8
```

**Explanation:** n = 9 since there are 9 numbers, so all numbers are in the range [0,9]. 8 is the missing number in the range since it does not appear in nums.

---

Solved on [AlgorithmXlr8.io](https://algorithmxlr8.io/solve-dsa/missing-number).