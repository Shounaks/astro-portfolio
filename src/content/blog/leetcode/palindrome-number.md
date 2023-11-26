---
title: "LC#9 : Palindrome Number"
description: ""
pubDate: "25 Oct 2023"
heroImage: "/blog-placeholder-3.jpg"
readTime: 25 minutes
tags: ["Leet Code", "Maths"]
---

# <b> LeetCode Problem #9 : Palindrome Number </b>

<br>

## Question: <br/>

<p class="pl-6">
    Given an integer x, return true if x is a palindrome, and false otherwise.
</p>

## Constraints: <br/>

<p class="ml-6 bg-slate-300 rounded-md w-fit px-4">
(-2 <sup> 31 </sup>) < n < (2 <sup>31</sup> - 1)
</p>

## Initial Solution:

```java
class Solution {
    public boolean isPalindrome(int x) {
        if(x < 0) return false;
        StringBuilder stringBuilder = new StringBuilder(Integer.toString(x));
        return stringBuilder.toString().contentEquals(stringBuilder.reverse());
    }
}
```

# Peformance:

N / A
