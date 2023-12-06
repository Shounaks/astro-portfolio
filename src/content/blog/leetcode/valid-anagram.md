---
title: "LC#242 : Valid Anagram"
description: ""
pubDate: "25 Oct 2023"
heroImage: "/blog-placeholder-3.jpg"
readTime: 25 minutes
tags: ["Leet Code", "Arrays", "HashMap"]
---

# <b> LeetCode Problem #242 : Valid Anagram</b>

<br>

## Question: <br/>

<p class="pl-6">
    question
</p>
<p>
    Example 1:

    Example

</p>

## Constraints: <br/>

<p class="ml-6 bg-slate-300 rounded-md w-fit px-4">
1 <= prices.length <= 10<sup>5</sup> <br/>
0 <= prices[i] <= 10<sup>4</sup>
</p>

## Initial Solution:

<p class="pl-6">
    your thoughts
</p>

```java
class Solution {
    public boolean isAnagram(String s, String t) {
        HashMap<Character,Integer> count = new HashMap<>();
        for(char ch : s.toCharArray()){
            if(count.containsKey(ch)){
                count.put(ch,count.get(ch)+1);
            }else count.put(ch,1);
        }
        for(char ch : t.toCharArray()){
            if(count.containsKey(ch)){
                if(count.get(ch)-1 < 0) return false;
                count.put(ch,count.get(ch)-1);
            }else return false;
        }
        for(int size : count.values()){
            if(size > 0) return false;
        }
        return true;
    }
}
```

# Peformance:
Very Very Bad 😔 but it <span class="text-emerald-500">passes</span>