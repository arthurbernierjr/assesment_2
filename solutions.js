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