---
title: "LC#231 : Power of Two"
description: ""
pubDate: "25 Oct 2023"
heroImage: "/blog-placeholder-3.jpg"
readTime: 25 minutes
tags: ["Leet Code", "Maths"]
---

# <b> LeetCode Problem #231 : Power of Two </b>

<br>

## Question: <br/>

<p class="pl-6">
    Given an integer n, return true if it is a power of two. Otherwise, return false.
    An integer n is a power of two, if there exists an integer x such that n == 2x.
</p>

## Constraints: <br/>

<p class="ml-6 bg-slate-300 rounded-md w-fit px-4">
(-2 <sup> 31 </sup>) < n < (2 <sup>31</sup> - 1)
</p>

## Initial Solution:

```java
class Solution {
    public boolean isPowerOfTwo(int n) {
        if(n <= 0) return false;
        while(n > 1){
            if(n % 2 != 0) return false;
            n = n / 2;
        }
        return true;
    }
}
```

# Peformance:

| Beats | Runtime           | Memory            |
| ----- | ----------------- | ----------------- |
|       | 85.11% Java Users | 96.43% Java Users |
|       | 1ms               | 39.04 MB          |
