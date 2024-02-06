// Verbal Questions

// 1. What is the difference between a parameter and an argument?

// Answer: a parameter is a variable or placeholder that's meant to signify what type of data should be passed into the function when it is called. An argument is a piece of data that is passed into the function when it is called (in a sense, "replacing" the placeholder parameter).  

// Parameter example: function fakeFunction(num) {...}
// Argument example: fakeFunction(40)

// 2. Within a function, what is the difference between return and console.log?

// Answer: a console.log merely prints whatever data is passed as its argument (usually for testing purposes) while a return actually passes the data value that the called function is meant to produce. That is, a return actually gives the coder access to some value that can then be used in another part of the code.

// PALINDROME

// Convert the input string to lowercase to ensure the comparison is case-insensitive

function palindrome(str) {
  let lowerCaseStr = str.toLowerCase()

// Split the string into an array of characters, reverse the array, and then join it back into a string.
  
  let reversedStr = lowerCaseStr.split('').reverse().join('')

// Compare the original lowercase string with the reversed string.

// If they are the same, then function should return true; otherwise, returns false.

  if(lowerCaseStr === reversedStr) {
    return true
  } else {return false}
}


// SUM ARRAY

// Initialize a variable to store the sum of the array elements

function sumArray(arrOfNums) {
  let sum = 0

// Use a for loop to iterate through the array

  for (i = 0; i < arrOfNums.length; i++) {

// In each iteration, add the current element to the sum variable

  sum = sum + arrOfNums[i]
  }

// After the loop, return the sum variable

  return sum

}




