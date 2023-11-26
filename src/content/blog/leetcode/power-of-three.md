---
title: "LC#326 : Power of Three"
description: ""
pubDate: "25 Oct 2023"
heroImage: "/blog-placeholder-3.jpg"
readTime: 25 minutes
tags: ["Leet Code", "Maths"]
---

# <b> LeetCode Problem #326 : Power of Three </b>

<br>

## Question: <br/>

<p class="pl-6">
    Given an integer n, return true if it is a power of three. Otherwise, return false.
    An integer n is a power of three, if there exists an integer x such that n == 3x.
</p>

## Constraints: <br/>

<p class="ml-6 bg-slate-300 rounded-md w-fit px-4">
(-2 <sup> 31 </sup>) < n < (2 <sup>31</sup> - 1)
</p>

## Initial Solution:

```java
class Solution {
    public boolean isPowerOfThree(int n) {
        if(n <= 0) return false;
        while(n > 1){
            if(n%3 != 0) return false;
            n /=3;
        }
        return true;
    }
}
```

# Peformance:

| Beats | Runtime           | Memory            |
| ----- | ----------------- | ----------------- |
|       | 75.10% Java Users | 29.06% Java Users |
|       | 8ms               | 42.96 MB          |
