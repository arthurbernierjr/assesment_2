/*
*******************************************************

Verbal Question Responses. Lazariuk. General Assembly. Liberty.

1. A paramater is the characters used to represent what you are inputting into a program or function or etc. They are the theoretical placeholders of where the actual data will be inserted.
2. Within a function, the act of console.logging is exclusively a debugging / programming / internal developer communications tool. It does not initiate or manipulate the actual data in a functional manner.

*******************************************************
*/



// PALINDROME.
// 1. Convert the input string to lowercase to ensure the comparison is cas-sensitive.

// 2. Split the string into an array of characters, reverse the array, and join it back into a string.
// 3. Compare the original lowercase string with the reversed string
// 4. If they are the same, the function should return true. Otherwise, it returns false.
// 5. COMMIT WORK with message: 'palindrome completed'

function palindrome(string) {
    const arg = string.toLowerCase()
    const argArray = arg.split('').reverse('').join('')
if (arg !== argArray ){
    return false
}
    return true
}


// Sum Array

// 1. Initialize a variable to store the sum of the array elements
// 2. Use a for loop to iterate through the array
// 3. In each iteration, add the current element to the sum variable.
// 4. After the loop, return the sum variable.
// 5. Commit work with message 'sum array completed'

function sumArray(num) {
    let sumVariable = 0
    for (let i = 0; i < num.length; i++) {
      sumVariable = sumVariable + num[i]
    }
    return sumVariable
  }


// Prime Numbers - Check Prime
// 1. Check if the number is less than or equal to 1. If so, return false because it's not prime.
// 2. Use a for loop to iterate from 2 up to the square root of the number
// 3. If the number is divisible by any number in this range, return false
// 4. If no divisors are found, return true.

function checkPrime(num) {
    if (num <= 1) {
      return false
    }
    for (let i = 2; i < Math.sqrt(num); i++) {
      if (num % i === 0) {
        return false
      }
    }
    return true
  }

  // Prime Numbers - Print Primes
  // 1. Use a for loop to iterate through numbers from 2 up to the specified limit.
  // 2. For each number, use the checkPrime function to check if it's prime.
  // 3. If checkPrime returns true, console.log the number
  // 4. Commit your work with the message 'prime numbers completed'

  function printPrimes(num) {
    for (let i = 2; i < num; i++) {
      if (checkPrime(i)) {
        console.log(i)
      }
    }
  }


// Calculate the Cube
// 1. Calculate the cube of the number by multiplying the number by itself twice
// 2. Return the result
// 3. Commit your work under message 'calculate the cube completed'

function calculateCube(num) {
    let result = 1
    for (let i = 1; i < 3; i++) {
      result = result * num
    }
    return result
  }


// is a Vowel?
// 1. Check if the input character is included in a string of vowels, lowercase AND uppercase.
// 2. Return result
// 3. Commit your work with the message "is vowel completed"

function isVowel(char) {
    const letter = char.toLowerCase()
    const vowels = ["a", "e", "i", "o", "u"]
    if (vowels.includes(letter)) {
      return true
    }
    return false
  }


// Get Two Lengths
// 1. Return an array containing the lengths of the two input strings
// 2. Commit your work with the message 'get two lengths completed"

function getTwoLengths(str1, str2) {
    const lengthsArray = []
    lengthsArray.push(str1.length)
    lengthsArray.push(str2.length)
    return lengthsArray
  }


// Get Multiple Lengths
// 1. Use the map function to transform each string in the input array into its length
// 2. Return the resulting array of lengths
// 3. Commit your work with the message 'get multiple lengths completed'

function getMultipleLengths(array) {
    const lengthsArray = array.map(str => str.length)

    return lengthsArray
  }



// Maximum of Three Numbers
// 1. Use the Math.max function to find the maximum of the three numbers.
// 2. Return the maximum number.
// 3. commit your work with the message 'maximum of three numbers completed'

function maxThree(num1, num2, num3) {
    let maxNum = Math.max(num1, num2, num3)
    return maxNum
  }

  // Print Longest Word
// 1. Use the Reduce method to find the longest string in the array
// 2. In case of a tie, the first word in the array order is returned
// 3. Commit work with the message 'print longest word completed'

function printLongestWord(array) {
    let champ = ""
    const longestWord = array.reduce((champ, currentWord) => {
      if (currentWord.length === champ.length) {
        champ = champ
      } else {
        champ = currentWord
      }
      return champ
    }, "")

    return longestWord
  }


// Transmogrify the Numbers
// 1. Calculate the product of the first two numbers
// 2. raise the product to the power of the third number
// 3. return the result
// 4. Commit your work with the message 'transmogrify the numbers completed'

function transmogrifyNumbers(num1, num2, num3) {
    const product = num1 * num2
    let result = 1
    for (let i = 1; i <= num3; i++) {
      result *= product
    }
    return result
  }


// Project Euler Problem 2
// 1. Initialize two variables to store the first two numbers of the fibonacci sequence.
// 2. Use a while loop to generate Fibonacci numbers up to the specified limit
// 3. Within the loop, check if the current number is even. If so, add it to the sum.
// 4. Update the fibonacci sequence variables for the next iteration.
// 5. Return the sum of even fibonacci numbers
// 6. Commit your work with the message 'Project Euler Problem 2 Completed'


function fibonacciEuler(numCount) {
    let a = 1
    let b = 2
    let sum = 0

    while (b <= numCount) {
      if (b % 2 === 0) {
        sum += b
      }
      const c = a + b
      a = b
      b = c
    }
    return sum
  }


// Needle in the Haystack
// 1. Use the indexOf method to find the index of the 'needle' in the array
// 2. Return a string that includes the index of the needle
// 3. Commit your work with the message 'a needle in the haystack completed'

function needleHaystack(array) {
    if (array.includes("needle")) {
      const needleLocation = array.indexOf("needle").toString()
      return needleLocation
    }
    return null
  }


// End of Function List. Begin console logs below.
console.log("palindrome: " + palindrome("racecar")) // expect result true
console.log("sumArray: " + sumArray([1, 2, 3, 4])) // expect result 10
console.log("checkPrime: " + checkPrime(199)) // expect result true
console.log("Print Primes: " + printPrimes(45)) // expect result 2,3,5,7,11,13,17,19,23, 29, 31, 37, 41, 43
console.log("calculateCube: " + calculateCube(3)) // expect result 9
console.log("isVowel: " + isVowel("O")) // expect result true
console.log("getTwoLengths: " + getTwoLengths("chair", "couches")) // expect result [5, 7]
console.log("getMultipleLengths: " + getMultipleLengths(["spaghetti", "kentucky"])) // expect result [9, 8]
console.log("maxThree: " + maxThree(152, 25, 5)) // expect the result to be 152
console.log("printLongestWord: " + printLongestWord(["chicken", "cow", "pepsi", "granulation"])) // expect the result to be 'granulation'
console.log("transmogrifyNumbers: " + transmogrifyNumbers(3, 2, 3)) // expect the result to be 216
console.log("fibonacciEuler: " + fibonacciEuler(158)) // expect the result to be 188
console.log("needleHaystack: " + needleHaystack(["porcupine", "cactus", "box cutters", "needle", "daggar"])) // expect result "3"
