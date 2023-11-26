---
title: "LC#28 : Find the Index of the First Occurrence in a String"
description: ""
pubDate: "24 Oct 2023"
heroImage: "/blog-placeholder-3.jpg"
readTime: 25 minutes
tags: ["Leet Code", "Maths"]
---

## Question: <br/>

<p class="pl-6">
    Given two strings needle and haystack, return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.
</p>

## Constraints: <br/>

<p class="ml-6 bg-slate-300 rounded-md w-fit px-4">
    1 <= haystack.length, needle.length <= 10 <sup>4</sup>
</p>

## Initial Thoughts

I can just use Java's Inbuilt solution for this problem
just do:

```java
    public static int strStr(String haystack, String needle) {
        return haystack.indexOf(needle, 0);
    }
```

and to my surprise this worked 😂.
<br/>
okay lets get back to the question.
first the terminal conditions:

-> when needle > haystack <br/>
-> when needle is empty <br/>
-> when haystack is empty <br/>

```java
    if (needle.length() > haystack.length() || needle.length() == 0 || haystack.length() == 0) return -1;
```

then coming to simple loop, this will remove the first character with each iteration until haystack becomes empty.

```java
        int counter = 0;
        while (!haystack.equals("")) {
                //Code Here
            }
            counter++;
            haystack = haystack.substring(1);
        }
```

and finally add the logic where if the first characters match, check the other characters as well.
## Initial Solution:

```java
class Solution {
    public int strStr(String haystack, String needle) {
        // return haystack.indexOf(needle,0);
        if (needle.length() > haystack.length() || needle.length() == 0 || haystack.length() == 0) return -1;
        int counter = 0;
        while (!haystack.equals("")) {
            if (needle.charAt(0) == haystack.charAt(0)) {
                for (int i = 0; i < needle.length(); i++) {
                    if (haystack.length() - 1 < i) return -1;
                    if (needle.charAt(i) == haystack.charAt(i)) {
                        if (i == needle.length() - 1) {
                            return counter;
                        }
                    } else break;
                }
            }
            counter++;
            haystack = haystack.substring(1);
        }
        return -1;
    }
}
```

# Peformance:

| Beats | Runtime           | Memory            |
| ----- | ----------------- | ----------------- |
|       | 65.55% Java Users | 99.82% Java Users |
|       | 4ms               | 42.7 MB           |
