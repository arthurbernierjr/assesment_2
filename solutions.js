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


// MULTIPLE POINTERS

// Example Pseudocode

// 1. Initialize a left and right pointer by assigning a variable the value of 0 and another with the length of the array minus one.

// 2. Set a loop that won't stop until the left pointer is greater than or equal to the right pointer.

// 3. Initialize a variable to hold the sum of the two pointers' values as indexes in the array.

// 4. Check if the sum is 0.  If so, return the two values in the array that's indexes are the current pointers.

// 5. If the sum is not 0, check to see if the sum is positive or negative. If it's negative, add one to the left pointer. If it's positive, subtract one from the right pointer.

// 6. If the loop finishes without the sum ever reaching 0, then return undefined.

// Question 1: Count Unique Values

// *** my solution attempt (figured it out easily) ***

function countUniqueValues(arr) {

// If the array is empty, return 0

  if (arr.length < 1) return 0

// Initialize a pointer or index (i) to start at the first element of the array.

  let startPoint = 0

// Iterate through the array with another pointer or index(j), starting from the second element

  for (let i = 1; i < arr.length; i++) {

// Compare the elements at i and j. If they are different, increment i, and set the value at i to the value at j.

    if (arr[startPoint] !== arr[i]) {
      startPoint++
      arr[startPoint] = arr[i]
    }
  }
// The count of the unique values will be i + 1 since i represents the index, and indexes are zero-based.
  
  return startPoint + 1
}

// Solution found online with pseudocode:

function countUniqueValuesSolution(array){
  if(array.length==0)return 0;
    let i=0;
        for (let j = 1; j < array.length; j++) {
          if(array[i]!=array[j]){
            i++;
            array[i]=array[j];
          }
        }       
  return i+1;
}

// 1. Check to see if array is empty. If it is, return 0.

// 2. Set a variable to act as the starting point index.

// 3. Iterate through the array starting at index 1.

// 4. Compare the value of the elements at the starting index and the current loop index. If they are different, increase the starting index by one and set the value of the array element at that index to the value of the element at the current loop index.

// 5. Once loop is finished, return the starting index + 1 (the number of unique elements).


// Question 2: Average Pair

// *** My solution attempt (figured out easily) ***:

function averagePair(arr, int) {

// If the array is empty, return false.

  if (arr.length < 1) return false

// Initialize two pointers, one at the start of the array and the other at the end

  let start = 0
  let end = arr.length - 1

// While the start pointer is less than the end pointer:

  while (start < end) {

// Calculate the average of the values at the start and end pointers

    let average = (arr[start] + arr[end])/2

// If the calculated average is equal to the target average, return true

    if (average === int) {
      return true
    }

// If the caculated average is less than the target average, move the start pointer up to try and increase the average

    if (average < int) {
      start++

// If the calculated average is greater than the target average, move the end pointer down.

    } else {
      end--
    }
  }

// If no pair is found that matches the target average, return false

  return false
}


// Solution found online with pseudocode:

function averagePairSolution(arr, n){
  let i = 0
  let j = arr.length-1;
  while(i < j){
    let avg = (arr[i]+arr[j]) / 2 
    if(avg === n) return true;
    else if(avg < n) i++
    else j--
  }
  return false;
}

// 1. Set a start point to act as index 0 and an end point to act as the final index in the array.

// 2. While the start point is less than the end point, loop through the array and, on each cycle, calculate the average of the values at the start and end point.

// 3. If the average matches the number given as an argument, return true.

// 4. If the average is less than the number argument, increase the start point. If it's more, decrease the end point.

// 5. If the loop finishes and the average never matched the given number, return false.


// DIVIDE AND CONQUER

// Example: Binary Search

// Pseucode:

// 1. Initialize a start point set at 0 and an end point set at the final index of the array.

// 2. While the end point is greater than the start point, initialize a variable to to act as a midpoint of the array.

// 3. If the value at the mid point is the same as the value argument, return the mid point variable.

// 4. If the value at the mid point is less than the value argument, set the start point at the mid point variable + 1.

// 5. If the value at the mid point is greater than the value argument, set the end point at the mid point - 1.

// 6. If the loop finishes without the target value having been found, return -1.


// Question 1: Find First and Last Position of Element in Sorted Array

// *** my solution attempt (couldn't figure it out without looking it up, but it makes sense now) *** :

function firstOccurrence(arr, int) {
  
// Implement a modified binary search to find the first occurrence of the target. If the target is found, instead of returning immediately, continue searching to the left (lower) indices to see if there are earlier occurrences.

  let left = 0
  let right = arr.length - 1

  while (left <= right) {
    let middle = Math.floor((left + right) / 2)
    let currentElement = arr[middle]
  
    if (currentElement === int) {
      if ((arr[middle - 1] < int) || (middle === 0)) {
        return middle
      } else {
        right = middle - 1
      }
    } else if (currentElement < int) {
      left = middle + 1
    } else {
      right = middle - 1
    }
  }
return -1
}
// Implement a modified binary search to find the last occurrence of the target. If the target is found, continue searching to the right (higher indices) to see if there are later occurrences.

function lastOccurrence(arr, int) {
  
  let left = 0
  let right = arr.length - 1
  
  while (left <= right) {
    let middle = Math.floor((left + right) / 2)
    let currentElement = arr[middle]
    
    if (currentElement === int) {
      if ((arr[middle + 1] > int) || (middle === arr.length - 1)) {
        return middle
      } else {
        left = middle + 1
      }
    } else if (currentElement < int) {
      left = middle + 1
    } else {
      right = middle - 1
    }
  }
  return -1
}

// Use the results from the two modified binary searches to return the start and end positions of the target value in the array.

function firstAndLastOccurrence(arr, int) {
  return [firstOccurrence(arr, int), lastOccurrence(arr, int)]
}

// Solution found online with pseudocode: 

function firstSolution(arr,low,high,x,n)
{
    if (high >= low) {
        let mid = low + Math.floor((high - low) / 2);
        if ((mid == 0 || x > arr[mid - 1]) && arr[mid] == x)
            return mid;
        else if (x > arr[mid])
            return first(arr, (mid + 1), high, x, n);
        else
            return first(arr, low, (mid - 1), x, n);
    }
    return -1;
}
 
function lastSolution(arr, low, high, x, n)
{
    if (high >= low) {
        let mid = low + Math.floor((high - low) / 2);
        if ((mid == n - 1 || x < arr[mid + 1]) && arr[mid] == x)
            return mid;
        else if (x < arr[mid])
            return last(arr, low, (mid - 1), x, n);
        else
            return last(arr, (mid + 1), high, x, n);
    }
    return -1;
}
 
    // let arr = [ 1, 2, 2, 2, 2, 3, 4, 7, 8, 8 ];
    // let n = arr.length; 
 
    // let x = 8;
    // document.write("First Occurrence = " + first(arr, 0, n - 1, x, n),"</br>");
    // console.log("Last Occurrence = " + last(arr, 0, n - 1, x, n),"</br>");

// 1. Declare a function to find the lowest index of the occurrence. 

// 2. Set low to the first index of the array and high to the last.

// 3. Check if high is greater than low. If it is, set the mid point as the average of the two plus low.

// 4. After setting the mid, check to see if either the mid is 0 (to avoid returning -1 if the first value of array matches the target) or the target value is greater than the array value at mid - 1 (meaning that the next value down does not match the target), and if the array value at mid matches the target value.  If so, return mid.

// 5. Otherwise, if the target value is greater than the array value at mid, call the function again with the low value replaced by mid + 1. If the target value is less than the array value at mid, call the function again the the high value replaced by mid - 1.

// 6. If the conditionals run and nothing is returned, return -1 for the first value.

// 7. Make a similar function that instead returns the highest occurrence of the target value.

// 8. The first and last index values should be returned after both functions have run.


// Question 2: Pow(x, n)

// *** my solution attempt (solved pretty easily, but I think I should not have used ** trick. Updated after solution looked up. Had some trouble figuring out the negative bit without **) ***

function pow(x, n) {

  if (n === 0) {
    return 1
  }

  let m = parseInt(n / 2, 10)
  let res = (pow(x, m))

  if (n < 0) {
    return pow(1 / x, -1 * n)
  }

  if (n % 2 === 0) {
    return res * res
  } else {
    return x * res * res
  }
}

// Solution found online with Pseudocode:

function power(x, y)
{
    if (y == 0)
        return 1;
    else if (y % 2 == 0)
        return power(x, parseInt(y / 2, 10)) *
            power(x, parseInt(y / 2, 10));
    else
        return x * power(x, parseInt(y / 2, 10)) *
                power(x, parseInt(y / 2, 10));
}
 
// Driver code
// let x = 2;
// let y = 3;
 
// document.write(power(x, y));

// 1. Check if second argument (y) is 0. If so, return 1, as any number to the 0th power is 1.

// 2. If y is even, return the product of two recursive functions that both have the second argument as y / 2 (parsed into with radix ten to convert from a decimal).

// 3. If y is odd, return the same but multiply the product by the first argument (x)


// Question 3: Merge Sort

// Solution Attempt (from class):

function mergeSort(arr) {
  
  if (arr.length <= 1) {
    return arr
  }
    
  let halfArr = Math.floor(arr.length / 2)
    
  let leftHalf = mergeSort(arr.slice(0, halfArr))
  let rightHalf = mergeSort(arr.slice(halfArr))
    
  return merge(leftHalf, rightHalf)
}

// HELPER FUNCTION: merge two sorted arrays
function merge(arr1, arr2) {
  let result = []
  
  while (arr1.length && arr2.length) {
    if(arr1[0] <= arr2[0]) {
      result.push(arr1.shift());
    } else {
      result.push(arr2.shift());
    }
  }
  
  return result.concat(arr1, arr2);
}

// Solution found online with pseudocode:

function mergeSort(arr) {

  if (arr.length <= 1) return arr
  let mid = Math.floor(arr.length / 2)

  let left = mergeSort(arr.slice(0, mid))
  let right = mergeSort(arr.slice(mid))
  return merge(left, right)
}

function merge(left, right) {
  let sortedArr = [] 
  while (left.length && right.length) {

    if (left[0] < right[0]) {
      sortedArr.push(left.shift())
    } else {
      sortedArr.push(right.shift())
    }
  }
  return [...sortedArr, ...left, ...right]
}
merge([1, 4], [2, 6, 9]) // [1, 2, 4, 6, 9]

// for mergeSort function

// 1. Create a base case that returns the array if the length of the array is 0.

// 2. Initialize a mid point of the array.

// 3. Set the left and right variables to cover one half of the available array by recursively calling mergeSort with a slice of the array from the beginning to the mid point and another from the mid point to the end.

// 4. Return merge helper function with both left and right.

// for merge helper function

// 5. In merge(left, right), initialize an array to hold the sorted items.

// 6. While the left and right variables have a length, loop through the array. 

// 7. If the value of the first value of left is less than the first value of right, push the value from the left into the sorted array and shift that element out of left. Otherwise, push the right value into the sorted array and shift that element out of the right.

// 8. Once the loop has finished, return a concatenated array consisting of the sorted array, the left arr, and the right arr.



