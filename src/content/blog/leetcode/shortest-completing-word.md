---
title: "LC#748 : Shortest Completing Word"
description: ""
pubDate: "25 Oct 2023"
heroImage: "/blog-placeholder-3.jpg"
readTime: 25 minutes
tags: ["Leet Code", "Java", "Maths"]
---

# <b> LeetCode Problem #748 : Shortest Completing Word</b>

<br>

## Question: <br/>

<p class="pl-6">
    Given a string licensePlate and an array of strings words, find the shortest completing word in words.
    A completing word is a word that contains all the letters in licensePlate. Ignore numbers and spaces in licensePlate, and treat letters as case insensitive. If a letter appears more than once in licensePlate, then it must appear in the word the same number of times or more.
    For example, if licensePlate = "aBc 12c", then it contains letters 'a', 'b' (ignoring case), and 'c' twice. Possible completing words are "abccdef", "caaacab", and "cbca".
    Return the shortest completing word in words. It is guaranteed an answer exists. If there are multiple shortest completing words, return the first one that occurs in words.
</p>
<p>

    Example 1:
    Input: licensePlate = "1s3 PSt", words = ["step","steps","stripe","stepple"]
    Output: "steps"
    Explanation: licensePlate contains letters 's', 'p', 's' (ignoring case), and 't'.
    "step" contains 't' and 'p', but only contains 1 's'.
    "steps" contains 't', 'p', and both 's' characters.
    "stripe" is missing an 's'.
    "stepple" is missing an 's'.
    Since "steps" is the only word containing all the letters, that is the answer.

    Example 2:
    Input: licensePlate = "1s3 456", words = ["looks","pest","stew","show"]
    Output: "pest"
    Explanation: licensePlate only contains the letter 's'. All the words contain 's', but among these "pest", "stew", and "show" are shortest. The answer is "pest" because it is the word that appears earliest of the 3.

</p>



## Initial Solution:

<p class="pl-6">
    This is definately an easy solution to brute force. but a very long one!
</p>

```java
class Solution {
    public String shortestCompletingWord(String licensePlate, String[] words) {
        char[] complete = licensePlate.toLowerCase().replaceAll("[^a-z]+", "").toCharArray();
        
        int[] count = new int[26];
        for(int i=0;i<complete.length;i++){
            count[complete[i]-97]++;
        }
        int min = 1000;
        String answer = "";
        for(String word:words){
            boolean isCorrect = true;
            char[] current = word.toCharArray();
            if(current.length < complete.length){continue;}
            else{
                int[] count2 = new int[26];
                for(Character c : current){
                    count2[c-97]++;
                }
                for(int i=0;i<26;i++){
                    if(count[i] <= count2[i]){continue;}
                    else isCorrect = false;
                }
                if(isCorrect && word.length()< min){
                    answer = word;
                    min = word.length();
                }
            }
        }
        return answer;
    }
}
```

# Peformance:
Just dont ask about it... 