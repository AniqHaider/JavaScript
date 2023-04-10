/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
    let row = [1];
    for (let i = 1; i <= rowIndex; i++) {
        row[i] = (row[i - 1] * (rowIndex - (i - 1))) / i;
    }
    return row;
};

// The formula row[i] = (row[i - 1] * (rowIndex - (i - 1))) / i is used to calculate the value of the ith number in the row of Pascal's Triangle, given the value of the (i-1)th number.

// Let's look at an example to understand this formula. Let's say we want to find the values of row 3 in Pascal's Triangle. We'll use the formula to calculate each number in the row one by one:

// For i = 1, row[i] = (row[i - 1] * (rowIndex - (i - 1))) / i becomes row[1] = (row[0] * (3 - (1 - 1))) / 1, where row[0] is 1 (the first number in every row of Pascal's Triangle is 1). Thus, row[1] = (1 * (3 - (1 - 1))) / 1 = (1 * (3 - 0)) / 1 = 3.

// For i = 2, row[i] = (row[i - 1] * (rowIndex - (i - 1))) / i becomes row[2] = (row[1] * (3 - (2 - 1))) / 2, where row[1] is 3 (the value we just calculated). Thus, row[2] = (3 * (3 - (2 - 1))) / 2 = (3 * (3 - 1)) / 2 = 3.

// For i = 3, row[i] = (row[i - 1] * (rowIndex - (i - 1))) / i becomes row[3] = (row[2] * (3 - (3 - 1))) / 3, where row[2] is 3 (the value we just calculated). Thus, row[3] = (3 * (3 - (3 - 1))) / 3 = (3 * (3 - 2)) / 3 = 1.

// So, the values of row 3 in Pascal's Triangle are [1, 3, 3, 1].