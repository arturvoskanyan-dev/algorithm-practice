var maxProfit = function (prices) {
  let maxProfit = 0;
  let minPrice = prices[0];

  for (let i = 0; i < prices.length; i++) {
    if (prices[i] < minPrice) {
      minPrice = prices[i];
    }

    const calculateProfit = prices[i] - minPrice;

    if (calculateProfit > maxProfit) {
      maxProfit = calculateProfit;
    }
  }

  return maxProfit;
};

console.log(maxProfit([7, 1, 5, 3, 6, 4]));
console.log(maxProfit([7, 6, 4, 3, 1]));
