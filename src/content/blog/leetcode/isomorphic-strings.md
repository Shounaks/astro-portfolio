---
title: "LC#205 : Isomorphic Strings"
description: ""
pubDate: "25 Oct 2023"
heroImage: "/blog-placeholder-3.jpg"
readTime: 25 minutes
tags: ["Leet Code", "Java", "HashMap"]
---

# <b> LeetCode Problem #205 : Isomorphic Strings

</b>

<br>

<p class="pl-6">
    Given two strings s and t, determine if they are isomorphic.
    Two strings s and t are isomorphic if the characters in s can be replaced to get t.
    All occurrences of a character must be replaced with another character while preserving the order of characters. No two characters may map to the same character, but a character may map to itself.
</p>
<p>

    Example 1:
    Input: s = "egg", t = "add"
    Output: true

    Example 2:
    Input: s = "foo", t = "bar"
    Output: false

    Example 3:
    Input: s = "paper", t = "title"
    Output: true

</p>

## My thought:
This required a bit of thinking, we couldnt use sorting, and strings cannot be isomorphic if they are of different length.
the n i wrote the first conditional line to return false; then I thought that there is mapping regarding items between s and t
so I added hashmap and did the mapping then tried to run, but failed at the condition similar to:
"badc"
"baba"

here d is new, but its mapped to b, which should already be mapped to itself. so i added second hashmap to save the ReverseMapping.
and checking both the mapping for false condition.
and voila it passed. 

I saw some solutions using array which are much efficient than what I wrote. but having 41.06 MB (Beats 91% is enough for me.)

## Initial Solution:

```java
    class Solution {
    public boolean isIsomorphic(String s, String t) {
        if(s.length() != t.length()) return false;
        char[] sc = s.toCharArray();
        char[] tc = t.toCharArray();
        HashMap<Character,Character> map = new HashMap<>();
        HashMap<Character,Character> reversemap = new HashMap<>();
        for(int i=0;i< s.length();i++){
            if(map.containsKey(sc[i]) && map.get(sc[i])!=tc[i]) return false;
            else map.put(sc[i],tc[i]);

            if(reversemap.containsKey(tc[i]) && reversemap.get(tc[i])!=sc[i]) return false;
            else reversemap.put(tc[i],sc[i]);
        }
        return true;
    }
}
```

# Peformance:

N/A
