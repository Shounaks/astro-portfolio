---
title: "LC#345 : Reverse Vowels of a String"
description: ""
pubDate: "25 Oct 2023"
heroImage: "/blog-placeholder-3.jpg"
readTime: 25 minutes
tags: ["Leet Code", "Java", "Maths"]
---

# <b> LC#345 : Reverse Vowels of a String</b>

<br>

## Question: <br/>

<p class="pl-6">
    Given a string s, reverse only all the vowels in the string and return it.
    The vowels are 'a', 'e', 'i', 'o', and 'u', and they can appear in both lower and upper cases, more than once.
</p>
<p>

    Example 1:
    Input: s = "hello"
    Output: "holle"

    Example 2:
    Input: s = "leetcode"
    Output: "leotcede"

</p>

## Constraints: <br/>

<p class="ml-6 bg-slate-300 rounded-md w-fit px-4">
    1 <= s.length <= 3 * 10<sup>5</sup> <br/>
    s consist of printable ASCII characters.
</p>

## Initial Solution:

<p class="pl-6">
    2 pointer method is quite good here.instead of using 2 different strings, then substituting it.
</p>

```java
    class Solution {
    public static String reverseVowels(String s) {
        String vovels = "aeiouAEIOU";
        char[] word = s.toCharArray();
        int start = 0;
        int end = word.length -1;

        for(int i=start;i<end;i++){
            if(vovels.indexOf(word[i]) != -1){
                while(end > start && vovels.indexOf(word[end])== -1){
                    end--;
                }
                char temp = word[i];
                word[i] = word[end];
                word[end] = temp;
                end--;//extra
            }
        }
        return new String(word);
    }
}
```