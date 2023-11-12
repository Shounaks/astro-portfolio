---
title: "LC#344 : Reverse String"
description: ""
pubDate: "25 Oct 2023"
heroImage: "/blog-placeholder-3.jpg"
readTime: 25 minutes
tags: ["Leet Code", "Java", "Maths"]
---

# <b> LeetCode Problem #69420 : Nice</b>

<br>

## Question: <br/>

<p class="pl-6">
    Write a function that reverses a string. The input string is given as an array of characters s.
    You must do this by modifying the input array in-place with O(1) extra memory.
</p>
<p>
    
    Example 1:
    Input: s = ["h","e","l","l","o"]
    Output: ["o","l","l","e","h"]

    Example 2:
    Input: s = ["H","a","n","n","a","h"]
    Output: ["h","a","n","n","a","H"]

</p>

## Constraints: <br/>

<p class="ml-6 bg-slate-300 rounded-md w-fit px-4">
1 <= s.length <= 10<sup>5</sup> <br/>
s[i] is a printable ascii character.

</p>

## My Thoughts

<p class="pl-6">
    There are multiple ways to solve this. using string builder 'reverse()' or 2 pointer.
</p>

## Initial Solution: (2 - pointer)

```java
    class Solution {
    public void reverseString(char[] s) {
        int start = 0;
        int end = s.length -1;
        while(end > start){
            char temp = s[start];
            s[start] = s[end];
            s[end] = temp;
            start++;
            end--;
        }
    }
}
```
# Peformance:

N/A
