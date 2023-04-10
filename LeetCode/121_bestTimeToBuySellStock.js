var maxProfit = function(prices) {
    // Initialize minPrice with the highest possible integer value
    let minPrice = Number.MAX_SAFE_INTEGER;
    
    // Initialize maxProfit to 0
    let maxProfit = 0;
    
    // Loop through the prices array
    for (let i = 0; i < prices.length; i++) {
        // If the current price is less than minPrice, update minPrice
        if (prices[i] < minPrice) {
            minPrice = prices[i];
        } 
        // Else if the difference between the current price and minPrice is greater than maxProfit, update maxProfit
        else if (prices[i] - minPrice > maxProfit) {
            maxProfit = prices[i] - minPrice;
        }
    }
    // Return maxProfit as the result
    return maxProfit;
};

let prices = [7,1,5,3,6,4];

let result = maxProfit(prices);

console.log(result); // Output: 5 came by 6-1

let pricess = [12 , 3 , 7 ,1, 9 , 11, 15];

let resultt = maxProfit(prices);

console.log(resultt); // Output: 10 came by 11 - 1
