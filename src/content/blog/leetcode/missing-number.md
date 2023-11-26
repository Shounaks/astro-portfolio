---
title: "LC#268 : Missing Number"
description: ""
pubDate: "25 Oct 2023"
heroImage: "/blog-placeholder-3.jpg"
readTime: 25 minutes
tags: ["Leet Code", "Maths"]
---

## Question: <br/>

<p class="pl-6">
    Given an array nums containing n distinct numbers in the range [0, n], return the only number in the range that is missing from the array.
</p>
<p>

    Example 1:
    Input: nums = [3,0,1]
    Output: 2
    Explanation: n = 3 since there are 3 numbers, so all numbers are in the range [0,3]. 2 is the missing number in the range since it does not appear in nums.

    Example 2:
    Input: nums = [0,1]
    Output: 2
    Explanation: n = 2 since there are 2 numbers, so all numbers are in the range [0,2]. 2 is the missing number in the range since it does not appear in nums.

    Example 3:
    Input: nums = [9,6,4,2,3,5,7,0,1]
    Output: 8
    Explanation: n = 9 since there are 9 numbers, so all numbers are in the range [0,9]. 8 is the missing number in the range since it does not appear in nums.

</p>

## My Thoughts

Its easy, just sum all items, and subtract from expected; this will be O(n);
the process to calculate expected can be done either using individual for loop, or Arithematic Progression 'EXPECTED_SUM= (n\*(n+1))/2'

## Initial Solution:

```java
    class Solution {
        public int missingNumber(int[] nums) {
            int sum =0;
            int expected = 0;
            for(int i=0;i<nums.length;i++){
                expected += i+1;
                sum += nums[i];
            }
            return expected - sum;
        }
    }
```

## A bit Optimized Solution with Arithmatic Progression (A.P.)

```java
class Solution {
    public int missingNumber(int[] nums) {
        int sum =0;
        int expected = (nums.length * (nums.length+1))/2;
        for(int i=0;i<nums.length;i++){
            sum += nums[i];
        }
        return expected - sum;
    }
}
```
