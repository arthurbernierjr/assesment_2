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

function transmorgrifyNums (num1, num2, num3) {
  let product = num1 * num2

// Raise the product to the power of the third number

  let result = product ** num3

// Return result

  return result
}


// PROJECT EULER PROBLEM 2

// Initialize two variables to store the first two numbers of the Fibonacci sequence

function evenFibSum(limit) {
  let num1 = 1
  let num2 = 2

// Use a while loop to generate Fibonacci numbers up to the specified limit
  let sum = 0
  let i = 1
  while (i <= limit) {

// Within the loop, check if the current number is even. If so, add it to the sum

    if (num1 % 2 === 0) {
      sum = sum + num1
    }
    
// Update the Fibonacci sequence variables for the next iteration

    let nextNum = num1 + num2
    num1 = num2
    num2 = nextNum

    i++
  }

// Return the sum of even Fibonacci numbers

  return sum
}


// A NEEDLE IN THE HAYSTACK

// Use the indexOf method to find the index of the "needle" in the array

function findNeedle(arr) {

  let needleIndex = arr.indexOf('needle')

  let string = `The needle is at index ${needleIndex}`

// Return a string that includes the index of the needle
  
  return string
}


// SUM THE POSITIVE

// Use the filter method to create a new array containing only positive numbers

function sumThePositive(arr) {

  let positives = arr.filter((num) => num > 0)

// Use the reduce method to sum the values of the filtered array

  let sum = 0

  for (let number of positives) {
    sum = sum + number
  }

// Return sum

  return sum
}


// PART 2

// PROBLEM SOLVING PATTERNS

// FREQUENCY COUNTER

// Question 1 (example): Valid Anagram

// Pseudocode for solution:

// 1. Check if lengths of strings are the same.  If not, return false.

// 2. Create an empty object to serve as the frequency counter.

// 3. Use a for loop to iterate through the first string. Use a ternary operator to check if the letter is already a key in the object.  If it is, increase the value by one.  If it's not, set the value to one.

// 4. Use a second for loop to iterate through the second string.  Check each letter to see if it is already present as a key in the frequency counter.  If it is, decrease the value of that key by one.  If it's not, return false.

// 5. If the second for loop is able to finish running without having returned false, then the strings are anagrams and the function should return true.


// Question 2: SAME FREQUENCY

// *** Solution attempt (figured it out) ***:

function sameFreq(num1, num2) {
// Convert both numbers to string representations to easily iterate over the digits
  
  const str1 = num1.toString()
  const str2 = num2.toString()
  
// Forgot this step on original attempt!
  if (str1.length !== str2.length) {
    return false
  }
// Initialize two frequency counter objects for each number
  
  const counter1 = {}
  const counter2 = {}
  
// Populate the frequency counters by iterating over each digit of the two numbers
  
  for (let i = 0; i < str1.length; i++) {
    counter1[str1[i]] ? counter1[str1[i]] += 1 : counter1[str1[i]] = 1
  }
  
  for (let i = 0; i < str2.length; i++) {
    counter2[str2[i]] ? counter2[str2[i]] += 1 : counter2[str2[i]] = 1
  }
  
// Compare the two requency counters.  If they have the same keys with the same values, the numbers have the same frequency of digits; otherwise, they do not.
  
// Return true if the frequencies match, otherwise return false
  
  for (let key in counter1) {
    let counter2Keys = Object.keys(counter2)
    if (!(counter2Keys.includes(key))) {
      return false
    }
    if (!(counter2[key] === counter1[key])) {
      return false
    }
} 
  return true
}
  
// Answer found online with my pseudocode:
  
function sameFrequency(a, b){
  let integerA = a.toString();
  let integerB = b.toString();
  if (integerA.length !== integerB.length) {
    return false;    
  }
  const lookup = {};
  for (let i = 0; i < integerA.length; i++) {
    let number = integerA[i];
    lookup[number] ? lookup[number] += 1 : lookup[number] = 1;
  }
  for (let i = 0; i < integerB.length; i++) {
    let number = integerB[i];
    if (!lookup[number]){
      return false;
    } else {
      lookup[number] -= 1;  
    }
  }
  return true
}
  
// 1. convert both integers to strings
  
// 2. check if they are the same length.  If they aren't return false. 
  
// 3. assign empty object to variable for a frequency counter
  
// 4. loop through the first integer's digits and add key value pairs to lookup object.
  
// 5. loop through second integer's digits and check if they are in the frequency counter object.  If one isn't, return false.  If one is, decrease the frequency of the value of that key.
  
// 6. Return true if it makes it through loop without returning false. Note: they solved this very similar to the validAnagram case, but I'm not sure it's in line with the instructions provided for the problem.
  
  
  
// Question 3: ARE THERE DUPLICATES
  
// *** Solution attempt (figured out) ***
  
function areThereDuplicates(...args) {
  
// Use a frequency counter object to count the occurrences of each argument
    
  counter = {}
  
// Populate frequency counter by iterating over the arguments
  
  for (let i = 0; i < args.length; i++) {
    counter[args[i]] ? counter[args[i]] += 1 : counter[args[i]] = 1
  }
  
// Iterate through the values of the frequency counter.  If any value is greater than 1, it means a duplicate exists.
  
// Return true if any duplicates are found, otherwise return false.
  
  for (let key in counter) {
    if (counter[key] > 1) {
      return true
    }
  }
  
  return false
  
// NOTE: as currently set up, 2 and '2' will count as a duplicates. Instructions were unclear whether this is permissible or not. In interview, ask about it!
}
  
// Answer found online with my pseudocode:
  
const areThereDuplicatesSolution = (...args) => {
  const argFrequency = {};
  for (let idx = 0; idx < args.length; idx += 1) {
    argFrequency[args[idx]] = (argFrequency[args[idx]] || 0) + 1;
  }
  const argFrequencyVals = Object.values(argFrequency);
  for (let idx = 0; idex <= argFrequencyVals.length; idx += 1) {
    if (argFrequencyVals[idx] > 1) {
      return true
    }
  }
  return false
  
// Note: we solved this very similarly.
}
  
// 1. Assign an empty object to a variable to act as a frequency counter
  
// 2. Set up a for loop to iterate over arguments and add them as keys to the frequency counter.  The way they do it is they set the value of the key by first checking if it's in the counter with a disjunction. If it's not, it's added with a value of 0 and one is added to it. If it is, just increases the value by one.
  
// 3. Assigns a variable to the object values in the frequency counter
  
// 4. Loops through the values of the keys in the frequency counter to check if any are any that are equal to more than one. If so, there are duplicates, so return true. If the loop finishes and no duplicates are found, return false.
  
  
// SLIDING WINDOW
    
// Example: MaxSubarraySum
    
// Pseudocode for solution:
    
// 1. Declare a function that takes an array and a number as arguments.
    
// 2. Assign two variables, one that is meant to eventually be returned as the maximum sum and the other to serve as a temporary sum to compare to current values of the max sum.
    
// 3. Check if array is smaller than the number argument. If so, return null.
    
// 4. Get an initial window sum by iterating through the array argument until the index is equal to the number argument, adding all of the iterated values to the max sum.
    
// 5. Set the assign the temporary sum with the value of the max sum.
    
// 6. Loop through the array argument again, but this time starting at the index that's the same as the number argument.
    
// 7. On each iteration, add the current iterated value of the array to the temporary sum, but subtract the value at the index that is the difference between the current iterated index and the number argument (arr[i - n]).  This makes it so that the sum only includes consecutive values up to the number given as an argument.
    
// 8. After the temporary sum is set on that iteration, compare its value to the current value of max sum and assign to max sum whichever value is larger.
    
// 9. Once the loop is complete, return the max sum.
    
    
// Question 1: MinSubArrayLen
    
// *** my solution attempt (figured it out, but it was rough) ***
    
function minSubArrayLen(arr, int) {
    
// Initialize two pointers at the start of the array and a variable to track the minimum length of the subarray
      
  let startPoint = arr[0]
  let endPoint = arr[0]
  let minLength = 0
      
// Initialize a sum variable to accumulate the sums of the subarrays
      
  let sum = 0
  let initSum = 0
      
// Expand the window by moving the end pointer, adding the values to the sum until it is greater than or equal to the target sum
      
  for (let i = 0; sum < int; i++) {
    endPoint = arr[i]
    sum = sum + endPoint
    minLength = i + 1
    if (sum < int && endPoint === arr[arr.length - 1]) {
      return 0
    }
  }
      
  sum = sum - endPoint
  initSum = sum
        
// Once the sum is greater than or equal to the target, try to shrink the window from the beginning to find the smallest subarray by moving the start pointer forward and subtracting values from the sum
      
  for (let i = 0; i < arr.length; i ++) {
        
    endPoint = arr[i + (minLength - 1)]
    startPoint = arr[i]
    sum = sum - startPoint + endPoint
      
// update the minimum length each time a smaller subarray that satisfies the condition is found.
      
    if (sum >= int) {
      minLength = minLength - 1
      sum = initSum - arr[minLength - 1]
      i = -1
      if (minLength === 1){
        return minLength
      }
    }
  }
      
  // Return the minimum length if found; otherwise, return 0.
      
  return minLength
}
      
      
// Solution found online with pseudocode:
      
function minSubArrayLen(arr, int) {
  let total = 0;
  let start = 0;
  let end = 0;
  let length = Infinity;
      
  while (start < arr.length) {
    if (total < int && end < arr.length) {
      total += arr[end];
      end++;
    } else if (total >= int) {
      length = Math.min(length, end - start);
      total -= arr[start];
      start++;
    } else {
      break;
    }
  }
      
  return length === Infinity ? 0 : length;
// NOTE: I liked the way I solved it better
}
      
// 1. Declare a function that accepts an array and an integer as arguments.
      
// 2. Initialize a variable for the total, the start point, the end point, and the length.
      
// 3. Loop over the array and check if the total is less than the integer argument and the endpoint is less than the array length. If both are true, add the value of the element of the array that's at the index of the end value to the total and increase the end value by one.
      
// 4. Check if the total is greater than the integer. If so, assign the length variable with either the current length or the difference between the end value and the start value depending on which is smaller. This will gradually shrink the length as smaller subarrays are needed to hit the integer threshold. 
      
// 5. If the total is greater than the integer, then subtract the array value at the index with the start value from the total and add one to start.
      
// 6. If the above conditions are not met, stop the loop to avoid infinite regress.
      
// 7. Return the length if it has changed from its default value (the elements of the array can add up to the integer argument), return 0 otherwise.
      
      
// Question 2: FindLongestSubstring
      
// *** Solution Attempt (couldn't quite get it without looking it up, but now it's straightforward) ***
      
function findLongestSubstring(str) {
      
// Initialize variable to keep track of the longest substring length
      
  let longestLength = 0
      
// Use pointer or index to track the start of the current substring
      
  let startPoint = 0
      
// Create a map or object to store characters and their positions within the string
      
  freqCounter = {}
      
// Iterate through the string with another pointer or index to represent the end of the current substring

  for (let i = 0; i < str.length; i++) {
    let objKeys = Object.keys(freqCounter)
    let letter = str[i]

// As you encounter each character, check if it is already in the map/object. If it is, and its index is greater than or equal to the current start of the substring, move the start to the index after the repeated character
      
    if (objKeys.includes(letter)) {
      startPoint = Math.max(startPoint, freqCounter[letter])
    }
            
// Update the map/object with the current character's latest index
      
    freqCounter[letter] = i
      
// Calculate the length of the current substring and update the longest length if necessary
      
    longestLength = Math.max(longestLength, i - startPoint)
  }
        
// Return the longest length found
      
  return longestLength
}
      
// Solution found online with pseudocode:
      
const findLongestSubstringSolution = str => {
  let lengthOfLongestStr = 0;
  let seen = {};
  let i = 0;
      
  for (let j = 0; j < str.length; j++) {
    let char = str[j];
    if (seen[char]) i = Math.max(i, seen[char]);
    lengthOfLongestStr = Math.max(lengthOfLongestStr, j - i + 1);
    seen[char] = j + 1;
  }
  return lengthOfLongestStr;
};
      
// 1. Initialize variables for longest substring length, an independent index (not defined for loop), and an object to keep track of letters and indexes.
      
// 2. Use a loop to iterate over the string argument and check if each character is in the object. If is it is, set the independent index to either itself or the value of the character in the object depending on whichever is largest.
      
// 3. Set the value of the longest substring length to either itself or the difference between the current loop index and the independent index plus 1 (whichever is largest). The latter adds one to the difference between the two indexes which are essentially serving as a startPoint and an endPoint. That is, if the length is set to the latter, it is set to the length of the current substring.
      
// 4. Set the value of the character key in the object to the loop index plus 1. The addition of one helps account for increase of the loop index on the next cycle.
      
// 5. Return the length of the longest substring.