---
title: "LC#121 : Best time to Buy and Sell Stocks"
description: ""
pubDate: "25 Oct 2023"
heroImage: "/blog-placeholder-3.jpg"
readTime: 25 minutes
tags: ["Leet Code", "Java", "Maths"]
---

# <b> LeetCode Problem #121 : Best time to Buy and Sell Stocks</b>

<br>

## Question: <br/>

<p class="pl-6">
    You are given an array prices where prices[i] is the price of a given stock on the ith day.
    You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.
    Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.
</p>
<p>
    Example 1:

    Input: prices = [7,1,5,3,6,4]
    Output: 5
    Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
    Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.
    Example 2:

    Input: prices = [7,6,4,3,1]
    Output: 0
    Explanation: In this case, no transactions are done and the max profit = 0.

</p>

## Constraints: <br/>

<p class="ml-6 bg-slate-300 rounded-md w-fit px-4">
1 <= prices.length <= 10<sup>5</sup> <br/>
0 <= prices[i] <= 10<sup>4</sup>
</p>

## Initial Solution:

<p class="pl-6">
    first I iterated over prices and got the max and min prices, then i added the condition to reset when <mark> minPrice > p </mark>. 
    then I started calculation of profit but the profit was a local one and not the globalmaxima, so then I added maxProfit and made
    it change when the profit itself changes. <br/><br/>
    If profit changes, and if the new profit is greater than previously registered maximas then change <mark>maxProfit</mark>
</p>

```java
class Solution {
    public int maxProfit(int[] prices) {
        int profit = 0;
        int minPrice = 100000;
        int maxProfit = 0;
        for(int p : prices) {
            if(minPrice > p) {
                minPrice = p;
                profit = p;
            }
            if(profit < p) {
                profit = p;
                if(maxProfit < profit) maxProfit = profit - minPrice;
            }
        }
        return maxProfit;
    }
}
```

# Peformance:

| Beats | Runtime           | Memory            |
| ----- | ----------------- | ----------------- |
|       | 76.24% Java Users | 37.88% Java Users |
|       | 2ms               | 61.08 MB          |
