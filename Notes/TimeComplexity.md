# Time Complexity Analysis

Understanding time complexity is crucial for analyzing the efficiency of algorithms.

## Big O Notation

- **Big O Notation:** A notation used to describe the upper bound of an algorithm's running time in the worst-case scenario.

### Common Time Complexities:

- O(1) - Constant Time: Operations that take the same amount of time regardless of input size.
- O(log n) - Logarithmic Time: Common in algorithms that repeatedly halve the problem size.
- O(n) - Linear Time: Time increases linearly with input size.
- O(n log n) - Linearithmic Time: Often seen in efficient sorting algorithms.
- O(n^2) - Quadratic Time: Nested loops that iterate over the input.
- O(2^n) - Exponential Time: Recursive algorithms solving problems by dividing them into two subproblems.
- O(n!) - Factorial Time: Extremely slow-growing time complexity.

## Factors Influencing Time Complexity

Several factors affect the time complexity of an algorithm:

- **Input Size:** How many elements the algorithm processes.
- **Operations:** The number of basic operations the algorithm performs.
- **Loops:** The number of loops and their iteration count.
- **Recursion:** The depth and number of recursive calls.
- **Data Structures:** The efficiency of data structures used.
- **Nested Operations:** The number of operations within operations.

## Comparing Time Complexities

When analyzing algorithms, it's important to compare their time complexities:

- O(1) < O(log n) < O(n) < O(n log n) < O(n^2) < O(2^n) < O(n!)

## Examples

Here are some examples of common algorithms and their time complexities:

- **Binary Search:** O(log n)
- **Linear Search:** O(n)
- **Bubble Sort:** O(n^2)
- **Merge Sort:** O(n log n)

...

