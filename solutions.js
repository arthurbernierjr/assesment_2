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



// Sum the Positive
// 1. Use the filter method to create a new array containing only positive numbers
// 2. Use the reduce method to sum the values of the filtered array.
// 3. Return the sum
// 4. Commit your work with the message 'sum the positive completed'

function sumPositive(numArray) {
    const positiveSum = numArray.filter(num => num > -1).reduce((acc, current) => acc + current, 0)
    return positiveSum
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
console.log("sumPositive: " + sumPositive([-3, -5, 3, 6, 4, -7, 2])) // expect result 15


// BELOW: Begin Identifying Problem Solving Patterns section of examination

// Ulterior Process
// 1. Read/understand the pattern and the given example's code
// 2. DO THE ABOVE.
// 3. Re-Write the example in pseudo-code like the problems given above
// 4. Use SOP below to try and solve the given problems
// 5. After thirty minutes each question, look up the answer online
// 6. Analyze the solution and compare it with your own data
// 7. Write out the found solution in pseudocode form and add it as comments in solutions.js. Attempt to solve it again using this pseudocode.
// 8. Have 'fun'
// 9. DO NOT DEVIATE FROM PROCESS

// THE PROCESS OF UNDERSTANDING
// 1. Read problem.
// 2. Understand problem.
// 3. Explore concrete examples.
// 4. Break it down.
// 5. Simplify/Solve loop
// 6. Look back and refactor

/*


FREQUENCY COUNTER.
Question 2: Same Frequency.

// Problem: Given two positive integers, find out if the two numbers have the same frequency of digits.
*/

function sameFrequency(num1, num2) {
  const one = num1.toString()
  const two = num2.toString()
  if(one.length !== two.length) {
    return false
  }

  const fq1 = {}
  const fq2 = {}
  for (let digit of one) {
    fq1[digit] = (fq1[digit] || 0) + 1
  }
  for (let digit of two) {
    fq2[digit] = (fq2[digit] || 0) + 1
  }
  for (let key in fq1) {
  if (fq1[key] !== fq2[key]) {
    return false
  }
}
  return true
}
/*
Same Frequency PseudoCode Redux.
1. declare stringified variables out of your accepted integer arguments.
2. compare whether the lengths of these are the same; elsewise, return false.
3. create two frequency counter objects for each integer.
4. populate these objects one at a time with the frequency of digit occurance. Using for loop or for of loop.
5. Compare the values for each key in the fq objects using either a forEach method or a for in loop.
6. Return true or false based on truthiness of answer.
*/
console.log("same frequency: " + sameFrequency(3589578, 5879385)) // expect true
// console.log("same frequency: " + sameFrequency(22, 222)) // expect false
// console.log("same frequency: " + sameFrequency(182, 281)) // expect true
// console.log("same frequency: " + sameFrequency(34, 14)) // expect false

/*
Question 3: Are there Duplicates
1. Use a frequency counter object to count the occurrences of each argument
2. Populate the frequency counter by iterating over the arguments
3. Iterate through the values of the frequency counter. If any value is greater than one, that means a duplicate exists.
3. Return true if duplicates are found, elsewise return false.
*/

// My clarification request to Arthur. Independently I could not solve this one without looking it up. WHY does the function work when we use 'arguments' as a name for the accepted arguments, without naming them at all within the parameters block? Should this not create an 'undefined' scenario?
function areThereDuplicates() {
  const fq = {}
  for (let arg of arguments) {
    fq[arg] = (fq[arg] || 0 ) + 1
    if (fq[arg] > 1) {
      return true
    }
  }
  return false
}
/*
Are there Duplicates PseudoCode Redux
1. Declare a function with empty parameters, which may then accept an unspecified quantity of arguments.
2. Declare an empty object for the frequency counter.
3. Create a for loop or a for of loop to iterate over the provided arguments and populate the frequency counter object
4. Within that same loop, create a conditional that will return true if the argument occurance frequency is greater than 1
5. Return false if loop completes without conditional truthiness.
*/
console.log("areThereDuplicates: " + areThereDuplicates(1, 2, 3)) // expect false
// console.log("areThereDuplicates: " + areThereDuplicates(1, 2, 2)) // expect true
// console.log("areThereDuplicates: " + areThereDuplicates('a', 'b', 'c', 'a')) // expect true
/*
// Sliding Windows is awful and I do not have effective visualization of how sliding windows works right now.
SLIDING WINDOWS.
Question 1: MinSubArrayLen
This function should return the minimal length of a contiguous subarray of which the sum is greater than or equal to the integer passed to the function. If there isn't one, return 0 instead.
1. Initialize two pointers at the start of the array and a variable to track the minimum length of the subarray
2. Initialize a sum variable to accumulate the sums of the subarrays
3. Expand the window by moving the end pointer, adding the values to the sum until it is greater than or equal to the target sum.
4. Once the sum is greater than or equal to the target, try to shrink the window from the beginning to find the smallest subarray by moving the start pointer forward and subtracting values from the sum.
5. Update the minimum length each time a smaller subarray that satisfies the condition is found
6. Return the minimum length if found. Otherwise, return 0.
 */

function minSubArrayLen(nums, s) {
  let windowSum = 0
  let output = Infinity;
  let windowStart = 0;
  for (let windowEnd = 0; windowEnd < nums.length; windowEnd++) {
    windowSum += nums[windowEnd];
    // shrink the window until the windowSum is smaller than s
    while (windowSum >= s) {
      output = Math.min(output, windowEnd - windowStart + 1);
      // subtract the element at the windowStart index
      windowSum -= nums[windowStart];
      // change windowStart to the next element
      windowStart++;
    }
  }
  return output == Infinity ? 0 : output;
}
/*
minSubArrayLen pseudocode redux
1. create function minSubArrayLen that accepts an array of integers and a target integer as parameters.
2. Initialize a variable for the temporary sum of integers within the current window.
3. Initialize a variable that represents the output / minimum length possible of the summed numbers within array.
3A. This variable may be set to Infinity as its initial value for placeholding purposes to be an impossibly large number. We always want smaller, so this is functionally acceptable.
4. Initialize a variable for the start position of the sliding window. This will start at index 0 of the array.
5. create a for loop through which to iterate over the array.
5A. in this for loop, your next variable, i, may be renamed 'end' for aesthetic purposes, and set to 0 to start.
6. Add the value at i / end to the current sum at start of each loop iteration
7. SHRINKING THE WINDOW. Create a while loop within this for loop to apply a conditional effect. While the sum isgreater than or equal to the target integer...
7A. the output / minimum length will be the lesser value: either the current output / minimum length, or the end point index value subtracted from the start point index value plus 1 (impossible to not be at least 1)
7B. subtract the integer value at index start from the current sum.
7C. shift index start one position ahead to 'slide' the window.
8. Return the answer: the output / minimum value will be returned as zero if it was not changed from initial value of infinity, or else returned as its current value from formulae.
*/

console.log("minSubArrayLen: " + minSubArrayLen([2, 3, 1, 2, 4, 3], 7)) // expect 2. [4,3] is the smallest subarray
// console.log("minSubArrayLen: " + minSubArrayLen([2, 1, 6, 5, 4], 9)) // expect 2. [5,4] is the smallest subarray
// console.log("minSubArrayLen: " + minSubArrayLen([3,1,7,11,2,9,8,21,62,33,19], 52)) // expect 2. [62] is greater than 52
// console.log("minSubArrayLen: " + minSubArrayLen([1,4,16,22,5,7,8,9,10], 39)) // expect 3.
// console.log("minSubArrayLen: " + minSubArrayLen([1,4,16,22,5,7,8,9,10],55)) // expect 5.
// console.log("minSubArrayLen: " + minSubArrayLen([4,3,3,8,1,2,3], 11)) // expect 2.
// console.log("minSubArrayLen: " + minSubArrayLen([1,4,16,22,5,7,8,9,10],95)) // expect 0.

/*
Question 2: FindLongestSubstring
Write a function called findLongestSubstringwhich accepts a string and returns the length of the longest substring with all distinct characters.
1. Initialize a variable to keep track of the longest substring length - DONE
2. Use a pointer or index to track the start of the current substring - DONE
3. Create a map or object to store characters and their positions within the string. - DONE
4. Iterate through the string iwth another pointer or index to represent the end of the current substring. - DONE END
5. As you encounter each character, check if it is already in the map/object. If it is, and its index is greater than or equal to the current start of the substring, move the start to the index after the repeated character.
6. Update the map/object with the current character's latest index.
7. Calculate the length of the current substring and update the longest length if necessary.
8. Return the longest length found. - DONE

*/

function findLongestSubstring(s) {
  // Store counters for the the start of the window and the longest string's length
  let startOfWindow = 0,
      longestStringLength = 0;

  // Initialise a Map to store the characters of the current string
  let characterMap = new Map();

  // Loop through the provided string
  for (let i = 0; i < s.length; i++) {
      // Store the current character, and its position in the Map (saves repeatedly looking it up)
      let currentCharacter = s[i];
      let currentCharacterPositionInMap = characterMap.get(currentCharacter);

      // Check if current character exists in the Map, and was found within the current window
      if (currentCharacterPositionInMap >= startOfWindow) {
          // Move the current window to start after the first instance of the current character
          startOfWindow = currentCharacterPositionInMap + 1;
      }
``
      // Add the current character to the Map with its position in the string
      characterMap.set(currentCharacter, i);

      // Store the current string length if bigger than the existing record
      longestStringLength = Math.max(
          longestStringLength,
          i - startOfWindow + 1
      );
  }
  return longestStringLength;
};

/*Pseudocode findLongestStringLength Redux
// This was a high efficiency version I discovered in my give - up afte attempting a while loop solution that I just couldn't get the hang of.
// 0. Create function findLongestSubstring which accepts parameter 's'
// 1. Using the 'map' built-in function, create an object variable to build an fc with the character contents of a string. For a couple more lines of code built in you can do a for of loop too
// 2. create a for loop which indexes through the string input.
// 2A. Create a variable for the current character in the string by the current location of index
// 2B. Create a variable for the resulting key that pushes the data into the fc Map using the .get() method
// 3. Create a conditional wherein if the current character at position is found in the fc we've built, update by...
// 3A. Updating the starting window position by adding the current character position value by one.
// 4. add the current character to the map fc and location in string
// 5. Store the current length by updating longest length variable with a conditional. Between the current value for longest length and the current gap between i/end window and starting window.
// 6. Return longest string length.
*/

console.log("findLongestSubstring: " + findLongestSubstring('')) // expect 0
// console.log("findLongestSubstring: " + findLongestSubstring('thisisawesome')) // expect 6
// console.log("findLongestSubstring: " + findLongestSubstring('thecatinthehat')) // expect 7
// console.log("findLongestSubstring: " + findLongestSubstring('bbbbbb')) // expect 1
// console.log("findLongestSubstring: " + findLongestSubstring('longestsubstring')) // expect 8
// console.log("findLongestSubstring: " + findLongestSubstring('thisishowwedoit')) // expect 6

/*
MULTIPLE POINTERS
Question 1: Count Unique Values
Problem Statement: Implement a function called countUniqueValues, which accepts a sorted array, and counts the unique values in the array. There can be negative numbers in the array, but it will always be sorted.
// 1. If the array is empty, return 0 - done
// 2. Initialize a pointer or index(i) to start at the first element in the array - done
// 3. Iterate through the array with another pointer or index(j) starting from the second element = done
// 4. Compare the elements at i and j . if they are different, increment i and set the value at i to the value at j. This effectively moves unique values to the front of the array without needing an auxilliary data structure.
// 5. The count of unique values will be i + 1 since i represents the index, and indexes are zero-based
// 6. return i + 1



*/

//original attempt:
// function countUniqueValues(array) {
//   if (array.length === 0) {
//     return 0
//   }
//   let i = 0
//   for (let j = 1; j < array.length; j ++) {
//     if (array[i] !== array[j]) {
//       i++
//       array[i] = array[j]
//     }
//     console.log(array[i])
//     console.log(i)
//     return i + 1
//   }
// }

function countUniqueValues(arr) {
  if (arr.length === 0) {
    return 0
  }
  let uniqueCount = 1 // at least one unique value for the variable existing.

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] !== arr[i - 1]) {
      uniqueCount++
    }
  }
  return uniqueCount
}

/* Count Unique Values PseudoCode Redux
// I decided to try this in this manner to show my coding notes from before the fact. in this problem we have both my original attempt code and final answer code preserved. I found one solution which eliminated the need for j to be iterating. Is this a more efficient system?

// 0. Declare the function which accepts an array as an input.
// 1. Edge case breaker, if the array is empty return 0
// 2. Create a variable for the total  count of different variable types
// 3. initiat a for loop to iterate through the elements of the array.
// 4. If the current index value of array DOESNT equal the one before, we increase the total number of different variables value within the unique count variable
// 5. we return the unique count.

*/

console.log("countUniqueValues: " + countUniqueValues([1,1,1,1,1,2])) // expect 2
// console.log("countUniqueValues: " + countUniqueValues([1,2,3,4,4,4,7,7,12,12,13])) // expect 7
// console.log("countUniqueValues: " + countUniqueValues([])) // expect 0
// console.log("countUniqueValues: " + countUniqueValues([-2,-1,-1,0,1])) // expect 4
/*
Question 2: Average Pair
Problem Statement: Write a function called averagePair. Given a sorted array of integers and a target average, determine if there is a pair of values in the array where the average of the pair equals the target average. There may be more than one pair that matches the average target.
// 1. If the array is empty, return false - DONE
// 2. Initialize two pointers: one at start of array and one at end of array - DONE
// 3. Create while loop. conditional while start pointer is less than end pointer - DONE
// 3A. Calculate the average at the start and end pointer, collect that data - DONE
// 3B. If the average is equal to the target average, return true - DONE
// 3C. If the calculated average is less than the target average, move the START pointer up (increment start) to try and increase the average - DONE
// 3D. If the calculated average is greater than the target average, move the end pointer down (decrement end) to try and decrease the average. - DONE
// 4. If no pair is found that matches the target average, return false.

*/
// below original attempt code almost verbatim like following chatgpt version but somehow broken. I cannot explain why and felt I actually had this one in the bag.
// function averagePair(array, avg) {
//   if (array.length === 0) {
//     return false
//   }
//   let start = 0
//   let end = array.length - 1
//   while (start < end) {
//     const average = (array[start] + array[end]) / 2
//     console.log(average)
//     if (average === avg) {
//       return true
//     }
//     else if (average < avg) {
//       start++
//     } else {
//       end--
//     }

//   }
//   return false
// }


function averagePair(arr, target) {
    if (arr.length === 0) {
    return false
  }
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
      const currentAverage = (arr[left] + arr[right]) / 2

      if (currentAverage === target) {
          return true // Found a pair with the target average
      } else if (currentAverage < target) {
          left++ // Move towards higher values to increase the average
      } else {
          right-- // Move towards lower values to decrease the average
      }
  }

  return false // No pair found with the target average
}

// averagepair pseudocode redux
// 1. declare start and end variables at beginning / end of array
// 2 / 0 . Create conditional if statement, return false if empty array
// 3. initiate a while loop which runs while starting point index is less than end point index
// 4. create a variable current average for each iteration of the loop. This will average the two position indexes' corresponding values together
// 5. If the average is the same as the input target, return true
// 5a. If the average is less than the input target, move starting position up one
// 5b. If the average is more than the input target, move ending position down one
// 5c. return false if no pair with the target average exists

console.log("averagePair: " + averagePair([1,2,3], 2, 5)) // expect true
// console.log("averagePair: " + averagePair([1,3,3,5, 6, 7, 10, 12, 19], 8)) // expect true , as [7, 10] has average of 8.5 abd [6, 10] has an average of 8
// console.log("averagePair: " + averagePair([-1,0,3,4,5,6], 4.1)) // expect false
// console.log("averagePair: " + averagePair([], 4)) // expect false


/*

DIVIDE AND CONQUOR
Question 1: Find First and Last Position of Element in Sorted Array
Problem Statement: Given an array of integers sorted in ascending order, find the starting and ending position of a given target value. If the target is not found in the array, return [-1, -1].

// 1. Binary Search for First Position: Implement a modified binary search to find the first occurrence of the target. If the target is found, instead of returning immediately, continue searching to the left (lower indices) to see if there are earlier occurrences.
// 2. Binary Search for Last Position: Implement a modified binary search to find the last occurrence of the target. If the target is found, continue searching to the right (higher indices) to see if there are later occurrences.
// 3. Return Positions: Use the results from the two modified binary searches to return the start and end positions of the target value in the array.

*/



// function findFirstAndLastPosition(arr, val) {
//   let start = arr[0]
//   let end = arr.length - 1

//   while (start < end) {
//     if val
//   }

// }

function findFirstAndLastPosition(nums, target) {
  let left = 0;
  let right = nums.length - 1;
  let output = [-1, -1];

  // Binary search for the target (left-biased)
  while (left < right) {
      let middle = Math.floor((left + right) / 2);

      if (nums[middle] < target) {
          left = middle + 1;
      } else {
          right = middle;
      }
  }
  // If the target was not found on the first pass
  if (nums[left] != target) {
      return output;
  }
  // Store the left-hand side
  output[0] = left;
  // Reset the right-hand side of the binary search (left-hand side remains as is)
  right = nums.length - 1;
  // Binary search for the target (right-biased)
  while (left < right) {
      let middle = Math.floor((left + right) / 2) + 1;
      if (nums[middle] <= target) {
          left = middle;
      } else {
          right = middle - 1;
      }
  }

  // Store the right-hand side
  output[1] = right;

  return output;
};

/*
0. declare function with accepted number array and target value parameters
1. declare variables for starting and ending positions
2. create default ouput value of [-1, -1] for edge case.
3. create while loop. while left is less than right.
4. create variable for the middle index using the average between the left and right index values
5. If the value at middle index of array is less than target value...
5a. left/start value becomes one above the middle
5b. or else the right becomes the middle
// at end of looping,
6. If the value at left position of array don't equal target value, return the output.
7. store the value of the lefthand side  in a variable
8. stpre the value of righthand side in variable.
9. create a NEW while loop, repeating stepd 3-5 to find value for RIGHT variable
10. store the right hand side value in the output.
11. return the final output

*/

console.log("findFirstAndLastPosition: " + findFirstAndLastPosition([5,7,7,8,8,10], 8)) // should return [3, 4]
// console.log("findFirstAndLastPosition: " + findFirstAndLastPosition([5,7,7,8,8,10], 6)) // should return [-1, -1]
// console.log("findFirstAndLastPosition: " + findFirstAndLastPosition([], 6)) // should return [-1, -]

/*

Question 2: Pow(x, n) - BONUS QUESTION ONLY; SAVE FOR FINAL.

Problem Statement: Implement pow(x, n), which calculates xraised to the power n(i.e., x^n).

Solution Steps:

Handle Base Case: If n is 0, return 1.
Handle Negative Power: If nis negative, convert the problem into calculating pow(x, -n)and take the reciprocal at the end.
Divide and Conquer: Use the property that x^n = x^(n/2) * x^(n/2)for even n, and for odd n, it's x * x^(n/2) * x^(n/2). This reduces the problem size by half with each recursive call.
Combine Results: Calculate pow(x, n/2)once and use it to compute the final result to avoid redundant calculations.

*/



function pow(x, n) {
  // Base Case: If n is 0, return 1
  if (n === 0) {
      return 1;
  }

  // Handle Negative Power: Convert the problem into calculating pow(x, -n) and take the reciprocal at the end
  if (n < 0) {
      x = 1 / x;
      n = -n;
  }

  // Divide and Conquer
  const halfPower = pow(x, Math.floor(n / 2));

  // Combine Results
  if (n % 2 === 0) {
      // For even n: x^n = (x^(n/2))^2
      return halfPower * halfPower;
  } else {
      // For odd n: x^n = x * (x^(n/2))^2
      return x * halfPower * halfPower;
  }
}

/*

pseudocode pow redux

00. declare function pow which accepts x and n parameters
0. edge case. return 1 if n is zero.
1. edge case - handling negatives. if n is a negative number, inverse it to a positive number. X now becomes a decimal of itself
2. create a half point variable which recursively calls pow using math.floor of 1/2 n
3. if n is even, return the product of half point variable times itself.
4. ELSE. return x times the result of half point times itself.
*/


console.log(pow(2, 10)) // expect 1024
console.log(pow(2, -2)) // expect .25
console.log(pow(2, 0)) // expect 1


/*
Question 3: Merge Sort
Problem Statement: Implement Merge Sort, a sorting algorithm that follows the Divide and Conquer paradigm.
1. Divide: If the array has more than one element, split the array into two halves.
2. Conquer: Recursively apply merge sort to both halves.
3. Combine: Merge the two sorted halves into a single sorted array.
4. Base Case: If the array has only one element, it is already sorted.
5. Merge Function:
  -The merge function takes two sorted arrays and merges them into a single sorted array by repeatedly taking the smaller of the two leading elements.

*/

function mergeSort(arr) {
  if (arr.length <= 1) {
      return arr;
  }
  // Split the array into two halves
  const mid = Math.floor(arr.length / 2);
  const left = arr.slice(0, mid);
  const right = arr.slice(mid);
  // Recursively sort each half
  const sortedLeft = mergeSort(left);
  const sortedRight = mergeSort(right);
  // Merge the sorted halves
  return merge(sortedLeft, sortedRight);
}
function merge(left, right) {
  let result = [];
  let leftIndex = 0;
  let rightIndex = 0;
  // Compare elements from both arrays and merge them in sorted order
  while (leftIndex < left.length && rightIndex < right.length) {
      if (left[leftIndex] < right[rightIndex]) {
          result.push(left[leftIndex]);
          leftIndex++;
      } else {
          result.push(right[rightIndex]);
          rightIndex++;
      }
  }

  // Append any remaining elements from both arrays
  result = result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));

  return result;
}

/*
mergeSort pseudocode redux
0. declare a function mergeSort which accepcts an array of numbers
1. edge case. return the value of the array if its length is one or less
2. declare variables that split the array into its middle index, left half, and right half.
2a. Super hint: use arr.slice() to create those nifty  substrings!
3. Using recursion, Sort both halves using mergeSort() function and store these values in variables.
4. return via merge function both halves sorted back together.
5. CREATE the merge function that accepts left and right values discovered in mergeSort.
6. declare empty array for the result values and starting/ending indexes, both at 0.
7. initiate while loop. While the leftside is less than the right side...
7a. create if conditional. value at left's left side is less than the right's right side...
7b. push the value of left's left side into the results array.
7c. increment left index up by one
8. ELSE. push value of right's right index into results and increment right index value.
9. concatenate the result by slicing left's left side inot a substring, right's right side, and then merging
10. return the result

*/

console.log(mergeSort([1,7,5,4])) // expect [1,4,5,7]

/*


Question 4: Quick Sort
Problem Statement: Implement Quick Sort, a sorting algorithm that follows the Divide and Conquer paradigm.
1. Choose Pivot: Select a pivot element from the array. The choice of pivot can affect the algorithm's performance but does not affect correctness. A common approach is to pick the last element as the pivot.
2. Partition: Rearrange the array so that all elements less than the pivot come before it, and all elements greater come after it. After this step, the pivot is in its final position.
3. Recursively Apply: Apply quick sort to the sub-arrays formed by dividing the array around the pivot.
4. Base Case: If the array has one or no elements, it is already sorted.
5. Concrete Examples for Merge Sort and Quick Sort are not provided due to the nature of these algorithms being applied to sort arrays rather than producing a single deterministic output for a given input. However, the effectiveness and efficiency of both algorithms can be observed by applying them to any unsorted array of integers.


*/

function quickSort(arr) {
  if (arr.length <= 1) {
      return arr;
  }

  const pivot = arr[Math.floor(Math.random() * arr.length)]; // Choose a random pivot
  const left = [];
  const right = [];
  const equal = [];

  // Partition the array into elements less than, equal to, and greater than the pivot
  arr.forEach(element => {
      if (element < pivot) {
          left.push(element);
      } else if (element > pivot) {
          right.push(element);
      } else {
          equal.push(element);
      }
  });

  // Recursively sort the left and right partitions
  const sortedLeft = quickSort(left);
  const sortedRight = quickSort(right);

  // Concatenate the sorted partitions and the equal elements to get the final sorted array
  return sortedLeft.concat(equal, sortedRight);
}


/*

Pseudocode quickSort Redux
0. declare function quick sort which accepts an array of integers as argument.
1. edge case. If the array length is less than or equal to one, return the value of the array
2. declare pivot variable by random selection. use Math.random!
3. declare left right and equal variables, empty for now
4. for each methhod through the array. for each element...
4a. if the element is less than the pivot value, push the element into the left array
5. if the element is greater than the pivot value, push the element into the right array
6. or else push the element into the equal array
7. create two variables that use recursion to call quickSort and sort these completed left and right arrays.
8. return the concatenatation to the end of the sorted left array the values of equal and sorted right arrays.

*/


console.log(quickSort([1,7,5,4])) // expect [1,4,5,7]
