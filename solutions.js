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
const palindrome = (string) => string.toLowerCase() === string.toLowerCase().split('').reverse().join('') ? true:false
console.log(palindrome("racecar"))

// Sum Array
// Initialize a variable to store the sum of the array elements.
// Use a for loop to iterate through the array.
// In each iteration, add the current element to the sum variable.
// After the loop, return the sum variable.
// Commit your work with the message "sum array completed".
function sumArray(num) {
    let sum = 0
    for(let i = 0; i < num.length; i++){
        sum += num[i]
    }
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
    if(num <= 1){
        return false
    }
    for(let i = 2; i < num; i++){
        if(num % i === 0) {
            return false
        }
    }
    return true
}
console.log(checkPrime(9))

// printPrimes
// Use a for loop to iterate through numbers from 2 up to the specified limit.
// For each number, use the checkPrimefunction to check if it's prime.
// If checkPrimereturns true, console.log the number.
// Commit your work with the message "prime numbers completed".
function printPrimes(num){
    for(let i = 2; i <= num; i++){
        if(checkPrime(i)){
            console.log(i)
        }
    }
}
printPrimes(17)

// Calculate the Cube
// Calculate the cube of the number by multiplying the number by itself twice.
// Return the result.
// Commit your work with the message "calculate the cube completed".
const calcCube = num => Math.pow(num, 3)
console.log(calcCube(2))

// Is a Vowel?
// Check if the input character is included in a string of vowels (both lowercase and uppercase).
// Return trueif the character is a vowel, otherwise return false.
// Commit your work with the message "is a vowel completed".
const checkVowel = (char) => {
    const vowels = ["a", "e", "i", "o", "u"]
    for (let i = 0; i <= vowels.length; i++){
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
    const lengths = []
    lengths.push(strOne.length, strTwo.length)
    return lengths
}
console.log(getTwoLengths("Tyler Pierson", "General Assembly"))

// Get Multiple Lengths
// Use the map function to transform each string in the input array into its length.
// Return the resulting array of lengths.
// Commit your work with the message "get multiple lengths completed".
const getMultipleLengths = arr => arr.map(str => str.length)
console.log(getMultipleLengths(["Tyler", "Jennifer", "Dean", "Ringo"]))

// Maximum of Three Numbers
// Use the Math.max function to find the maximum of the three numbers.
// Return the maximum number.
// Commit your work with the message "maximum of three numbers completed".
const maxNum = (num1, num2, num3) => Math.max(num1, num2, num3)
console.log(maxNum(43, 135, 15))

// Print Longest Word
// Use the reduce method to find the longest string in the array.
// In case of a tie, the first word in the array order is returned.
// Commit your work with the message "print longest word completed".
function printLongestWord(arr) {
    return arr.reduce((currentWord, longest) => {
        if(currentWord.length > longest.length){
            return currentWord
        } else if(currentWord.length === longest.length){
            return currentWord
        } else {
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
    let sum = 0
    let num1 = 1
    let num2 = 1
    while(num2 <= limit){
        if(num2 % 2 === 0){
            sum += num2
        }
        const nextNum = num1 + num2
        num1 = num2
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
console.log(needleInTheHaystack(["Where", "is", "the", "needle", "in", "this", "haystack?"]))

// Sum the Positive
// Use the filter method to create a new array containing only positive numbers.
// Use the reduce method to sum the values of the filtered array.
// Return the sum.
// Commit your work with the message "sum the positive completed".
function sumThePos(arr){
    const posNums = arr.filter(nums => nums > 0)
    let total = 0
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
    if(first.length !== second.length){
        return false
    }
    let counter = {}
    for(let char of first.toLowerCase()){
        if(char !== ' '){
            counter[char] = counter[char] + 1 || 1
        }
    }
    for(let char of second.toLowerCase()){
        if(char !== ' '){
            counter[char] = counter[char] - 1
        }
    }
    for(let char in counter){
        if(counter[char] !== 0){
            return false
        }
    }
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
    firstNum = num1.toString()
    secondNum = num2.toString()
    if(firstNum.length !== secondNum.length){
        return false
    }
    let counter = {}
    for(let num of firstNum){
        if(num !== ' '){
            counter[num] = counter[num] + 1 || 1
        }
    }
    for(let num of secondNum){
        if(num !== ' '){
            counter[num] = counter[num] - 1
        }
    }
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
    const counter = {}
    for(let arg of arguments){
        counter[arg] = (counter[arg] || 0) + 1
    }
    for(let key in counter){
        if(counter[key] > 1){
            return true
        }
    }
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
    let maxSum = 0
    let tempSum = 0
    if(arr.length < n) return null

    for(let i = 0; i < n; i++){
        maxSum += arr[i]
    }

    tempSum = maxSum

    for(let i = n; i < arr.length; i++){
        tempSum = tempSum - arr[i - n] + arr[i]
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
    let currentLen = 0
    let minLen = arr.length
    let sum = 0

    for (let i = 0; i < arr.length; i++) {
        sum += arr[i]
        currentLen++

        while (sum >= n) {
            minLen = Math.min(minLen, currentLen)
            sum -= arr[i - currentLen + 1]
            currentLen--
        }
    }
    if(minLen > arr.length){ 
        return 0
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
    const counter = {}
    let longestSubstrLen = 0
    let start = 0
    for(let i = 0; i < str.length; i++){
        const currentChar = str[i]
        if(counter[currentChar] >= start){
            start = counter[currentChar] + 1
        }
        counter[currentChar] = i
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
    let left = 0
    let right = arr.length - 1

    while(left < right){
        let sum = arr[left] + arr[right]
        if(sum === 0){
            return [arr[left], arr[right]]
        } else if(sum < 0){
            left++
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
    if(arr.length === 0){
        return 0
    }
    let left = 0
    let right = 1
    let counter = 1

    while(right < arr.length){
        if(arr[left] !== arr[right]){
            counter++
            left = right
        }
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
    if(arr.length === 0){
        return false
    }
    let start = 0
    let end = arr.length - 1

    while(start < end){
        let avg = (arr[start] + arr[end]) / 2
        if(avg === target){
            return true
        } else if (avg < target){
            start++
        } else {
            end--
        }
    }
    return false
}
console.log(averagePair([1,3,3,5,6,7,10,12,19], 8))