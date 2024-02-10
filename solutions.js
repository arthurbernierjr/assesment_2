// What is the difference between a parameter and an argument?
    // Parameters are the placeholders that are used to indicate which arguments must be passed into a function in order for it to be functional.
// Within a function, what is the difference between return and console.log?
    // Return will "return" a specific piece of data when a function is called, whereas console.log will return any piece of data directly to the console. Console.log does not have to be associated with a function.

// Palindrome
// Convert the input string to lowercase to ensure the comparison is case-insensitive.
// Split the string into an array of characters, reverse the array, and then join it back into a string.
// Compare the original lowercase string with the reversed string.
// If they are the same, the function should return true; otherwise, it returns false.
// Commit your work with the message "palindrome completed".

// Make an arrow function to split the lowercase version of the string, reverse it, and join it back together. Use a ternary expression to determine whether it is true or false.
const palindrome = (string) => string.toLowerCase() === string.toLowerCase().split('').reverse().join('') ? true:false
console.log(palindrome("racecar"))

// Sum Array
// Initialize a variable to store the sum of the array elements.
// Use a for loop to iterate through the array.
// In each iteration, add the current element to the sum variable.
// After the loop, return the sum variable.
// Commit your work with the message "sum array completed".

function sumArray(arr) {
    // initialize a sum to zero
    let sum = 0

    // Crete a for loop that runs for the length of the array
    for(let i = 0; i < arr.length; i++){
        // Add each index of the array with arr[i]
        sum += arr[i]
    }
    // Return the sum
    return sum
}
console.log(sumArray([1,2,3,4]))

// Prime Numbers
// checkPrime
// Check if the number is less than or equal to 1. If so, return false because it's not prime.
// Use a for loop to iterate from 2 up to the square root of the number.
// If the number is divisible by any number in this range, return false.
// If no divisors are found, return true.
function checkPrime(num) {
    // Start by checking if the number is less than or equal to one and return false
    if(num <= 1){
        return false
    }
    // Create a for loop starting at index 2 and iterating up to "num"
    for(let i = 2; i < num; i++){
        // Check to see if the argument can be divided by any number that comes before it. If it can, then return false, because it is not prime, otherwise return true.
        if(num % i === 0) {
            return false
        }
    }
    return true
}
console.log(checkPrime(7))

// printPrimes
// Use a for loop to iterate through numbers from 2 up to the specified limit.
// For each number, use the checkPrimefunction to check if it's prime.
// If checkPrimereturns true, console.log the number.
// Commit your work with the message "prime numbers completed".
function printPrimes(num){
    // Initiate a variable called primes where I will store the new array of prime numbers.
    let primes = []
    // Create a for loop to check any number greater than 2
    for(let i = 2; i <= num; i++){
        // Run checkPrime on every number that comes prior to the "num" to determine if it is in fact a prime number
        if(checkPrime(i)){
            // If the number prior to "num" is a prime number, push it into the "primes" array
            primes.push(i)
        }
    }
    return primes
}
console.log(printPrimes(17))

// Calculate the Cube
// Calculate the cube of the number by multiplying the number by itself twice.
// Return the result.
// Commit your work with the message "calculate the cube completed".

// Use the Math.pow function to calculate the num to the power of 3
const calcCube = num => Math.pow(num, 3)
console.log(calcCube(2))

// Is a Vowel?
// Check if the input character is included in a string of vowels (both lowercase and uppercase).
// Return trueif the character is a vowel, otherwise return false.
// Commit your work with the message "is a vowel completed".
const checkVowel = (char) => {
    // Set a variable to house all of the vowels
    const vowels = ["a", "e", "i", "o", "u"]
    // Take the "char" and loop through the vowels variable to see if it matches
    for (let i = 0; i <= vowels.length; i++){
        // Set the char to lowercase so that it does not matter whether the argument is upper or lowercase
        if(char.toLowerCase() === vowels[i]){
            return true
        }
    }
    return false
}
console.log(checkVowel("a"))

// Get Two Lengths
// Return an array containing the lengths of the two input strings.
// Commit your work with the message "get two lengths completed".
const getTwoLengths = (strOne, strTwo) => {
    // Set a variable called lengths with an empty array
    const lengths = []
    // Push into lengths the strOne.length and the strTwo.length
    lengths.push(strOne.length, strTwo.length)
    return lengths
}
console.log(getTwoLengths("Tyler Pierson", "General Assembly"))

// Get Multiple Lengths
// Use the map function to transform each string in the input array into its length.
// Return the resulting array of lengths.
// Commit your work with the message "get multiple lengths completed".

// Use map to create a function that will interate through each item in the argument array and return its length
const getMultipleLengths = arr => arr.map(str => str.length)
console.log(getMultipleLengths(["Tyler", "Jennifer", "Dean", "Ringo"]))

// Maximum of Three Numbers
// Use the Math.max function to find the maximum of the three numbers.
// Return the maximum number.
// Commit your work with the message "maximum of three numbers completed".

// Use Math.max to take in a select amount of numbers and return the highest one
const maxNum = (num1, num2, num3) => Math.max(num1, num2, num3)
console.log(maxNum(43, 135, 15))

// Print Longest Word
// Use the reduce method to find the longest string in the array.
// In case of a tie, the first word in the array order is returned.
// Commit your work with the message "print longest word completed".
function printLongestWord(arr) {
    // Use reduce to take in two parameters and return a function
    return arr.reduce((currentWord, longest) => {
        // Check to see if the currentWords length is longer than or equal to the longests length
        if(currentWord.length >= longest.length){
            // If currentWord is longer than or equal, return the currentWord
            return currentWord
        } else {
            // Otherwise return longest since it remains the longest string
            return longest
        }
    })
}
console.log(printLongestWord(['Tyler', 'General Assembly', 'Software Engineering']))

// Transmogrify the Numbers
// Calculate the product of the first two numbers.
// Raise the product to the power of the third number.
// Return the result.
// Commit your work with the message "transmogrify the numbers completed".

// Use Math.pow to take in a number and raise it to the power or the second number in the argument. Use the numbers in the parameter of the transmogrify function.
const transmogrify = (num1, num2, num3) => Math.pow((num1*num2), num3)
console.log(transmogrify(3, 3, 2))

// Project Euler Problem 2
// Initialize two variables to store the first two numbers of the Fibonacci sequence.
// Use a while loop to generate Fibonacci numbers up to the specified limit.
// Within the loop, check if the current number is even. If so, add it to the sum.
// Update the Fibonacci sequence variables for the next iteration.
// Return the sum of even Fibonacci numbers.
// Commit your work with the message "Project Euler Problem 2 completed".
function projectEuler(limit) {
    // Initialize the sum to 0
    let sum = 0
    // Initialize num1 and num2 to the first number in the Fibonacci sequence, 1
    let num1 = 1
    let num2 = 1
    // Check to see if num2 remains less than or equal to the limit
    while(num2 <= limit){
        // If so, check to see if num2 modulo 2 is 0
        if(num2 % 2 === 0){
            // If num2 is even, add num2 to sum
            sum += num2
        }
        // Set another variable that takes num1 and num2 and adds them together to iterate the number by one
        const nextNum = num1 + num2
        // Set num1 equal to num2 to move it forward
        num1 = num2
        // Set num2 equal to nextNum to move it forward
        num2 = nextNum
    }
    return sum
}
console.log(projectEuler(121))

// A Needle in the Haystack
// Use the indexOfmethod to find the index of the "needle"in the array.
// Return a string that includes the index of the needle.
// Commit your work with the message "a needle in the haystack completed".
const needleInTheHaystack =arr => arr.indexOf("needle")
// Use indexOf and type in the argument of "needle" to find the exact index of the string.
console.log(needleInTheHaystack(["Where", "is", "the", "needle", "in", "this", "haystack?"]))

// Sum the Positive
// Use the filter method to create a new array containing only positive numbers.
// Use the reduce method to sum the values of the filtered array.
// Return the sum.
// Commit your work with the message "sum the positive completed".
function sumThePos(arr){
    // Set a variable called posNums to filter through the array, create a parameter called "nums" and checks to see if it is greater than 0
    const posNums = arr.filter(nums => nums > 0)
    // Set a total to zero
    let total = 0
    // Return a reduce function of posNums that takes in num1 and num2 and adds it to the total
    return posNums.reduce((num1, num2) => num1 + num2, total)
}
console.log(sumThePos([-5,-4,-3,-2,-1,0,1,2,3,4,5]))

//Frequency Counter
// Question 1: Valid Anagram
// Given two strings, write a function to determine if the second string is an anagram of the first. An anagram is a word or phrase formed by rearranging the letters of another, such as "cinema", formed from "iceman".

// Solution Steps for Question 1:

// Check Lengths: If the two strings have different lengths, they cannot be anagrams, return false.
// Create Frequency Counters: Initialize two objects to count the frequencies of each letter in both strings.
// Populate the First Counter: Iterate through the first string, increasing the count for each letter in the corresponding object.
// Populate the Second Counter: Iterate through the second string, doing the same.
// Compare Counters: Iterate through one counter object, and for each letter, check if the letter exists in the second counter with the same frequency. If not, return false.
// Return True: If all letters match in frequency, return true.
function validAnagrams(first, second) {
    // Check to see if the length of the first string is different from the length of the second string, if so return false
    if(first.length !== second.length){
        return false
    }
    // Initialize a counter and set it to zero
    let counter = {}
    // Do a for...of loop to get each character of the first string
    for(let char of first.toLowerCase()){
        if(char !== ' '){
            // If the character is not blank, set counter[char] + 1 || 1
            counter[char] = counter[char] + 1 || 1
        }
    }
    // Do another for...of loop to get each character of the second string
    for(let char of second.toLowerCase()){
        if(char !== ' '){
            // If the character is not blank, subtract 1 from counter[char]
            counter[char] = counter[char] - 1
        }
    }
    // Do a for...in loop to check each char in the counter object
    for(let char in counter){
        // If counter[char] does not equal zero, return false
        if(counter[char] !== 0){
            return false
        }
    }
    // Otherwise return true
    return true
}
console.log(validAnagrams("Tyler", "relyT"))

// Question 2: Same Frequency
// Problem Statement: Given two positive integers, find out if the two numbers have the same frequency of digits.

// Solution Steps:

// Convert both numbers to string representations to easily iterate over the digits.
// Initialize two frequency counter objects for each number.
// Populate the frequency counters by iterating over each digit of the two numbers.
// Compare the two frequency counters. If they have the same keys with the same values, the numbers have the same frequency of digits; otherwise, they do not.
// Return trueif the frequencies match, otherwise return false.
function sameFreq(num1, num2){
    // Create variables to set both parameters to strings
    firstNum = num1.toString()
    secondNum = num2.toString()
    // Check to see if the firstNum length is different than the secondNum length
    if(firstNum.length !== secondNum.length){
        // If so, return false
        return false
    }
    // Initialize a counter and set it to zero
    let counter = {}
    // Do a for...of loop to grab each digit within the first number
    for(let num of firstNum){
        // If the digit is not blank, add 1 to counter[num]
        if(num !== ' '){
            counter[num] = counter[num] + 1 || 1
        }
    }
    // Do the same for...loop for the secondNum but subtract 1 instead
    for(let num of secondNum){
        if(num !== ' '){
            counter[num] = counter[num] - 1
        }
    }
    // Do a for...in loop to see if counter[num] equals zero, if not, return false
    for(let num in counter){
        if(counter[num] !== 0){
            return false
        }
    }
    return true
}
console.log(sameFreq(34, 43))

// Question 3: Are There Duplicates
// Problem Statement: Implement a function called areThereDuplicates, which accepts a variable number of arguments, and checks whether there are any duplicates among the arguments passed in.

// Solution Steps:

// Use a frequency counter object to count the occurrences of each argument.
// Populate the frequency counter by iterating over the arguments.
// Iterate through the values of the frequency counter. If any value is greater than 1, it means a duplicate exists.
// Return trueif any duplicates are found, otherwise return false.
function areThereDuplicates(){
    // Initialize a counter object to zero
    const counter = {}
    // Create a for...of loop to grab each argument in the arguments array
    for(let arg of arguments){
        // Whether there is a value in counter[arg] or it is zero, add 1 to the value
        counter[arg] = (counter[arg] || 0) + 1
    }
    // Do a for...in loop to grab each key in the counter object
    for(let key in counter){
        // If the counter[key] is greater than 1, return true
        if(counter[key] > 1){
            return true
        }
    }
    // Otherwise return false
    return false
}
console.log(areThereDuplicates('a', 'a', 1, 'c'))

// Example: MaxSubarraySum
// Problem Statement: Write a function called maxSubarraySumwhich accepts an array of integers and a number called n. The function should calculate the maximum sum of nconsecutive elements in the array.

// Solution Steps:

// Edge Case Check: If nis greater than the array length, return nullbecause it's not possible to find a subarray of length n.
// Initial Sum Calculation: Calculate the sum of the first nelements to initialize the max sum.
// Sliding the Window:

// Start a loop from the nth element of the array.
// Subtract the element at the start of the window and add the element at the end of the window to the sum. This effectively slides the window over by one position.
// Update the max sum if the new sum is greater than the current max sum.
// Return Max Sum: After sliding through the entire array, return the max sum found.
function maxSubArray(arr, n){
    // Initialize a max variable set to zero and a temporary sum variable set to zero
    let maxSum = 0
    let tempSum = 0
    // If the length of the array is less than 'n', return null
    if(arr.length < n) return null

    // Create a for loop to iterate through each number less than 'n'
    for(let i = 0; i < n; i++){
        // Set maxSum += to arr[i]
        maxSum += arr[i]
    }

    // Set the temporary sum to the same value as the max sum
    tempSum = maxSum

    // Create another for loop, setting i to n, iterate through the length of the array
    for(let i = n; i < arr.length; i++){
        // Temporary sum should be set to the current tempSum - arr[i-n] + arr[i]
        tempSum = tempSum - arr[i - n] + arr[i]
        // Use a Math.max to determine whether maxSum or tempSum is greater and then set maxSum to that number
        maxSum = Math.max(maxSum, tempSum)
    }
    return maxSum
}
console.log(maxSubArray([1, 2, 3, 4, 5, 6], 2))

// Question 1: MinSubArrayLen
// Problem Statement: Write a function called minSubArrayLen which accepts two parameters - an array of positive integers and a positive integer. This function should return the minimal length of a contiguous subarray of which the sum is greater than or equal to the integer passed to the function. If there isn't one, return 0 instead.

// Solution Steps:

// Initialize two pointers at the start of the array and a variable to track the minimum length of the subarray.
// Initialize a sum variable to accumulate the sums of the subarrays.
// Expand the window by moving the end pointer, adding the values to the sum until it is greater than or equal to the target sum.
// Once the sum is greater than or equal to the target, try to shrink the window from the beginning to find the smallest subarray by moving the start pointer forward and subtracting values from the sum.
// Update the minimum length each time a smaller subarray that satisfies the condition is found.
// Return the minimum length if found; otherwise, return 0.
function minSubArrayLen(arr, n) {
    // Set variables for the current length, and sum and set them to zero
    let currentLen = 0
    // Set a minimun length variable and set it to the array length
    let minLen = arr.length
    let sum = 0

    // Create a for loop to iterate through the length of the array
    for (let i = 0; i < arr.length; i++) {
        // Add the current array index to the sum
        sum += arr[i]
        // Increate the currentLen variable
        currentLen++

        // Create a while loop and ensure it breaks if the sum is no longer greater than or equal to 'n'
        while (sum >= n) {
            // Set the minLen equal to the Math.min of minLen and currentLen
            minLen = Math.min(minLen, currentLen)
            // Sum should subtract arr[i - currentLen + 1]
            sum -= arr[i - currentLen + 1]
            // Have the currentLen decrease by one
            currentLen--
        }
    }
    // If the minimum length is greater than the array length, return zero
    if(minLen > arr.length){ 
        return 0
        // Otherwise, return the minLen
    } else return minLen
}
console.log(minSubArrayLen([1, 1, 5, 1], 7))

// Question 2: FindLongestSubstring
// Problem Statement: Write a function called findLongestSubstring which accepts a string and returns the length of the longest substring with all distinct characters.

// Solution Steps:

// Initialize a variable to keep track of the longest substring length.
// Use a pointer or index to track the start of the current substring.
// Create a map or object to store characters and their positions within the string.
// Iterate through the string with another pointer or index to represent the end of the current substring.
// As you encounter each character, check if it is already in the map/object. If it is, and its index is greater than or equal to the current start of the substring, move the start to the index after the repeated character.
// Update the map/object with the current character's latest index.
// Calculate the length of the current substring and update the longest length if necessary.
// Return the longest length found.
function findLongestSubstring(str){
    // Initialize a counter and set it to a blank object
    const counter = {}
    // Set a variable for longestSubStr and a start and set them both to zero
    let longestSubstrLen = 0
    let start = 0
    // Create a for loop to iterate through the length of the string
    for(let i = 0; i < str.length; i++){
        // Create a const for currentChar and set it equal to the string index
        const currentChar = str[i]
        // If the counter[currentChar] is greater that or equal to the start, then set the start equal to counter[currentChar] + 1
        if(counter[currentChar] >= start){
            start = counter[currentChar] + 1
        }
        // Set counter[currentChar] equal to the index
        counter[currentChar] = i
        // Set the longest substring to whichever number is greater between longestSubstrLen and i-start+1
        longestSubstrLen = Math.max(longestSubstrLen, i - start + 1)
    }
    return longestSubstrLen
}
console.log(findLongestSubstring('the cat in the hat'))

// Multiple Pointers
// The Multiple Pointers pattern involves creating pointers or values that correspond to an index or position and move towards the beginning, end, or middle based on a certain condition. This technique is efficient for solving problems with minimal space complexity, often in linear time.

// How It Works
// Pointer Initialization: Depending on the problem, pointers are typically initialized at the beginning, end, or sometimes the middle of a collection.
// Condition-Based Movement: The pointers move based on a condition set by the problem. For example, if you're trying to find a pair of numbers that sum to zero, you might move the pointers closer together or further apart based on their sum.
// Solution Identification: The movement continues until the solution is found or the pointers meet or pass each other, indicating that no solution exists.
// Example: SumZero
// Problem Statement: Write a function called sumZerowhich accepts a sorted array of integers. The function should find the first pair where the sum is 0. Return an array that includes both values that sum to zero or undefinedif a pair does not exist.

// Solution Steps:

// Pointer Initialization: Initialize two pointers, one at the beginning of the array (left) and one at the end (right).
// Iterate with Condition: While the leftpointer is less than the rightpointer:

// Calculate Sum: Calculate the sum of the values at the two pointers.
// Sum Zero Check: If the sum is 0, return the pair of values as they are the first pair to sum to zero.
// Move Pointers Based on Sum:
// If the sum is less than 0, move the leftpointer up (increment) to increase the sum.
// If the sum is greater than 0, move the rightpointer down (decrement) to decrease the sum.
// No Pair Found: If the loop ends without finding a pair, return undefined
function sumZero(arr){
    // Set a left and a right pointer by setting left to zero and right to arr.length - 1
    let left = 0
    let right = arr.length - 1

    // While the left index is less than the right
    while(left < right){
        // Set the sum equal to the number in the left index plus the number in the right
        let sum = arr[left] + arr[right]
        // If the sum is equal to zero, return the number on the left and the number on the right
        if(sum === 0){
            return [arr[left], arr[right]]
        // Else if the sum is less than zero, increase the left value by one
        } else if(sum < 0){
            left++
        // Otherwise, decrease the right by 1
        } else {
            right --
        }
    }
    return undefined
}
console.log(sumZero([-13,-12,-10,-6,0,1,2,3,4,5,6,7]))

// Question 1: Count Unique Values
// Problem Statement: Implement a function called countUniqueValues, which accepts a sorted array, and counts the unique values in the array. There can be negative numbers in the array, but it will always be sorted.

// Solution Steps:

// If the array is empty, return 0.
// Initialize a pointer or index (i) to start at the first element of the array.
// Iterate through the array with another pointer or index (j), starting from the second element.
// Compare the elements at iand j. If they are different, increment i, and set the value at ito the value at j. This effectively moves unique values to the front of the array without needing an auxiliary data structure.
// The count of unique values will be i + 1since irepresents the index, and indexes are zero-based.
// Return i + 1.
function countUniqueValues(arr){
    // Check to see if the array length is equal to zero, if it is, return zero
    if(arr.length === 0){
        return 0
    }
    // Set a variable for the left number in the array and set it to zero
    let left = 0
    // Set a variable for the right number and set it equal to one
    let right = 1
    // Create a counter variable and set it to one since the first set of values is already going to be unique
    let counter = 1

    // While right is less than the array length, perform the following actions
    while(right < arr.length){
        // If the left number is not equal to the right number
        if(arr[left] !== arr[right]){
            // Increase the counter by 1
            counter++
            // Set the left value equal to the right
            left = right
        }
        // Increase the right value by one
        right++
    }
    return counter
}
console.log(countUniqueValues([1,2,3,4,4,4,7,7,12,12,13]))

// Question 2: Average Pair
// Problem Statement: Write a function called averagePair. Given a sorted array of integers and a target average, determine if there is a pair of values in the array where the average of the pair equals the target average. There may be more than one pair that matches the average target.

// Solution Steps:

// If the array is empty, return false.
// Initialize two pointers: one at the start (start) of the array and the other at the end (end).
// While the startpointer is less than the endpointer:

// Calculate the average of the values at the start and end pointers.
// If the calculated average is equal to the target average, return true.
// If the calculated average is less than the target average, move the startpointer up (increment start) to try and increase the average.
// If the calculated average is greater than the target average, move the endpointer down (decrement end) to try and decrease the average.
// If no pair is found that matches the target average, return false.
function averagePair(arr, target){
    // If the array length is equal to zero return false
    if(arr.length === 0){
        return false
    }
    // Set a 'start' variable to zero
    let start = 0
    // Set an 'end' variable and set it to the last index of the array
    let end = arr.length - 1

    // Create a while loop to see if the 'start' index is less than the 'end' index
    while(start < end){
        // Set a variable to calculate the average by adding the start and end together and dividing it by 2
        let avg = (arr[start] + arr[end]) / 2
        // If the average is equal to the target, return true
        if(avg === target){
            return true
            // Else if the average is less than the target, increase the start by 1
        } else if (avg < target){
            start++
            // Else decrease the end variable by 1
        } else {
            end--
        }
    }
    return false
}
console.log(averagePair([1,3,3,5,6,7,10,12,19], 8))

// Divide and Conquer
// The Divide and Conquer strategy is an algorithm design paradigm that solves a problem by recursively breaking it down into two or more sub-problems of the same or related type, until these become simple enough to be solved directly. Solutions to the sub-problems are then combined to give a solution to the original problem.

// How It Works
// Divide: The problem is divided into smaller sub-problems.
// Conquer: Each sub-problem is solved recursively.
// Combine: The solutions to the sub-problems are combined to solve the original problem.
// Example: Binary Search
// Problem Statement: Given a sorted array of integers, write a function called search, that accepts a value and returns the index where the value passed to the function is located. If the value is not found, return -1.

// Solution Steps:

// Initialize Pointers: Start with two pointers, leftset to the start of the array and rightset to the end of the array.
// While Loop: While the left pointer is less than or equal to the right pointer, perform the following steps:

// Find the Middle: Calculate the middle index by taking the floor of the average of leftand rightpointers.
// Check Middle Value: Compare the value at the middle index with the target value.
// If the middle value is equal to the target, return the index of the middle.
// If the middle value is less than the target, move the leftpointer to middle + 1.
// If the middle value is greater than the target, move the rightpointer to middle - 1.
// Target Not Found: If the loop ends and the target has not been found, return -1.
function search(arr, target){
    // Set a left and a right pointer
    let left = 0
    let right = arr.length - 1

    // Create a while loop to check if the left is less than or equal to the right
    while(left <= right){
        // Create a mid variable that takes the floor of left plus right and divides it by two
        let mid = Math.floor((left + right) / 2)
        // If the mid number is equal to the target, return mid index
        if(arr[mid] === target){
            return mid
            // else if mid number is less than the target, set left equal to mid + 1
        } else if (arr[mid] < target){
            left = mid + 1
            // else set the right index to mid - 1
        } else {
            right = mid - 1
        }
    }
    return -1
}
console.log(search([5,7,7,8,8,10], 7))

// Question 1: Find First and Last Position of Element in Sorted Array
// Problem Statement: Given an array of integers sorted in ascending order, find the starting and ending position of a given target value. If the target is not found in the array, return [-1, -1].

// Solution Steps:

// Binary Search for First Position: Implement a modified binary search to find the first occurrence of the target. If the target is found, instead of returning immediately, continue searching to the left (lower indices) to see if there are earlier occurrences.
// Binary Search for Last Position: Implement a modified binary search to find the last occurrence of the target. If the target is found, continue searching to the right (higher indices) to see if there are later occurrences.
// Return Positions: Use the results from the two modified binary searches to return the start and end positions of the target value in the array.
function searchRange(nums, target) {
    // Create a function to find the first target
    function findFirst(nums, target) {
        // set left equal to zero and right equal to the last index
        let left = 0
        let right = nums.length - 1
        // Set a variable for the firstIndex and set it equal to -1, this is how to make sure -1 is returned if the target is not found
        let firstIndex = -1

        // While left is less than or equal to right, perform the following actions
        while (left <= right) {
            // Set a mid variable
            let mid = Math.floor((left + right) / 2)
            // if the mid num is equal to the target, set firstIndex = to mid
            // Set the right index equal to mid - 1
            if (nums[mid] === target) {
                firstIndex = mid
                right = mid - 1
                // else if nums[mid] is less than the target, set left equal to mid + 1
            } else if (nums[mid] < target) {
                left = mid + 1
                // set right equal to mid - 1
            } else {
                right = mid - 1
            }
        }
        return firstIndex
    }

    // Create a function to find the last target
    // Do the same process as above to find the last index
    function findLast(nums, target) {
        let left = 0
        let right = nums.length - 1
        let lastIndex = -1

        while (left <= right) {
            let mid = Math.floor((left + right) / 2)
            if (nums[mid] === target) {
                lastIndex = mid
                left = mid + 1
            } else if (nums[mid] < target) {
                left = mid + 1
            } else {
                right = mid - 1
            }
        }
        return lastIndex
    }
    // Create two variables for the firstIndex and the lastIndex and set it equal to the results from the first two functions
    const firstIndex = findFirst(nums, target)
    const lastIndex = findLast(nums, target)

    return [firstIndex, lastIndex]
}
console.log(searchRange([5, 7, 7, 8, 8, 10], 8))
console.log(searchRange([5, 7, 7, 8, 8, 10], 6))

// Question 2: Pow(x, n)
// Problem Statement: Implement pow(x, n), which calculates x raised to the power n(i.e., x^n).

// Solution Steps:

// Handle Base Case: If n is 0, return 1.
// Handle Negative Power: If n is negative, convert the problem into calculating pow(x, -n)and take the reciprocal at the end.
// Divide and Conquer: Use the property that x^n = x^(n/2) * x^(n/2) for even n, and for odd n, it's x * x^(n/2) * x^(n/2). This reduces the problem size by half with each recursive call.
// Combine Results: Calculate pow(x, n/2)once and use it to compute the final result to avoid redundant calculations.
function myPow(x, n) {
    // If n is equal to zero, return 1
    if (n === 0) return 1

    // If n is less than zero, set x = to 1 / x
    // and set n = -n, this will check if the number is a negative and set convert the numbers to positive
    if (n < 0) {
        x = 1 / x
        n = -n
    }

    // Create an arrow function that checks if n is equal to zero and returns 1
    const powRecursive = (x, n) => {
        if (n === 0) return 1
        // Calculate x raised to the power of half of n using recursion
        const halfPow = powRecursive(x, Math.floor(n / 2))
        // If n is even, return halfPow squared
        if (n % 2 === 0) {
            return halfPow * halfPow
            // Else return x times halfPow squared
        } else {
            return x * halfPow * halfPow
        }
    }

    return powRecursive(x, n)
}
console.log(myPow(2, 10))

// Question 3: Merge Sort
// Problem Statement: Implement Merge Sort, a sorting algorithm that follows the Divide and Conquer paradigm.

// Solution Steps:

// Divide: If the array has more than one element, split the array into two halves.
// Conquer: Recursively apply merge sort to both halves.
// Combine: Merge the two sorted halves into a single sorted array.
// Base Case: If the array has only one element, it is already sorted.
// Merge Function:

// The merge function takes two sorted arrays and merges them into a single sorted array by repeatedly taking the smaller of the two leading elements.
function mergeSort(arr) {
    // If the length of the array is less than or equal to one, return the array
    if (arr.length <= 1) {
        return arr
    }

    // Set variables for the mid, left, and right of the subArray
    const mid = Math.floor(arr.length / 2)
    // The left sub array will be a slice from zero to mid
    const left = arr.slice(0, mid)
    // The right will be a slice from mid onward
    const right = arr.slice(mid)

    // Return a merge of mergeSort(left) and mergeSort(right)
    return merge(mergeSort(left), mergeSort(right))
}

// Create another function to handle the merge of two arrays
function merge(leftArr, rightArr) {
    // Create a variable with a blank array
    const mergedArr = []
    // Let both the left and the right index be equal to zero
    let leftIndex = 0
    let rightIndex = 0

    // While the left index is less than the leftArr length && the right index is less than the rightArr length, perform the following actions
    while (leftIndex < leftArr.length && rightIndex < rightArr.length) {
        // If the leftArr[leftIndex] is less than the right
        if (leftArr[leftIndex] < rightArr[rightIndex]) {
            // Push the leftArr[leftIndex] into the mergedArr array
            mergedArr.push(leftArr[leftIndex])
            // Increase the leftIndex by one
            leftIndex++
            // Otherwise push the right and increase the right
        } else {
            mergedArr.push(rightArr[rightIndex])
            rightIndex++
        }
    }

    // Return a concatenation of the leftArr.slice(leftIndex) and the right
    return mergedArr.concat(leftArr.slice(leftIndex)).concat(rightArr.slice(rightIndex))
}

console.log(mergeSort([5, 2, 67, 3, 2, 84, 1]))


// Question 4: Quick Sort
// Problem Statement: Implement Quick Sort, a sorting algorithm that follows the Divide and Conquer paradigm.

// Solution Steps:

// Choose Pivot: Select a pivot element from the array. The choice of pivot can affect the algorithm's performance but does not affect correctness. A common approach is to pick the last element as the pivot.
// Partition: Rearrange the array so that all elements less than the pivot come before it, and all elements greater come after it. After this step, the pivot is in its final position.
// Recursively Apply: Apply quick sort to the sub-arrays formed by dividing the array around the pivot.
// Base Case: If the array has one or no elements, it is already sorted.
// Concrete Examples for Merge Sort and Quick Sort are not provided due to the nature of these algorithms being applied to sort arrays rather than producing a single deterministic output for a given input. However, the effectiveness and efficiency of both algorithms can be observed by applying them to any unsorted array of integers.
function quickSort(arr) {
    // If the array length is less than or equal to one, return the array
    if (arr.length <= 1) {
        return arr
    }

    // Create a pivot point by setting it equal to the last number in the array
    const pivot = arr[arr.length - 1]
    // Create a blank left and right array
    const left = []
    const right = []

    // Create a for loop that iterates every number up to the last index
    for (let i = 0; i < arr.length - 1; i++) {
        // If the current array index is less than the pivot, push that number into the left array
        if (arr[i] < pivot) {
            left.push(arr[i])
            // Else, push it into the right
        } else {
            right.push(arr[i])
        }
    }

    // Use spread syntax to place all of the numbers within the quickSort array for the left, pivot, and then another spread for quickSort right
    return [...quickSort(left), pivot, ...quickSort(right)] 
}
console.log(quickSort([5, 2, 67, 3, 2, 84, 1]))
