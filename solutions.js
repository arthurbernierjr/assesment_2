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
console.log(printLong(["return","longest","item in the array"])) // returns "item in the array". I couldn't figure out the tie.
