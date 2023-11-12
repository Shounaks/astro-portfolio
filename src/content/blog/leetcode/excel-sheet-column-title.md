---
title: "LC#168 : Excel Sheet Column Title"
description: ""
pubDate: "25 Oct 2023"
heroImage: "/blog-placeholder-3.jpg"
readTime: 25 minutes
tags: ["Leet Code", "Java", "Maths"]
---

# <b> LeetCode Problem #168 : Excel Sheet Column Title</b>

<br>

## Question: <br/>

<p class="pl-6">
    Given an integer columnNumber, return its corresponding column title as it appears in an Excel sheet.

    For example:

    A -> 1
    B -> 2
    C -> 3
    ...
    Z -> 26
    AA -> 27
    AB -> 28
    ...

    Example 1:

    Input: columnNumber = 1
    Output: "A"
    Example 2:

    Input: columnNumber = 28
    Output: "AB"
    Example 3:

    Input: columnNumber = 701
    Output: "ZY"

</p>

## Constraints: <br/>

<p class="ml-6 bg-slate-300 rounded-md w-fit px-4">
1 <= prices.length <= 10<sup>5</sup> <br/>
0 <= prices[i] <= 10<sup>4</sup>
</p>

## Initial Solution:

<p class="pl-6">
    I almost got this answer by itself, but for the fact that we need to subtract one from every iteration so as to comply with the 
    conversion rule. nice trick...
</p>

```java
    class Solution {
    public String convertToTitle(int columnNumber) {
        String answer = "";
        HashMap<Integer,String> map = new HashMap<>();
        map.put(0,"A");
        map.put(1,"B");
        map.put(2,"C");
        map.put(3,"D");
        map.put(4,"E");
        map.put(5,"F");
        map.put(6,"G");
        map.put(7,"H");
        map.put(8,"I");
        map.put(9,"J");
        map.put(10,"K");
        map.put(11,"L");
        map.put(12,"M");
        map.put(13,"N");
        map.put(14,"O");
        map.put(15,"P");
        map.put(16,"Q");
        map.put(17,"R");
        map.put(18,"S");
        map.put(19,"T");
        map.put(20,"U");
        map.put(21,"V");
        map.put(22,"W");
        map.put(23,"X");
        map.put(24,"Y");
        map.put(25,"Z");
        while(columnNumber > 0){
            columnNumber--;
            answer = map.get(columnNumber%26) + answer;
            columnNumber /= 26;
        }
        return answer;
    }
}
```

# Peformance:

N/A
