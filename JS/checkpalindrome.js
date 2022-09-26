// Question:
// Return true if a given string is a palindrome,
// false otherwise.

// A string is a palindrome if it reads the same forwards as backwards.
//  That means, after reversing it, it is still the same string.
// For example: "abcdcba", or "racecar".

function checkPalindrome(statement) {
  let left = 0;
  let strArray = statement.split("");
  let right = strArray.length - 1;

  while (left < right) {
    if (statement.charAt(left) !== statement.charAt(right)) {
      return false;
    }
    left++;
    right--;
  }

  return true;
}

const answer = checkPalindrome("abbad");

console.log(answer);
