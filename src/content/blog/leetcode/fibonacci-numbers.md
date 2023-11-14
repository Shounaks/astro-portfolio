---
title: "Fibonacci Series"
description: ""
pubDate: "24 Oct 2023"
heroImage: "/blog-placeholder-3.jpg"
readTime: 5 minutes
tags: ["Leet Code Help", "Java","Algorithms"]
---

# <b> Basic Fibonacci Code</b>

Divide and Conquer:

```java
class Solution {
    public int climbStairs(int n) {
        int combination = 0;
        if(n == 0 || n == 1){return 1;}
        return climbStairs(n-1) + climbStairs(n-2);
    }
}
```

Iterative:

```java
class Solution {
    public int climbStairs(int n) {
        int combination = 0;
        int prev= 1, curr =1;
        for(int i=2;i<=n;i++){
            int temp = curr;
            curr = prev + curr;
            prev = temp;
        }
        return curr;
    }
}
```

# Dynamic Programming:

```java
class Solution {
    public int climbStairs(int n) {
        int[] values = new int[46];
        values[0] = values[1] = 1;
        for(int i=2;i<= n;i++){
            values[i] = values[i-1] + values[i-2];
        }
        return values[n];
    }
}
```
