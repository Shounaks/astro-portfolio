---
title: "LC#217 : Contains Duplicate"
description: ""
pubDate: "25 Oct 2023"
heroImage: "/blog-placeholder-3.jpg"
readTime: 15 minutes
tags: ["Leet Code", "Java", "Set"]
---

# Question

<p class="pl-6">
    Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.
</p>

# Example

<p>

    Example 1:
    Input: nums = [1,2,3,1]
    Output: true

    Example 2:
    Input: nums = [1,2,3,4]
    Output: false

    Example 3:
    Input: nums = [1,1,1,3,3,4,3,2,4,2]
    Output: true

</p>

# My Thoughts
This was hard simply because i tried to do it with i +1 instead of i=1. and also because of array manipulation.
wrong mindset . 😔 
first we know that first element will be distinct, so when the item doesnt match with previous element, add that element and increment the unique value

# Code

```java
class Solution {
    public int removeDuplicates(int[] nums) {
        int unique = 1;
        for(int i=1;i < nums.length;i++){
            if(nums[i] != nums[i-1]){
                nums[unique++] = nums[i];
            }
        }
        return unique;
    }
}
```

# Peformance - N/A
