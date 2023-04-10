/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    if(numRows === 0) return [];
    if(numRows === 1) return [[1]];
    if(numRows === 2) return [[1], [1, 1]];
    
    let result = [[1], [1, 1]];
    for(let i = 2; i < numRows; i++) {
        let row = [1];
        for(let j = 1; j < i; j++) {
            row.push(result[i-1][j-1] + result[i-1][j]);
        }
        row.push(1);
        result.push(row);
    }
    return result;
};

// Check if numRows is equal to 0. If it is, return an empty array [].
// Check if numRows is equal to 1. If it is, return a 2D array with a single row [[1]].
// Check if numRows is equal to 2. If it is, return a 2D array with two rows [[1],[1,1]].
// If numRows is greater than 2, initialize the result array with [[1],[1,1]].
// Use a for loop to generate the remaining rows, starting from the 3rd row (i = 2) to the numRows-th row.
// For each iteration of the loop, initialize a new row with a single 1 in the first position.
// Use a nested for loop to generate the rest of the values in the row by adding the values of the previous row in the result array.
// Push the generated row to the result array.
// Repeat steps 6-8 until the outer loop reaches numRows.
// Return the result array after all iterations are complete.
// Example:

// If numRows is 5, the output would be [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]

