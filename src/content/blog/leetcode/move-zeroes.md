---
title: "LC#283 : Move Zeroes"
description: ""
pubDate: "24 Oct 2023"
heroImage: "/blog-placeholder-3.jpg"
readTime: 25 minutes
tags: ["Leet Code","array"]
---

# <b> LeetCode Problem #283 : Move Zeroes</b>

<br>

## Question: <br/>

<p class="pl-6">
    Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.
    Note that you must do this in-place without making a copy of the array.
</p>
<p>

    Example 1:
        Input: nums = [0,1,0,3,12]
        Output: [1,3,12,0,0]

    Example 2:
        Input: nums = [0]
        Output: [0]
</p>

## Constraints: <br/>
Irrelevant

## Initial Solution:

<p class="pl-6">
    Easy stuff. 🙂
</p>

```java
    class Solution {
    public void moveZeroes(int[] nums) {
        int index = 0;
        for(int i=0;i < nums.length;i++){
            if(nums[i] != 0){
                int temp = nums[i];
                nums[i] = 0;
                nums[index++] = temp;
            }
        }
    }
}
```

# Peformance:

N/A