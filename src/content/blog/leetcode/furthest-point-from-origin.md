---
title: "LC#2833 : Furthest Point From Origin"
description: ""
pubDate: "25 Oct 2023"
heroImage: "/blog-placeholder-3.jpg"
readTime: 25 minutes
tags: ["Leet Code", "HashMap","Array"]
---

# <b> LeetCode Problem #2833 : Furthest Point From Origin</b>

<br>

## Question: <br/>

<p class="pl-6">
    You are given a string moves of length n consisting only of characters 'L', 'R', and '_'. The string represents your movement on a number line starting from the origin 0.
    In the ith move, you can choose one of the following directions:
    move to the left if moves[i] = 'L' or moves[i] = '_'
    move to the right if moves[i] = 'R' or moves[i] = '_'
    Return the distance from the origin of the furthest point you can get to after n moves.
</p>
<p>

    Example 1:
    Input: moves = "L_RL__R"
    Output: 3
    Explanation: The furthest point we can reach from the origin 0 is point -3 through the following sequence of moves "LLRLLLR".

    Example 2:
    Input: moves = "_R__LL_"
    Output: 5
    Explanation: The furthest point we can reach from the origin 0 is point -5 through the following sequence of moves "LRLLLLL".

    Example 3:
    Input: moves = "_______"
    Output: 7
    Explanation: The furthest point we can reach from the origin 0 is point 7 through the following sequence of moves "RRRRRRR".

</p>

## Constraints: <br/>

<p class="ml-6 bg-slate-300 rounded-md w-fit px-4">
    moves consists only of characters 'L', 'R' and '_'.
</p>

## Initial Solution:

<p class="pl-6">
    The _ is a wildcard which should be used to increase the distance between whichever side is greater
</p>

```java
    class Solution {
    public int furthestDistanceFromOrigin(String moves) {
        HashMap<Character,Integer> count = new HashMap<>();
        count.put('L',0);
        count.put('R',0);
        count.put('_',0);
        for(char m : moves.toCharArray()){
            if(m == 'L') count.put('L',count.get('L')+1);
            else if(m == 'R') count.put('R',count.get('R')+1);
            else count.put('_',count.get('_')+1);
        }
        int l = count.get('L');
        int r = count.get('R');
        int u = count.get('_');
        if(l > r) {return l + u - r;}
        else{return r + u - l;}
    }
}
```

# Peformance:

N/A
