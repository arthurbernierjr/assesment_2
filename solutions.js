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

// MaxSubarraySum
// Problem Statement: Write a function called maxSubarraySum which accepts an array of integers and a number called n. The function should calculate the maximum sum of nconsecutive elements in the array.

const maxSubarraySum = (arr, n) => {
    // if array is less than n return null
    if (arr.length < n) return null    
    // initialize temp sum & max sum
    let tempSum = 0
    let maxSum = 0
    // create initial window of first n items of array
    for (let i = 0; i < n; i++) {
        // add items in array and save to maxSum
        maxSum += arr[i]
    }

    // set tempSum to maxSum
    tempSum = maxSum

    // create sliding window for loop where first item is subtracted and last item is added
    for (let i = n; i < arr.length; i++) {
        tempSum = tempSum - arr[i - n] + arr[i] 
        if (tempSum > maxSum) maxSum = tempSum
    }
    return maxSum

}

console.log(maxSubarraySum([1,2,3,4,5], 2)) // returns 9

// Question 1: MinSubArrayLen
// Problem Statement: Write a function called minSubArrayLen which accepts two parameters - an array of positive integers and a positive integer. This function should return the minimal length of a contiguous subarray of which the sum is greater than or equal to the integer passed to the function. If there isn't one, return 0 instead.

const minSubArrayLen = (arr, threshold) => {
    // initialize start pointer, end pointer, sum, minLen
    let startPointer = 0
    let endPointer = 0
    let total = 0
    let minLen = 0
    // loop through array while the end is less than arr.length
    while (endPointer < arr.length) {
        
        // add item to total
        total += arr[endPointer]

        // while the sum >= threshold
        while (total >= threshold) {            
            // set curLen to end - start and add 1 to get length
            let curLen = endPointer - startPointer + 1
            // if curLen < minLen or minLen hasn't been set yet, set minLen to curLen
            if (!minLen || curLen < minLen) minLen = curLen
            // shift the window by subtracting arr[start] from sum and incrementing start
            total -= arr[startPointer]
            startPointer ++
        }
        // increment the end up one
        endPointer ++
    }
    // return minLen
    return minLen
}

console.log(minSubArrayLen([1,4,16,22,5,7,8,9,10],95), minSubArrayLen([2,3,1,2,4,3], 7)) // returns 0 2

// FindLongestSubstring

// Problem Statement: Write a function called findLongestSubstring which accepts a string and returns the length of the longest substring with all distinct characters.

// This is my attempt. It's wrong because it has an O(N^2) time complexity and it looks only at adjacent characters. Now i'm thinking I can use a frequency counter to solve the second problem. If I have time I'll come back.

const findLongestSubstring = arr => {
    // initialize a start pointer as 0, end pointer as 1, and maxLength as 1
    let start = 0
    let end = 1
    let maxLen = 1

    // loop while end < arr.length
    while (end < arr.length) {

        // loop while end pointer greater than arr.len & isn't equal to the previous item
        while (arr[end] && arr[end] != arr[end-1]) {
            // initialize and define current length var as end -  start
            let curLen = end - start + 1
            // set maxLen to currentLen if it's larger
            if (curLen > maxLen) maxLen = curLen
            // increment end pointer
            end ++
        }
        // increment start pointer ++
        start ++
        // resent end pointer to start pointer + 1
        end = start + 1
    }
    return maxLen
}


// SumZero
// Problem Statement: Write a function called sumZerowhich accepts a sorted array of integers. The function should find the first pair where the sum is 0. Return an array that includes both values that sum to zero or undefinedif a pair does not exist.

// initialize a left var of 0
// initialize a right var of arr.len -1

// loop while left is less than right so that they don't converge

// save a sum variable as left + right
// if the sum is 0, return pair

// if it's less than 0, pos increment left. this works because the array is sorted
// otherwise, neg increment right

// return undefined if none of this works

const sumZero = arr => {
    let left = 0
    let right = arr.length -1

    while (left < right) {
        let sum = arr[left] + arr[right]
        if (sum === 0) {
            return [arr[left], arr[right]]
        } else if (sum < 0) {
            left ++
        } else {
            right --
        }
    }
    return undefined
}

console.log(sumZero([1,2,3,-3])) // returns [ 3, -3 ]

// Question 1: Count Unique Values
// Problem Statement: Implement a function called countUniqueValues, which accepts a sorted array, and counts the unique values in the array. There can be negative numbers in the array, but it will always be sorted.

// My thinking was to either use a for loop and increment 1 every time an item in the array doesn't equal the preceding one, or to use a frequency counter and count the number of properties in the counter object. Neither of those use the multiple pointers method so i will follow the pseudocode provided.

const countUniqueValues = arr => {
    // If the array is empty, return 0.
    if (!arr.length) return 0

    // Initialize a pointer or index (i) to start at the first element of the array.
    let i = 0
    // Iterate through the array with another pointer or index (j), starting from the second element.
    for (let j = 1; j < arr.length; j++) {

        // Compare the elements at iand j. If they are different, increment i, and set the value at ito the value at j. This effectively moves unique values to the front of the array without needing an auxiliary data structure.
        if (arr[i] !== arr[j]) {            
            arr[i] = arr[j]
            i++
        }

    }
    // The count of unique values will be i + 1since irepresents the index, and indexes are zero-based.
// Return i + 1.
    return i + 1

}

console.log(countUniqueValues([1,1,1,1,2])) // returns 2

// Average Pair
// Problem Statement: Write a function called averagePair. Given a sorted array of integers and a target average, determine if there is a pair of values in the array where the average of the pair equals the target average. There may be more than one pair that matches the average target.

const averagePair = (arr, avg) => {
    // initialize a left var of 0
    let left = 0
    // initialize a right var of arr.len -1
    let right = arr.length - 1

    // loop while left is less than right so that they don't converge
    while (left < right) {
        // save a temp average variable as left * right / 2
        tempAvg = (arr[left] + arr[right]) / 2
        // if the temp average equals the average arg, return true
        if (tempAvg === avg) {
            return true
        } else if (tempAvg < avg) {
            // if it's less than avg, pos increment left
            left ++
        } else {
            // otherwise, neg increment right
            right --
        }
    }
    // return false outside of loop
    return false
}

console.log(averagePair([1,2,3], 2.5), averagePair([-1,0,3,4,5,6], 4.1)) // returns true false

// Binary Search
// Problem Statement: Given a sorted array of integers, write a function called search, that accepts a value and returns the index where the value passed to the function is located. If the value is not found, return -1.

const search = (arr, val) => {
    // initialize a left and right pointer
    let left = 0
    let right = arr.length -1

    // run loop while left is less than right
    while (left < right) {
        // divide the array, save index as check
        let mid = Math.floor((left + right) / 2)
        let check = arr[mid]
        // if arr[check] equals value, return check
        if (check === val) {
            return mid
            // else if less, set right to middle -1
        } else if (check < val) {
            right = mid -1
            // else set left to middle + 1
        } else {
            left = mid + 1
        }
    }
    // return -1
    return -1
}

console.log(search([1,2,3], 2)) // returns 1

// Find First and Last Position of Element in Sorted Array
// Problem Statement: Given an array of integers sorted in ascending order, find the starting and ending position of a given target value. If the target is not found in the array, return [-1, -1].

// i know this isn't DRY but I'm grinding to finish this. If i had more time I would have condensed first() and last() into one function w/ an additional parameter

const findFirstAndLastPosition = (arr, n) => {
    // call two functions: findFirst & findLast
    return [first(arr,n), last(arr,n)]
}

const first = (arr,n) => {
    // initialize left and right pointers
    let left = 0
    let right = arr.length -1
    // initialize index as -1
    let index = -1
    // loop while left is less than right
    while (left <= right) {
        // set middle value
        let mid = Math.floor((left + right) / 2)
        // save check as middle value
        let check = arr[mid]
        // if check is value, set index to mid & set right to mid -1
        if (check === n) {
            index = mid
            right = mid -1
            // if check is greater than value, set right to mid -1
        } else if (check > n) {
            right = mid -1
            // if else set left to mid + 1
        } else {
            left = mid + 1
        }
    }
    // return index
    return index
}

const last = (arr,n) => {
    // initialize left and right pointers
    let left = 0
    let right = arr.length -1
    // initialize index as -1
    let index = -1
    // loop while left is less than right
    while (left <= right) {
        // set middle value
        let mid = Math.floor((left + right) / 2)
        // save check as middle value
        let check = arr[mid]
        // if check is value, set index to mid & set left to mid +1
        if (check === n) {
            index = mid
            left = mid +1
            // if check is greater than value, set right to mid -1
        } else if (check > n) {
            right = mid -1
            // if else set left to mid + 1
        } else {
            left = mid + 1
        }
    }
    // return index
    return index
}

console.log(findFirstAndLastPosition([5,7,7,8,8,10], 8)) // returns [ 3, 4 ]

// Pow(x, n)
// Problem Statement: Implement pow(x, n), which calculates xraised to the power n(i.e., x^n).

function pow(x, n) {
    // Handle base case where power of 0 equals 1... somehow... math lol
    if (n === 0) {
        return 1;
    }

    // make product inverse and change n to positive
    if (n < 0) {
        return 1 / pow(x, -n);
    }
    
    // calculate power of halves
    let half = pow(x, Math.floor(n / 2));
    
    // if even, multiply halves
    if (n % 2 === 0) {
        return half * half;
    // if odd, multiple halves and add the remainder
    } else {
        return x * half * half;
    }
}

console.log(pow(2, 10)) // returns 1024

// Merge Sort
// Problem Statement: Implement Merge Sort, a sorting algorithm that follows the Divide and Conquer paradigm.

const mergeSort = arr => {
    if (arr.length <= 1) return arr

    let mid = Math.floor(arr.length / 2)

    let left = mergeSort(arr.slice(0, mid))
    let right = mergeSort(arr.slice(mid))
    return merge(left, right)
}
  
  // helper function
const merge = (arr1, arr2) => {
    var result = []
    while (arr1.length && arr2.length) {
        if (arr1[0] <= arr2[0]) {
            result.push(arr1.shift())
        } else {
            result.push(arr2.shift())
        }
    }
    return result.concat(arr1, arr2)
}

console.log(mergeSort([1,2,4,0,4,4,1])) // returns [0, 1, 1, 2, 4, 4, 4]

// Quick Sort
// Problem Statement: Implement Quick Sort, a sorting algorithm that follows the Divide and Conquer paradigm.

const quickSort = arr => {
    if (arr.length <= 1) {
        return arr
    }
    let pivot = arr[arr.length - 1]
    let low = []
    let high = []
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] <= pivot) {
            low.push(arr[i])
        } else {
            high.push(arr[i])
        }
    }
    return [...quickSort(low), pivot, ...quickSort(high)]
  }
  
  console.log(quickSort([0, 100, 2, 64, 2])) // returns [ 0, 2, 2, 64, 100 ]

  // that's it arthur??? that's the best you can do??!? 
  // jkjkjkjk