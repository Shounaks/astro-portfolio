---
title: "LC#292 : Nim Game"
description: ""
pubDate: "25 Oct 2023"
heroImage: "/blog-placeholder-3.jpg"
readTime: 25 minutes
tags: ["Leet Code", "Maths"]
---


## Question: <br/>
You are playing the following Nim Game with your friend:
<p class="pl-6">
    1. Initially, there is a heap of stones on the table. <br/>
    2. You and your friend will alternate taking turns, and you go first.<br/>
    3. On each turn, the person whose turn it is will remove 1 to 3 stones from the heap.<br/>
    4. The one who removes the last stone is the winner.<br/>
</p>
Given n, the number of stones in the heap, return true if you can win the game assuming both you and your friend play optimally, otherwise return false.

<p>

    Example 1:
    Input: n = 4
    Output: false
    Explanation: These are the possible outcomes:
    1. You remove 1 stone. Your friend removes 3 stones, including the last stone. Your friend wins.
    2. You remove 2 stones. Your friend removes 2 stones, including the last stone. Your friend wins.
    3. You remove 3 stones. Your friend removes the last stone. Your friend wins.
    In all outcomes, your friend wins.
    
    Example 2:
    Input: n = 1
    Output: true
    
    Example 3:
    Input: n = 2
    Output: true
</p>


## My Thoughts
This is a trick question if you know the game.
if you have 1,2,3 stones, the first player wins, if you have 4 stones no matter what you do,the second wins.
and this series repeats for at 5,6,7,8...
because if player 2 is optimally playing the game, then he will be able to keep the number of stones to a multiple of 4
at the end of every round, at the end of last round there will be only 4 stones left. hence any multiple of 4 leads Player 1 to LOOSE.

## Initial Solution:

```java
class Solution {
    public boolean canWinNim(int n) {
        return n % 4 != 0;
    }
}
```

# Peformance:

N/A