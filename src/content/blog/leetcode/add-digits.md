---
title: "LC#258 : Add Digits"
description: ""
pubDate: "25 Oct 2023"
heroImage: "/blog-placeholder-3.jpg"
readTime: 25 minutes
tags: ["Leet Code", "Maths"]
---

## Question: <br/>

<p class="pl-6">
    Given an integer num, repeatedly add all its digits until the result has only one digit, and return it.
</p>
<p>

    Example 1:
        Input: num = 38
        Output: 2
        Explanation: The process is
        38 --> 3 + 8 --> 11
        11 --> 1 + 1 --> 2 
        Since 2 has only one digit, return it.
    
    Example 2:
        Input: num = 0
        Output: 0
</p>


## My thoughts
    Another trick question, solvable only if you know what digital root is, as well as enumerate all the items.
        0=0
        1=1,2=2,3=3,4=4,5=5,6=6,7=7,8=8,9=9
        10=1,11=2,12=3,13=4,14=5,15=6,16=7,17=8,18=9,
        19=1,20=2,....
    there is a cycle from 9. every time. 
## Initial Solution:
```java
class Solution {
    public int addDigits(int num) {
        if(num == 0) return 0;
        return (num%9==0) ? 9 : num % 9;
    }
}
```