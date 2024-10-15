/*
Given two strings text1 and text2, return the length of their longest common subsequence. If there is no common subsequence, return 0.

A subsequence of a string is a new string generated from the original string with some characters (can be none) deleted without changing the relative order of the remaining characters.

For example, "ace" is a subsequence of "abcde".

Example 1:

Input: text1 = "abcde", text2 = "ace" 
Output: 3  
Explanation: The longest common subsequence is "ace" and its length is 3.

Example 2:
Input: text1 = "abc", text2 = "abc"
Output: 3
Explanation: The longest common subsequence is "abc" and its length is 3.

Example 3:
Input: text1 = "abc", text2 = "def"
Output: 0
Explanation: There is no such common subsequence, so the result is 0.
*/

const longestCommonSubsequence = (text1, text2) => {
  let i = 0, j = 0;

  while(i < text1.length && j < text2.length) {
    if(text1[i] === text2[j]) {
      i++;
      j++;
    } else {
        j++;
    }
  }
  return i === text1.length;
};
console.log(longestCommonSubsequence("abcde", "ace")); //3
console.log(longestCommonSubsequence("abc", "abc")); //3
console.log(longestCommonSubsequence("abc", "def")); //0