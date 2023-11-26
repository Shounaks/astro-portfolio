---
title: "LC#342 : Power of Four"
description: ""
pubDate: "25 Oct 2023"
heroImage: "/blog-placeholder-3.jpg"
readTime: 25 minutes
tags: ["Leet Code", "Maths", "Recursion"]
---

# <b> LeetCode Problem #342 : Power of Four </b>

<br>

## Question: <br/>

<p class="pl-6">
    Given an <mark>integer b</mark>, return true <mark>if it is a power of four</mark>. Otherwise, return false.
    An integer n is a power of four, if there exists an integer x such that n == 4x.
</p>

## Constraints: <br/>

<p class="ml-6 bg-slate-300 rounded-md w-fit px-4">
(-2 <sup> 31 </sup>) < n < (2 <sup>31</sup> - 1)
</p>

## Optimized Solution: <br/>

```java
class Solution {
    public boolean isPowerOfFour(int n) {
        if(n <= 0) return false;
        while(n > 1){
            if(n % 4 != 0) return false;
            else return isPowerOfFour(n/4);
        }
        return true;
    }
}
```

## Initial Solution:

```java
class Solution {
    public boolean isPowerOfFour(int n) {
        if(n <= 0) return false;
        while(n > 1){
            if(n % 4 != 0) return false;
            else n /= 4;
        }
        return true;
    }
}
```

# Peformance:

| Beats | Runtime         | Memory            |
| ----- | --------------- | ----------------- |
|       | 100% Java Users | 58.82% Java Users |
|       | 0ms             | 39.48 MB          |
