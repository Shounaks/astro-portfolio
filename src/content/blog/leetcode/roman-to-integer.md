---
title: "LC#13 : Roman to Integer"
description: ""
pubDate: "25 Oct 2023"
heroImage: "/blog-placeholder-3.jpg"
readTime: 25 minutes
tags: ["Leet Code", "Java", "Maths"]
---

# <b> LeetCode Problem #13 : Roman to Integer </b>

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
    public int romanToInt(String s) {
        int number = 0;
        for (int i = 0; i < s.length(); i++) {
            char current = s.charAt(i);
            char next = (i + 1 >= s.length())
                    ? '0'
                    : s.charAt(i + 1);
            if (current == '0') continue;
            if (current == 'I' && next == 'V') {
                number += 4;
                i++;
            } else if (current == 'I' && next == 'X') {
                number += 9;
                i++;
            } else if (current == 'X' && next == 'L') {
                number += 40;
                i++;
            } else if (current == 'X' && next == 'C') {
                number += 90;
                i++;
            } else if (current == 'C' && next == 'D') {
                number += 400;
                i++;
            } else if (current == 'C' && next == 'M') {
                number += 900;
                i++;
            } else if (current == 'I') number += 1;
            else if (current == 'V') number += 5;
            else if (current == 'X') number += 10;
            else if (current == 'L') number += 50;
            else if (current == 'C') number += 100;
            else if (current == 'D') number += 500;
            else if (current == 'M') number += 1000;
        }
        return number;
    }
}
```

## Optimal Solution

```java
class Solution {
    public int romanToInt(String s) {
        int result = 0;
        HashMap<Character,Integer> roman = new HashMap<Character, Integer>();
        roman.put('I',1);
        roman.put('V',5);
        roman.put('X',10);
        roman.put('L',50);
        roman.put('C',100);
        roman.put('D',500);
        roman.put('M',1000);
        s = s.replace("IV","IIII").replace("IX","VIIII");
        s = s.replace("XL","XXXX").replace("XC","LXXXX");
        s = s.replace("CD","CCCC").replace("CM","DCCCC");
        for(int i = 0;i < s.length();i++){
            result += roman.get(s.charAt(i));
        }
        return result;
    }
}
```

# Peformance:

| Beats | Runtime           | Memory            |
| ----- | ----------------- | ----------------- |
|       | 65.55% Java Users | 99.82% Java Users |
|       | 4ms               | 42.7 MB           |
