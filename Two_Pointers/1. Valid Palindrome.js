/*
A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

Given a string s, return true if it is a palindrome, or false otherwise.

Example 1:

Input: s = "A man, a plan, a canal: Panama"
Output: true
Explanation: "amanaplanacanalpanama" is a palindrome.
Example 2:

Input: s = "race a car"
Output: false
Explanation: "raceacar" is not a palindrome.
*/

const validPalindrome = (s) => {
  let strLower = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, '');
  let strReverse = strLower.split('').reverse().join('');

  return strLower === strReverse ? true : false;

};
console.log(validPalindrome("A man, a plan, a canal: Panama")); //true
console.log(validPalindrome("race a car")); //false
console.log(validPalindrome("121")); //true