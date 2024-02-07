// What is the difference between a parameter and an argument?
// A parameter is a placeholder in a function defenition, while the arguments are the actual values that pass through the function code.

//Within a function, what is the difference between return and console.log?
// Return is used to send a value back and end the functions excecution, while console.log sends information to the console for debugging purposes.

// Palindrome

function palindrome(word) {
        // Convert the input string to lowercase
        word = word.toLowerCase()
    
    
        // Split the string into an array of characters, reverse it, and then join it back into a string
        let reversedWord = word.split('').reverse().join('')
    
        // Compare the original lowercase string with the reversed string
        if (word === reversedWord) {
            return true // If they are the same, return true
        } else {
            return false // Otherwise, return false
        }
    }
    
// Test cases
 console.log(palindrome("radar")) // true
 console.log(palindrome("hello")) // false

// Sum Array

 function sumArray(array) {
    // variable to store the sum of the array
    let sum = 0

    // for loop to iterate through the array
    for (let i = 0; i < array.length; i++) {
        // add the current element to the sum variable
        sum = sum + array[i]
    }

    // After the loop, return the sum variable
    return sum
}

let array = [1, 2, 3, 4, 5]
console.log(sumArray(array)) // Output 15

// Prime numbers
// Function to check if a number is prime
function checkPrime(number) {
    // Check if the number is less than or equal to 1
    if (number <= 1) {
        return false // Not prime
    }

    // Use a for loop to iterate from 2 up to the square root of the number
    for (let i = 2; i <= Math.sqrt(number); i++) {
        // If the number is divisible by any number in this range, return false
        if (number % i === 0) {
            return false // Not prime
        }
    }

    // If no divisors are found, return true
    return true // Prime
}

// Function to print prime numbers up to a specified limit
function printPrimes(limit) {
    // Use a for loop to iterate through numbers from 2 up to the specified limit
    for (let i = 2; i <= limit; i++) {
        // For each number, use the checkPrime function to check if it's prime
        if (checkPrime(i)) {
            // If checkPrime returns true, console.log the number
            console.log(i)
        }
    }
}

// Example usage
// Print prime numbers up to 20
printPrimes(20)

// Calculate the Cube
function calculateCube(num) {
    // Calculate the cube of the number by multiplying the number by itself twice
    let cube = num * num * num

    // Return the result
    return cube
}

let num = 5
console.log(calculateCube(num)) //Output 125

// Is a Vowel?
function isVowel(char) {
    // a string containing all vowels
    const vowels = 'aeiouAEIOU'

    // Check if the input character is included in the string of vowels
    if (vowels.includes(char)) {
        return true // If the character is a vowel, return true
    } else {
        return false // If the character is not a vowel, return false
    }
}

console.log(isVowel('a')) //Output true
console.log(isVowel('z')) //Output false

// Get two Lengths
function getLengths(string1, string2) {
    // array to store the lengths of the strings
    let lengthsArray = []

    // length of the first string and push it to the lengthsArray
    lengthsArray.push(string1.length)

    // length of the second string and push it to the lengthsArray
    lengthsArray.push(string2.length)

    // Return the array containing the lengths
    return lengthsArray
}

let string1 = 'hello'
let string2 = 'world'
console.log(getLengths(string1, string2)) //Output [5, 5]

// Get multiple lengths
function getMultipleLengths(array) {
    // map to transform each string into its length
    let lengthsArray = array.map(function(string) {
        return string.length
    })

    // Return the resulting array of lengths
    return lengthsArray
}

console.log(getMultipleLengths(['apple', 'banana', 'orange', 'kiwi']))//Output [5, 6, 6, 4]

// Maximim of three numbers
function findMax(num1, num2, num3) {
    // Math.max to find the maximum of the three numbers
    let maxNumber = Math.max(num1, num2, num3)

    // Return the maximum number
    return maxNumber
}

console.log(findMax(10, 25, 15))//Output 25

// Print longest word
function longestString(array) {
    // Use the reduce to find the longest string
    let longestString = array.reduce(function(longest, current) {
        // Compare the length of the current string with the length of the longest string found so far
        if (current.length > longest.length) {
            return current // If the current string is longer, update the longest string
        } else {
            return longest // Otherwise, keep the current longest string
        }
    }, '')

    // Return the longest string found
    return longestString
}

console.log(longestString(['apple', 'banana', 'orange', 'kiwi'])) // Output: "banana"

// Transmogrify the numbers
function transmogrify(num1, num2, num3) {
    // Calculate the product of the first two numbers
    let product = num1 * num2

    // Raise the product to the power of the third number
    let result = Math.pow(product, num3)

    // Return the result
    return result
}

console.log(transmogrify(2, 3, 4)) //Output 1296 (2 * 3 = 6, 6^4 = 1296)

// Project Euler Problem 2
function sumEvenFibonacci(limit) {
    // variables to store the first two numbers of the Fibonacci sequence
    let prev = 1
    let curr = 2

    // variable to store the sum of even Fibonacci numbers
    let sum = 0

    //while loop to generate Fibonacci numbers up to the specified limit
    while (curr <= limit) {
        // Check if the current number is even
        if (curr % 2 === 0) {
            // If so, add it to the sum
            sum += curr
        }

        // Update the Fibonacci sequence variables for the next iteration
        let next = prev + curr
        prev = curr
        curr = next
    }

    // Return the sum of even Fibonacci numbers
    return sum
}

console.log(sumEvenFibonacci(4000000))//Output 4613732 (Sum of even Fibonacci numbers up to 4000000)

// A needle in a Haystack
function findNeedleIndex(haystack, needle) {
    // indexOf to find the index of the "needle"
    let index = haystack.indexOf(needle)

    // Return a string that includes the index of the needle
    if (index !== -1) {
        return `The needle is found at index ${index}.`
    } else {
        return 'The needle is not found in the haystack.'
    }
}

let haystack = ['apple', 'banana', 'orange', 'kiwi', 'needle', 'pear']
console.log(findNeedleIndex(haystack, 'needle')) //Output The needle is found at index 4.

// Sum the Positive
function sumPositiveNumbers(array) {
    // filter method to create a new array containing only positive numbers
    let positiveNumbers = array.filter(function(num) {
        return num > 0
    })

    // reduce method to sum the values of the filtered array
    let sum = positiveNumbers.reduce(function(accumulator, currentValue) {
        return accumulator + currentValue
    }, 0)

    // Return the sum
    return sum
}

console.log(sumPositiveNumbers([-2, 3, -5, 7, 10, -12, 15])) // Output: 35 (3 + 7 + 10 + 15)
