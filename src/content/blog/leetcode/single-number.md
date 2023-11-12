---
title: "LC#136 : Single Number"
description: ""
pubDate: "25 Oct 2023"
heroImage: "/blog-placeholder-3.jpg"
readTime: 25 minutes
tags: ["Leet Code", "Java", "Maths"]
---

# <b> LeetCode Problem #136 : Single Number</b>

<br>

## Question: <br/>

<p class="pl-6">
    Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.
    You must implement a solution with a linear runtime complexity and use only constant extra space.
</p>
<p>
    Example 1:

    Input: nums = [2,2,1]
    Output: 1
    Example 2:

    Input: nums = [4,1,2,1,2]
    Output: 4
    Example 3:

    Input: nums = [1]
    Output: 1
</p>

## Constraints: <br/>

<p class="ml-6 bg-slate-300 rounded-md w-fit px-4">
1 <= nums.length <= 3 * 10<sup>4</sup> <br/>
-3 * 10<sup>4</sup> <= nums[i] <= 3 * 10<sup>4
</p>

## Initial Solution:

<p class="pl-6">
    It is a easy question which can be solved in many ways, you can sort the array and check 2 items at once (most optimal solution).
    or use set/hashmap like below to approach it.
</p>

HashSet:
```java
class Solution {
    public int singleNumber(int[] nums) {
        HashSet<Integer> numbers = new HashSet<>();
        for (int num : nums) {
            if(numbers.contains(num)) numbers.remove(num);
            else numbers.add(num);
        }
        return numbers.stream().findFirst().get();
    }
```
HashMap:
```java
class Solution {
    public int singleNumber(int[] nums) {
        HashMap<Integer, Integer> numbers = new HashMap<>();
        for (int num : nums) {
            if (numbers.containsKey(num)) {
                numbers.put(num, numbers.get(num) + 1);
            } else numbers.put(num, 1);
        }
        return numbers.entrySet().stream().filter(n -> n.getValue() == 1).map(Map.Entry::getKey).findFirst().get();
    }
}
```

# Peformance:

N/A