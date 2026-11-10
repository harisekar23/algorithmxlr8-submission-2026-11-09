<p align="center"><img src="https://algorithmxlr8.io/logo-mark.png" width="56" alt="AlgorithmXlr8.io logo" /></p>
<h3 align="center">AlgorithmXlr8.io</h3>
<p align="center"><sub>Solved and synced automatically from <a href="https://algorithmxlr8.io">AlgorithmXlr8.io</a></sub></p>

---

# Maximum 69 Number

**Difficulty:** `Easy`

## Problem

You are given a positive integer num consisting only of digits 6 and 9.

Return the maximum number you can get by changing at most one digit (6 becomes 9, and 9 becomes 6).

Changing a 9 into a 6 can only make the number smaller, and changing a 6 into a 9 makes it larger, more so the further left the digit is. You are also allowed to change nothing at all, which is the best choice when every digit is already 9.

Input format: A single line containing the integer num.

Output format: Print a single integer, the maximum number you can get.

## Examples

### Example 1

**Input**
```
num = 9669
```
**Output**
```
9969
```

**Explanation:** Changing the first digit results in 6669. Changing the second digit results in 9969. Changing the third digit results in 9699. Changing the fourth digit results in 9666. The maximum number is 9969.

### Example 2

**Input**
```
num = 9996
```
**Output**
```
9999
```

**Explanation:** Changing the last digit 6 to 9 results in the maximum number.

### Example 3

**Input**
```
num = 9999
```
**Output**
```
9999
```

**Explanation:** It is better not to apply any change.

---

Solved on [AlgorithmXlr8.io](https://algorithmxlr8.io/solve-dsa/maximum-69-number).