#  Question:
#  Return true if a given string is a palindrome,
#  false otherwise.

#  A string is a palindrome if it reads the same forwards as backwards.
#   That means, after reversing it, it is still the same string.
#  For example: "abcdcba", or "racecar".

def checkPalindrome(statement):
    left = 0
    right = len(statement) - 1
    while left < right:
        if statement[left] != statement[right]:
            return bool(False)
        left = left + 1
        right = right - 1
    return bool(True)

answer = checkPalindrome("abba");
print(answer)