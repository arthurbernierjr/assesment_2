/*Verbal Questions 
 1. What is the difference between a parameter and an argument?
    A parameter is a function delared variable an argument is a value that is passed to a function or a method when calling it. An argument is the values passed by the parameters when the function is called.

2. Within a function, what is the difference between return and console.log?
    console.log is used to log messages to the console, it does not affect the program execution
    return is used within a function to send a value back to where it was called from. The code will exit the function and return the value to the code that called the function with return.
*/

//coding challenges 

//Palindrome 

//convert the input string to lowercase to ensure the comparison is case-insensitive
function palindrome(str) {
    let lowercaseStr = str.toLowerCase()
//Split the string into an array of characters, reverse the array, and then join it back into a string.
    let reversedStr = lowercaseStr.split('').reverse().join('')
//Compare the original lowercase string with the reversed string.

    if (lowercaseStr === reversedStr) {
//If they are the same, the function should return true; otherwise, it returns false.
        return true
    } else {
        return false
    }
}

//call function
// let result = (palindrome("racecar"))
// console.log(result)

//Sum Array 
// Initialize a variable to store the sum of the array elements.
function sumArray(arr) {
    let sum = 0
// Use a for loop to iterate through the array.
    for (i = 0; i < arr.length; i++) {
// In each iteration, add the current element to the sum variable.
        sum = sum + arr[i]
    }
// After the loop, return the sum variable.
    return sum
}

//Prime Numbers 

// Check if the number is less than or equal to 1. If so, return false because it's not prime.
function primeNum(num) {
    if (num <= 1) {
        return false
    }
// Use a for loop to iterate from 2 up to the square root of the number.
    for (let i = 2; i <= Math.sqrt(num); i++) {
// If the number is divisible by any number in this range return false
        if (num % i === 0) {
            return false
        }
    }
    return true
}

function printPrimes(print) {
    for (let i = 2; i <= print; i++){
        if(checkPrime(i) === true) {
            console.log(i)
        }
    }
}

//Calculate the Cube

// Calculate the cube of the number by multiplying the number by itself twice.
function calculateCube(num) {
// Return the result.
    return Math.pow(number, 3)
}

function checkVowel(char) {
//Check if the input character is included in a string of vowels (both lowercase and uppercase).
    const vowels = ['a','e','i','o','u','A','E','I','O','U']
    for (let i = 0; i <= vowels.length, i++) {
        if(char === vowels[i])
//Return true if the character is a vowel, otherwise return false.
        return true
    }
}

