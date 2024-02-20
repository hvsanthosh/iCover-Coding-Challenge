// 1. Write a function which takes an array as input, checks each element (which can be a string or a number) to determine if it is a palindrome, and then returns an array indicating whether each element is a palindrome or not, following the pattern specified in the given example.

// Input array: ['dad', 1331, 'cat', 255, 'noon']
// Output array: ['palindrome', 'palindrome', 'non-palindrome', 'non-palindrome', 'palindrome']

function isPalindrome(element) {
  // Convert the element to a string for consistent comparison
  element = element.toString();
  // Check if the element is equal to its reverse
  return element === element.split("").reverse().join("");
}

function checkPalindromeArray(arr) {
  let result = [];
  for (let element of arr) {
    if (isPalindrome(element)) {
      result.push("palindrome");
    } else {
      result.push("non-palindrome");
    }
  }
  return result;
}

// Test the function with the given example
let inputArray = ["dad", 1331, "cat", 255, "noon"];
let outputArray = checkPalindromeArray(inputArray);
console.log(outputArray);
