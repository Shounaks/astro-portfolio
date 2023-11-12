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
Bruh you should atleast know how to do this...

# Code

```java
class Solution {
    public boolean containsDuplicate(int[] nums) {
        Set<Integer> dup = new HashSet<>();
        for(int i=0;i< nums.length;i++){
            if(dup.contains(nums[i])) return true;
            else dup.add(nums[i]);
        }
        return false;
    }
}
```

# Peformance - N/A
