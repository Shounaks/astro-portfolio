---
title: "LC#27 : Remove Element"
description: ""
pubDate: "24 Oct 2023"
heroImage: "/blog-placeholder-3.jpg"
readTime: 25 minutes
tags: ["Leet Code","Arrays"]
---

# <b> LeetCode Problem #27 : Remove Element</b>

<br>

## Question: <br/>

<p class="pl-6">
    Given an integer array nums and an integer val, remove all occurrences of val in nums in-place. The order of the elements may be changed. Then return the number of elements in nums which are not equal to val.

    Consider the number of elements in nums which are not equal to val be k, to get accepted, you need to do the following things:

    Change the array nums such that the first k elements of nums contain the elements which are not equal to val. The remaining elements of nums are not important as well as the size of nums.
    Return k.

</p>
<p>
    Example 1:

    Input: nums = [3,2,2,3], val = 3
    Output: 2, nums = [2,2,_,_]
    Explanation: Your function should return k = 2, with the first two elements of nums being 2.
    It does not matter what you leave beyond the returned k (hence they are underscores).
    Example 2:

    Input: nums = [0,1,2,2,3,0,4,2], val = 2
    Output: 5, nums = [0,1,4,0,3,_,_,_]
    Explanation: Your function should return k = 5, with the first five elements of nums containing 0, 0, 1, 3, and 4.
    Note that the five elements can be returned in any order.
    It does not matter what you leave beyond the returned k (hence they are underscores).

</p>

## Constraints: <br/>

<p class="ml-6 bg-slate-300 rounded-md w-fit px-4">
    0 <= nums.length <= 100 <br/>
    0 <= nums[i] <= 50 <br/>
    0 <= val <= 100 <br/>
</p>

## Initial Solution:

<p class="pl-6">
    My Initial solution was as below, we needed to first iterate through the array, and then if any item equaling to 'var' is found
    switch it with the item from other side.
    
    3,2,2,3     val=3

    3,2,2,3
    ^   ^
    2,2,3,3

like switching 3 on the first number from the first number not equal to 'val' from the end.

</p>

# Initial Solution

```java
class Solution {
    public int removeElement(int[] nums, int val) {
        for (int i = 0; i < nums.length; i++) {
            if (nums[i] == val) {
                for (int j = nums.length - 1; j > i; j--) {
                    if (nums[j] != val) {
                        int temp = nums[j];
                        nums[j] = nums[i];
                        nums[i] = temp;
                    }
                }
            }
        }
        int counter = 0;
        for (int i = 0; i < nums.length; i++) {
            if (nums[i] != val) counter++;
            else break;
        }
        return counter;
    }
}
```

# Optimized Solution

```java
    class Solution {
    public int removeElement(int[] nums, int val) {
        int index = 0;
        for(int i=0; i< nums.length;i++){
            if(nums[i] != val){
                nums[index] = nums[i];
                index++;
            }
        }
        return index;
    }
}
```

# Peformance:

# Peformance:

| Beats | Runtime | Memory            |
| ----- | ------- | ----------------- |
|       | 100%    | 98.90% Java Users |
|       | 0ms     | 40.04 MB          |
