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


// PRIME NUMBERS

// checkPrime

// Check if the number is less than or equal to 1. If so, return false because it's not prime.

function checkPrime(num) {
  if (num <= 1) {
    return false
  }

// Use a for loop to iterate from 2 up to the square root of the number.

  for (let i = 2; i <= Math.sqrt(num); i++ ) {

// If the number is divisible by an number in this range, return false.

    if (num % i === 0) {
      return false
    }
  }

// If no divisors are found, return true.

  return true
}

// printPrimes

// Use a for loop to iterate through numbers from 2 up to the specified limit

function printPrimes(limit) {

  for (let i = 2; i <= limit; i++) {

// For each number, use the checkPrime function to check if it's prime

// If checkPrimes returns true, console.log the number
  
    if (checkPrime(i) === true) {
      console.log(i)
    }
  }
}


// CALCULATE THE CUBE

// Calculate the cube of the number by multiplying the number by itself twice.

function calcCube(num) {
  let numSquared = num * num

  let numCubed = numSquared * num

// Return result

  return numCubed
}


// IS A VOWEL?

// Check if the input character is included in a string of vowels (both lowercase and uppercase)

function isAVowel(char) {

  let vowelStr = 'aeiouyAEIOUY'

// Return true if the character is a vowel, otherwise return false

  if (vowelStr.includes(char)) {
    return true
  } else {return false}
}


// GET TWO LENGTHS

// Return an array containing the lengths of the two input strings

function getTwoLengths(str1, str2) {
  let str1Length = str1.length
  let str2Length = str2.length

  let outputArr = []
  outputArr.push(str1Length, str2Length)

  return outputArr
}


// GET MULTIPLE LENGTHS

// Use the map function to transform each string in the input array into its length

function getMultipleLengths(arr) {

  let mappedLengths = arr.map( (str) => str.length)

// Return the resulting array of lengths
  
  return mappedLengths
}


// MAXIMUM OF THREE NUMBERS

// Use the Math.max function to find the maximum of the three numbers

function maxOfThreeNumbers (num1, num2, num3) {

  let maxNum = Math.max(num1, num2, num3)

// Return the maximum numbers

  return maxNum
}


// PRINT LONGEST WORD

// Use the reduce method to find the longest string in the array

function printLongestWord (arr) {
  
  let strLengthArr = []

  for (let i = 0; i < arr.length; i++) {
    let subArr = arr[i].split('')
    strLengthArr.push(subArr.length)
  }

  const maxLength = strLengthArr.reduce( (accumulator, currentValue) => 
    Math.max(accumulator, currentValue)
  )

  // In case of a tie, the first word in the array order is returned

  // indexOf will select the index of the first element in the array that has the max length value, so we should be good in case of a tie

  let maxIndex = strLengthArr.indexOf(maxLength)
  return arr[maxIndex]
}


// TRANSMORGRIFY THE NUMBERS

// Calculate the product of the first two numbers

function transmorgifyNums (num1, num2, num3) {
  let product = num1 * num2

// Raise the product to the power of the third number

  let result = product ** num3

// Return result

  return result
}

