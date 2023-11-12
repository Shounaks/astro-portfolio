---
title: "LC#167: Two Sum 2: Input Array is Sorted"
description: ""
pubDate: "25 Oct 2023"
heroImage: "/blog-placeholder-3.jpg"
readTime: 25 minutes
tags: ["Leet Code", "Java", "Maths"]
---

<br>

## Question: <br/>

<p class="pl-6">
    Given a 1-indexed array of integers numbers that is already sorted in non-decreasing order, find two numbers such that they add up to a specific target number. Let these two numbers be numbers[index1] and numbers[index2] where 1 <= index1 < index2 < numbers.length.
    <br/><br/>
    Return the indices of the two numbers, index1 and index2, added by one as an integer array [index1, index2] of length 2.
    <br/><br/>
    The tests are generated such that there is exactly one solution. You may not use the same element twice.
    <br/><br/>
    Your solution must use only constant extra space.
</p>
<p>

    Example 1:
    Input: numbers = [2,7,11,15], target = 9
    Output: [1,2]
    Explanation: The sum of 2 and 7 is 9. Therefore, index1 = 1, index2 = 2. We return [1, 2].

    Example 2:
    Input: numbers = [2,3,4], target = 6
    Output: [1,3]
    Explanation: The sum of 2 and 4 is 6. Therefore index1 = 1, index2 = 3. We return [1, 3].

    Example 3:
    Input: numbers = [-1,0], target = -1
    Output: [1,2]
    Explanation: The sum of -1 and 0 is -1. Therefore index1 = 1, index2 = 2. We return [1, 2].

</p>

## Constraints: <br/>

<p class="ml-6 bg-slate-300 rounded-md w-fit px-4">
    2 <= numbers.length <= 3 * 10^4 <br/>
    -1000 <= numbers[i] <= 1000 <br/>
    numbers is sorted in non-decreasing order. <br/>
    -1000 <= target <= 1000 <br/>
    The tests are generated such that there is exactly one solution.<br/>
</p>

## Initial Solution:

<p class="pl-6">
    Whoa this is a medium level problem, yet was easy to solve. maybe a youtube video will help.
    Understand what is sliding window, and from where do you want to move. in this case pointer 'A'
    is at the start while 'B' starts at the end, the we move b towards smaller numbers if the given 'target'
    number is smaller than the sum. else we increase 'a'.
</p>

```java
class Solution {
    public int[] twoSum(int[] numbers, int target) {
        int a= 0, b = numbers.length-1;
        while(a < b){
            if(numbers[a] + numbers[b] > target) b--;
            else if(numbers[a] + numbers[b] == target){
                return new int[]{a+1,b+1};
            }
            else a++;
        }
        return null;
    }
}
```

# Peformance:

| Runtime | Memory |
| ------- | ------ |
| 86.1%   | 25.36% |
