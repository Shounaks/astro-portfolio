---
title: "LC#1470 : Shuffle the Array"
description: ""
pubDate: "25 Oct 2023"
heroImage: "/blog-placeholder-3.jpg"
readTime: 25 minutes
tags: ["Leet Code", "Java", "Maths"]
---

# <b> LeetCode Problem #1470: Shuffle the Array</b>

<br>

## Question: <br/>

<p class="pl-6">
    Given the array nums consisting of 2n elements in the form [x1,x2,...,xn,y1,y2,...,yn].
    Return the array in the form [x1,y1,x2,y2,...,xn,yn].
</p>
<p>
   
    Example 1:
    Input: nums = [2,5,1,3,4,7], n = 3
    Output: [2,3,5,4,1,7] 
    Explanation: Since x1=2, x2=5, x3=1, y1=3, y2=4, y3=7 then the answer is [2,3,5,4,1,7].

    Example 2:
    Input: nums = [1,2,3,4,4,3,2,1], n = 4
    Output: [1,4,2,3,3,2,4,1]

    Example 3:
    Input: nums = [1,1,2,2], n = 2
    Output: [1,2,1,2]

</p>

## Constraints: <br/>

<p class="ml-6 bg-slate-300 rounded-md w-fit px-4">
1 <= prices.length <= 10<sup>5</sup> <br/>
0 <= prices[i] <= 10<sup>4</sup>
</p>

## Initial Solution:

<p class="pl-6">
    This was easy at a second glance, but hard to come with the best solution, even now it can be optimized. but I do not possess the ability (currently) to do it...
</p>

```java
    class Solution {
    public int[] shuffle(int[] nums, int n) {
        int[] answer = new int[nums.length];
        int secondIterator = 0;
        for(int i=0;n+i<nums.length;i++){
            answer[secondIterator] = nums[i];
            answer[secondIterator+1] = nums[n+i];
            secondIterator+=2;
        }
        return answer;
    }
}
```

# Peformance:

N/A
