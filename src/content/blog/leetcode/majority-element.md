---
title: "LC#169 : Majority Element"
description: ""
pubDate: "25 Oct 2023"
heroImage: "/blog-placeholder-3.jpg"
readTime: 25 minutes
tags: ["Leet Code", "Java"]
---

# <b> LC#169 : Majority Element</b>

<br>

## Question: <br/>

<p class="pl-6">
    Given an array nums of size n, return the majority element. The majority element is the element that appears more than ⌊n / 2⌋ times. 
    You may assume that the majority element always exists in the array.
</p>
<p>

    Example 1:
    Input: nums = [3,2,3]
    Output: 3

    Example 2:
    Input: nums = [2,2,1,1,1,2,2]
    Output: 2

</p>

## Initial Solution:

<p class="pl-6">
    Its easy with multiple correct ways. following is the first that come in mind.
</p>

```java
    class Solution {
    public int majorityElement(int[] nums) {
        HashMap<Integer,Integer> numbers = new HashMap<>();
        for(int num : nums){
            if(numbers.containsKey(num)){numbers.put(num,numbers.get(num)+1);}
            else numbers.put(num,1);
        }
        return numbers.entrySet()
            .stream()
            .sorted((x,y)-> y.getValue() - x.getValue())
            .map(Map.Entry::getKey)
            .findFirst()
            .get();
    }
}
```