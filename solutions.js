// Verbal questions

// 1. What is the difference between a parameter and an argument?

    // A parameter is a variable that can be passed into a function and it is defined with the function itself. For example, "arr" might be the parameter in a function that reverses an array. An argument is the data that is passed into a function when it is called. In this example, [1,2,3] would be an argument.

// 2, Within a function, what is the difference between return and console.log?

    // A return ends a function with the object following it. Console.log doesn't end a function, but prints the argument in the console.

// Palindrome

const isPalindrome = (str) => {
    // Convert the input string to lowercase to ensure the comparison is case-insensitive.
    const strLower = str.toLowerCase()
    // Split the string into an array of characters, reverse the array, and then join it back into a string.
    const strLowerReversed = strLower.split('').reverse().join('')
    // Compare the original lowercase string with the reversed string.
    // If they are the same, the function should return true; otherwise, it returns false.    
    if (strLower === strLowerReversed) {
        return true
    } else return false
}

console.log(isPalindrome("Civic")) // returns true
console.log(isPalindrome("Corolla")) // return false

// Sum Array

const sumArray = (arr) => {
    // Initialize a variable to store the sum of the array elements.
    let sum = 0

    // Use a for loop to iterate through the array.
    arr.forEach(item => {
        // In each iteration, add the current element to the sum variable.
        sum += item
    })
    // After the loop, return the sum variable.
    return sum
}

console.log(sumArray([1,2,4])) // returns 7

// Prime Numbers

// checkPrime

const checkPrime = num => {
    // Check if the number is less than or equal to 1. If so, return falsebecause it's not prime.
    if (num <= 1) return false
    // Use a for loop to iterate from 2 up to the square root of the number.    
    for (let i = 2; i <= Math.sqrt(num); i++) {
        // If the number is divisible by any number in this range, return false.
        if (num % i === 0) return false
    }
    // If no divisors are found, return true.
    return true
}

console.log(checkPrime(5)) // returns true!

// printPrimes
const printPrimes = limit => {
    // Use a for loop to iterate through numbers from 2 up to the specified limit.
    for (let i = 2; i <= limit; i++) {
        // For each number, use the checkPrimefunction to check if it's prime.
        // If checkPrimereturns true, console.log the number.
        if (checkPrime(i)) console.log(i)
    }
}

printPrimes(20)

// Calculate the Cube

// Calculate the cube of the number by multiplying the number by itself twice.
// Return the result.
const cube = num => Math.pow(num, 3)

console.log(cube(3)) // returns 27!

// Is a Vowel?

const isVowel = letter => {
    // Check if the input character is included in a string of vowels (both lowercase and uppercase).
    const vowels = ['a','e','i','o','u','y']
    // Return trueif the character is a vowel, otherwise return false.
    for (let i = 0; i < vowels.length; i++) {
        if (letter.toLowerCase() === vowels[i]) return true
    }
    return false
}

console.log(isVowel("X"),isVowel("A") ) // returns false, true!

// Get Two Lengths

const getTwoLengths = arr => {
    // Return an array containing the lengths of the two input strings.
    let lenArr = []
    arr.forEach(item => {
        lenArr.push(item.length)
    })
    return lenArr
}
console.log(getTwoLengths(["I hope this ","works..."])) // returns [12, 8]

// Get Multiple Lengths

const getMultipleLengths = arr => {
    let lenArr = []
    // Use the mapfunction to transform each string in the input array into its length.
    arr.map(item => {
        lenArr.push(item.length)
    })
    // Return the resulting array of lengths.
    return lenArr
}

console.log(getMultipleLengths(["i'm ","pretty sure "," this'll work"])) // returns [ 4, 12, 13 ]

// Maximum of Three Numbers

// Use the Math.maxfunction to find the maximum of the three numbers.
// Return the maximum number.
const maxOfThree = arr => Math.max(...arr)
    
console.log(maxOfThree([6,1,7])) // returns 7!

// Print Longest Word

const printLong = arr => {
    // Use the reducemethod to find the longest string in the array.    
    return arr.reduce((accumulator, currentValue) => {
        if (currentValue.length > accumulator.length) {
            return currentValue
        } else 
            return accumulator
    })
    
    // In case of a tie, the first word in the array order is returned.
}
console.log(printLong(["i ","think ","this is the longest"])) // returns "this is the longest". I couldn't figure out the tie.

// Transmogrify the Numbers
// Calculate the product of the first two numbers.
// Raise the product to the power of the third number.
// Return the result.
const transmogrify = arr => Math.pow((arr[0] * arr[1]), arr[2])
console.log(transmogrify([2,2,2])) // returns 16 (4^2)

// Project Euler Problem 2

const euler = limit => {
    // Initialize two variables to store the first two numbers of the Fibonacci sequence.
    let previous = 0
    let current = 1
    let sumOfEven = 0
    // Use a while loop to generate Fibonacci numbers up to the specified limit.
    while (current <= limit) { 
        // Within the loop, check if the current number is even. If so, add it to the sum.
        if (current % 2 === 0) sumOfEven += current
        // Update the Fibonacci sequence variables for the next iteration.
        const next = previous + current             
        previous = current
        current = next        
    }
    // Return the sum of even Fibonacci numbers.
    return sumOfEven
}

console.log(euler(50)) // returns 44

// A Needle in the Haystack
// Use the indexOfmethod to find the index of the "needle"in the array.
// Return a string that includes the index of the needle.

const findNeedle = (arr, needle) => `${needle}'s index in the array is ${arr.indexOf(needle)}`
    
console.log(findNeedle(['find', 'the', 'needle', 'in', 'this', 'haystack'], "needle")) // returns "needle's index in the array is 2"

// Sum the Positive

const sumPositive = arr => {
    // Use the filtermethod to create a new array containing only positive numbers.
    const evensArr = arr.filter(num => num % 2 === 0)
    // Use the reducemethod to sum the values of the filtered array.
    // Return the sum
    return evensArr.reduce((accumulator, currentValue) => accumulator + currentValue)    
}

console.log(sumPositive([1,2,3,4, 10])) // returns 16!

// NOTE: Pseudocode is combined with resulting code

// Question 1: Valid Anagram

    // Given two strings, write a function to determine if the second string is an anagram of the first. An anagram is a word or phrase formed by rearranging the letters of another, such as "cinema", formed from "iceman".

// MY ATTEMPT

const anagram = (str1, str2) => {
    // turn strings into arrays with .split()
    const arr1 = str1.split('')
    const arr2 = str2.split('')

    // if words have different lengths return false
    if (arr1.length !== arr2.length) return false

    // initialize a frequency counter for both words
    const counter1 = {}
    const counter2 = {}

    // run counters for both arrays
    for (let i = 0; i < arr1.length; i++) {
        const letter = arr1[i]
        counter1[letter] = (counter1[letter] || 0) + 1
    }

    for (let i = 0; i < arr2.length; i++) {
        const letter = arr2[i]
        counter2[letter] = (counter2[letter] || 0) + 1
    }

    // compare counters using for in
    for (const letter in counter1) {    
        if (counter1[letter] !== counter2[letter]) return false
    }
    return true

}

console.log(anagram("cinema","iceman"), anagram("cinema","hello!")) // returns true, false

// SOLUTION PSEUDOCODE

// if strings have different lengths return false

// initialize a counter object for the first string

// build counter object in a for loop using ternary expression

// loop through the second string

// save each letter as variable

// if counter object doesn't have that property, return false

// if it does, subtract 1 from the value

// return true after loop

// MY SECOND ATTEMPT

const betterAnagram = (str1, str2) => {
    if (str1.length !== str2.length) return false
    const lookup = {}
    for (let i = 0; i < str1.length; i++) {
        let letter = str1[i]
        lookup[letter] ? lookup[letter] +=1 : lookup[letter] = 1
    }
    for (let i = 0; i < str2.length; i++) {
        let letter = str2[i]
        if (!lookup[letter]) {
            return false
        } else {
            lookup[letter] -= 1 
        }
    }
    return true
}

// Question 2: Same Frequency
// Problem Statement: Given two positive integers, find out if the two numbers have the same frequency of digits.

// PSUEDOCODE

const sameFrequency = (num1, num2) => {
    // translate numbers to strings
    const str1 = num1.toString()
    const str2 = num2.toString()
    // if different lengths return false
    if (str1.length !== str2.length) return false
    // initialize lookup counter
    const lookup = {}
    // build lookup counter using ternary expression
    for (let i = 0; i < str1.length; i++) {
        let digit = str1[i]
        lookup[digit] ? lookup[digit] += 1 : lookup[digit] = 1
    }
    // loop through second string
    for (let i = 0; i < str2.length; i++) {
        let digit = str2[i]
        // if lookup doesn't have each property return false
        if (!lookup[digit]) {
            return false
            // if it does, remove 1
        } else {            
            lookup[digit] -= 1
        }
        return true
    }
}

console.log(sameFrequency(182, 281), sameFrequency(34, 14)) // returns true false

// Are There Duplicates
// Problem Statement: Implement a function called areThereDuplicates, which accepts a variable number of arguments, and checks whether there are any duplicates among the arguments passed in.

// pseudocode

const dupes = (...args) => {
    // return false if there are fewer than 2 arguments
    if (args.length < 2) return false
    // initialize lookup counter
    const lookup = {}
    // loop through arguments
    for (let i = 0; i < args.length; i++) {
        // save each argument
        let arg = args[i]
        // if lookup[arg] is true, return true, or else save to lookup counter
        if (lookup[arg]) {
            return true
        } else lookup[arg] = 1
    }
    return false
}

console.log(dupes(1,2,3), dupes(1,2,2), dupes('a', 'b', 'c', 'a')) // returns false true true


