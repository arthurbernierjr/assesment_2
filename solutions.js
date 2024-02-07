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
 console.log(palindromealindrome("radar")) // true
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
console.log(sumArrayElements(array)) // Output 15

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
