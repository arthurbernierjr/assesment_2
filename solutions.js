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

// valid anagram
function validAnagram(first, second) {
    if (first.length !== second.length) {
        return false
    }

    const lookup = {}

    for (let i = 0; i < first.length; i++) {
        let letter = first[i]
        // If letter exists, increment, otherwise set to 1
        lookup[letter] ? lookup[letter] += 1 : lookup[letter] = 1
    }

    for (let i = 0; i < second.length; i++) {
        let letter = second[i]
        // Can't find letter or letter is zero then it's not an anagram
        if (!lookup[letter]) {
            return false
        } else {
            lookup[letter] -= 1
        }
    }

    return true
}
// Check if the lengths of the two strings are different
// Create an empty object to count occurrences of characters
// populate the counter using a for loop iterating oer the first string
// If letter exists in the lookup object, increment its count; otherwise, set its count to 1
// Iterate over each character of the second string with for loop
// If the letter cannot be found in the lookup object or its count is zero, it's not an anagram
// Decrement the count of the letter in the lookup object
// If all characters are successfully matched, it's an anagram return true






// Same frequency
function sameFrequency(num1, num2) {
    let strNum1 = num1.toString()
    let strNum2 = num2.toString()

    if (strNum1.length !== strNum2.length) {
        return false
    }
    
    let counter1 = {}
    let counter2 = {}

    for (let digit of strNum1) {
        counter1[digit] = (counter1[digit] || 0) + 1
    }
    for (let digit of strNum2) {
        counter2[digit] = (counter2[digit] || 0) + 1
    }

    for (let key in counter1) {
        if (counter1[key] !== counter2[key]) {
            return false
        }
    }
    return true
}
console.log(sameFrequency(182, 281))  // true
console.log(sameFrequency(34, 14)) // false

// Convert the numbers into strings
// Check if the lengths of the two strings are different
// Create two frequency counters for each number
// Iterate through each digit using a for...of loop for each number
// Compare the two frequency counters using a for...in loop
// Return true if all keys have the same values

// Are There Duplicates
function areThereDuplicates() {
    let counter = {}

    for (let argument of arguments) {
        counter[argument] = (counter[argument] || 0) + 1
    }

    for (let key in counter) {
        if (counter[key] > 1) {
            return true
        }
    }
    return false
}
console.log(areThereDuplicates(1, 2, 3)) // false
console.log(areThereDuplicates(1, 2, 2)) // true

// create counter to count occurence of each argument
// Iterate through the arguments with a for of loop to populate the counter
// Iterate through the counter with a for in loop
// If the value is greaer than one it means there's a duplicate, return true
// If no duplicates found return false

// Sliding Window
// maxSubarraySum
function maxSubarraySum(arr, n) {
    let maxSum = 0;
    let tempSum = 0;
    if (arr.length < n) return null;
    
    // Initial window sum
    for (let i = 0; i < n; i++) {
        maxSum += arr[i];
    }
    tempSum = maxSum;
    
    // Slide the window
    for (let i = n; i < arr.length; i++) {
        tempSum = tempSum - arr[i - n] + arr[i];
        maxSum = Math.max(maxSum, tempSum);
    }
    
    return maxSum;
}
// Initialize variables to keep track of the maximum sum and the current sum of the window
// If the array length is less than n, there are not enough elements to form a subarray of size n
// Calculate the initial window sum by summing the first n elements of the array
// Assign the initial window sum to the temporary sum variable
// Slide the window to the right, updating the temporary sum by subtracting the element leaving the window
// and adding the element entering the window, then updating the maximum sum if necessary
// Slide the window by subtracting the previous element and adding the next element
// Update the maximum sum if the temporary sum becomes larger
// Return the maximum sum of any subarray of size n in the array

// MinSubArrayLen
function minSubArrayLen(nums, target) {
    let start = 0
    let end = 0
    let minLen = Infinity
    let sum = 0

    while (start < nums.length) {
        if (sum < target && end < nums.length) {
            sum += nums[end]
            end++
        } else if (sum >= target) {
            minLen = Math.min(minLen, end - start)
            sum -= nums[start]
            start++
        } else {
            break
        }
    }
    return minLen === Infinity ? 0 : minLen
}
console.log(minSubArrayLen([2, 1, 6, 5, 4], 9)) // 2
console.log(minSubArrayLen([3, 1, 7, 11, 2, 9, 8, 21, 62, 33, 19], 52)) // 1

// create pointers at the start of the array and a variable for minimum length of subarray
// loop through the array, while loop
// If the current sum is less than the target and the end pointer hasn't reached the end of the array
// Expand the window by moving the end pointer forward and adding the value to the sum
// If the current sum is greater than or equal to the target
// Try to shrink the window by moving the start pointer forward and subtracting the value from the sum
// If the current sum is less than the target and the end pointer has reached the end of the array
// Break the loop
// Return the minimum length of the subarray that satisfies the condition, otherwise return 0

// FindLongestSubstring
function findLongestSubstring(str) {
    let longestLength = 0
    let seen = {}
    let start = 0

    for (let end = 0; end < str.length; end++) {
        let char = str[end]
        if (seen[char] >= start) {
            start = seen[char] + 1
        }
        seen[char] = end
        let currentLength = end - start + 1
        longestLength = Math.max(longestLength, currentLength)
    }
    return longestLength
}
console.log(findLongestSubstring('')) // 0
console.log(findLongestSubstring('thisisawesome')) // 6

// create a variable to track the longest substring length
// create an object to store characters and their position in the string
// create pointer to track start of current substring
// Iterate through the string with another pointer to represent the end of the current substring
// If the character is already in the object and its index is greater than or equal to the current start
// Move the start to the index after the repeated character
// Update the object with the current character's latest index
// Calculate the length of the current substring
// Update the longest length
// Return the longest length found

// Multiple Pointers
// SumZero
function sumZero(arr) {
    let left = 0;
    let right = arr.length - 1;
    
    while (left < right) {
        let sum = arr[left] + arr[right];
        if (sum === 0) {
            return [arr[left], arr[right]];
        } else if (sum < 0) {
            left++;
        } else {
            right--;
        }
    }
    
    return undefined;
}
// Initialize two pointers, left and right, pointing to the start and end of the array respectively
// Iterate through the array until the left pointer is less than the right pointer, while loop
// Calculate the sum of the elements pointed to by the left and right pointers
// If the sum is equal to zero, return the pair of elements
// If the sum is less than zero, increment the left pointer to increase the sum
// If the sum is greater than zero, decrement the right pointer to decrease the sum
// If no pair with sum zero is found, return undefined

// Count Unique Values
function countUniqueValues(arr) {
    if (arr.length === 0) {
        return 0
    }
    let i = 0

    for (let j = 1; j < arr.length; j++) {
        if (arr[i] !== arr[j]) {
            i++
            arr[i] = arr[j]
        }
    }
    return i + 1
}
console.log(countUniqueValues([1, 1, 1, 1, 1, 2])) // 2
console.log(countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13])) // 7

// If the array is empty return 0
// create index i to start at the first element of the array
// Iterate through the array with another pointer or index (j), starting from the second element, for loop
// Compare the elements at i and j. If they are different, increment i and set the value at i to the value at j.
// This moves unique values to the front of the array
// The count of unique values will be i + 1 since i represents the index, and indexes are zero-based.

// Avereage Pair
function averagePair(arr, target) {
    if (arr.length === 0) {
        return false
    }
    let start = 0
    let end = arr.length - 1

    while (start < end) {
        let average = (arr[start] + arr[end]) / 2
        if (average === target) {
            return true
        } else if (average < target) {
            start++
        } else {
            end--
        }
    }
    return false
}
console.log(averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8)) // true
console.log(averagePair([-1, 0, 3, 4, 5, 6], 4.1)) // false

// If the array is empty return false
// Create two pointers on each ends of the array
// While the start pointer is less than the end, while loop
// calculate the average of the values at the start and end
// if the average is equal to the target return true
// if the average is less than the target, increment the start
// if the average is greater than the target, decrement the end
// if no pair is found, retrun false
