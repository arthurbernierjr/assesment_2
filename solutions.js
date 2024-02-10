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

// Get Two Lengths
function getTwoLengths(str1, str2) {
// Return an array containing the lengths of the two input strings.
    return [str1.length, str2.length]
}

//Get multiple Lengths 
// Use the map function to transform each string in the input array into its length.
// Return the resulting array of lengths.
function getMultipleLengths(arr){
    return arr.map(str => str.length)
}

// Maximum of Three Numbers
function maxOfThreeNums(num1, num2, num3) {
//Use the Math.max function to find the maximum of the three numbers.
//Return the maximum number.
    return Math.max(num1, num2, num3)
}

//Print Longest Word
function printLongestWord(words) {
// Use the reduce method to find the longest string in the array.
// In case of a tie, the first word in the array order is returned.
    return words.reduce((longest, current) => current.length > longest.length ? current : longest);
}

//Transmogrify the Numbers
function transmogrify(num1, num2, num3) {
//Calculate the product of the first two numbers.
    const product = num1 * num2;
//Raise the product to the power of the third number.
//Return the result.
    return Math.pow(product, num3);
 }

//Project Euler Problem 2

 function projectEuler(limit) {
 //Initialize two variables to store the first two numbers of the Fibonacci sequence.
    let sum = 0
    let num1 = 1
    let num2 = 1
//Within the loop, check if the current number is even. If so, add it to the sum.
//Use a while loop to generate Fibonacci numbers up to the specified limit.
//Update the Fibonacci sequence variables for the next iteration.
    while(num2 <= limit){
        if(num2 % 2 === 0){
            sum += num2
        }
        const nextNum = num1 + num2
        num1 = num2
        num2 = nextNum
    }
//Return the sum of even Fibonacci numbers.
    return sum
}

// A Needle in the Haystack
function findNeedle(haystack) {
// Use the indexOf method to find the index of the "needle" in the array.
    const index = haystack.indexOf('needle')
//Return a string that includes the index of the needle.
    return `The needle is at position ${index}`
}

// Sum the Positive
function sumPositive(nums) {
// Use the filter method to create a new array containing only positive numbers.
    const positiveNums = nums.filter(nums => nums > 0)
// Use the reduce method to sum the values of the filtered array.
    const sum = positiveNums.reduce((acc, current) => acc + current, 0)
// Return the sum.
    return sum
}

//Question 1: Valid Anagram 
//Given two strings, write a function to determine if the second string is an anagram of the first.

//solution: 
// check if the length of strings are the same; if not, not an anagram = false
// create freq counter - empty object
// loop for loop to iterate through first string
// loop through second string 
// compare counters - iterate through the first counter and check if the letter exists in the second counter with the same freq; if not return false
// if all the letters match in freq return true

function validAnagram(first, second) {
    if (first.length !== second.length) {
        return false;
    }

    const lookup = {};

    for (let i = 0; i < first.length; i++) {
        let letter = first[i];
        // If letter exists, increment, otherwise set to 1
        lookup[letter] ? lookup[letter] += 1 : lookup[letter] = 1;
    }

    for (let i = 0; i < second.length; i++) {
        let letter = second[i];
        // Can't find letter or letter is zero then it's not an anagram
        if (!lookup[letter]) {
            return false;
        } else {
            lookup[letter] -= 1;
        }
    }
    return true;
}

//Question 2 
// Given two positive integers, find out if the two numbers have the same frequency of digits.

// solution 
// convert both numbers to string representation 
// Initialize two freq counters 
// use freq counter to iterate over each digit of the two nums 
// compare both counters; if they have the same values and frequency of digits return true if not return false

function sameFrequency(num1, num2) {
    // Convert numbers to strings
    const strNum1 = num1.toString();
    const strNum2 = num2.toString();
    
    // If lengths are different, frequencies cannot be the same
    if (strNum1.length !== strNum2.length) {
        return false;
    }
    
    // Initialize frequency counters
    const frequencyCounter1 = {};
    const frequencyCounter2 = {};
    
    // Populate frequency counters for num1
    for (let digit of strNum1) {
        frequencyCounter1[digit] = (frequencyCounter1[digit] || 0) + 1;
    }
    
    // Populate frequency counters for num2
    for (let digit of strNum2) {
        frequencyCounter2[digit] = (frequencyCounter2[digit] || 0) + 1;
    }
    
    // Compare frequency counters
    for (let key in frequencyCounter1) {
        if (frequencyCounter1[key] !== frequencyCounter2[key]) {
            return false;
        }
    }
    return true;
}

//Question 3: Are there Duplicates
// Implement a function called areThereDuplicates, which accepts a variable number of arguments, and checks whether there are any duplicates among the arguments passed in.

// Use a frequency counter object to count the occurrences of each argument.
// Populate the frequency counter by iterating over the arguments.
// Iterate through the values of the frequency counter. If any value is greater than 1, it means a duplicate exists.
// Return true if any duplicates are found, otherwise return false.

function areThereDuplicates() {
    // Create a frequency counter object
    const frequencyCounter = {};
    
    // Populate the frequency counter by iterating over the arguments
    for (let arg of arguments) {
        frequencyCounter[arg] = (frequencyCounter[arg] || 0) + 1;
    }
    
    // Iterate through the values of the frequency counter
    for (let key in frequencyCounter) {
        // If any value is greater than 1, a duplicate exists
        if (frequencyCounter[key] > 1) {
            return true;
        }
    }
    
    // No duplicates found
    return false;
}

// MaxSubarraySum 
// Write a function called maxSubarraySum which accepts an array of integers and a number called n. The function should calculate the maximum sum of n consecutive elements in the array.
// Solution Steps:

//     Edge Case Check: If n is greater than the array length, return null because it's not possible to find a subarray of length n.
//     Initial Sum Calculation: Calculate the sum of the first n elements to initialize the max sum.

//     Sliding the Window:
//         Start a loop from the nth element of the array.
//         Subtract the element at the start of the window and add the element at the end of the window to the sum. This effectively slides the window over by one position.
//         Update the max sum if the new sum is greater than the current max sum.
//     Return Max Sum: After sliding through the entire array, return the max sum found.

function maxSubarraySum(arr, n) {
    let maxSum = 0
    let tempSum = 0
    if (arr.length < n) return null
    
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

//Practice Problems 

//Question 1: MinSubArrayLen
//Write a function called minSubArrayLen which accepts two parameters - an array of positive integers and a positive integer. This function should return the minimal length of a contiguous subarray of which the sum is greater than or equal to the integer passed to the function. If there isn't one, return 0 instead.

//solution steps 

// Initialize two pointers at the start of the array and a variable to track the minimum length of the subarray.
// Initialize a sum variable to accumulate the sums of the subarrays.
// Expand the window by moving the end pointer, adding the values to the sum until it is greater than or equal to the target sum.
// Once the sum is greater than or equal to the target, try to shrink the window from the beginning to find the smallest subarray by moving the start pointer forward and subtracting values from the sum.
// Update the minimum length each time a smaller subarray that satisfies the condition is found.
// Return the minimum length if found; otherwise, return 0.

function minSubArrayLen(target, nums) {
    let start = 0;
    let end = 0;
    let minLength = Infinity;
    let sum = 0;

    while (start < nums.length) {
        // If current window's sum is less than target and end pointer hasn't reached the end
        if (sum < target && end < nums.length) {
            sum += nums[end];
            end++;
        }
        // If current window's sum is greater than or equal to target
        else if (sum >= target) {
            // Update minLength if current window's length is smaller
            minLength = Math.min(minLength, end - start);
            // Shrink the window from the beginning
            sum -= nums[start];
            start++;
        }
        // If current window's sum is less than target and end pointer has reached the end
        else {
            break;
        }
    }
    // Return minLength if found, otherwise return 0
    return minLength === Infinity ? 0 : minLength;
}

//Question 2
//  Write a function called findLongestSubstring which accepts a string and returns the length of the longest substring with all distinct characters.

//solution steps

// Initialize a variable to keep track of the longest substring length.
// Use a pointer or index to track the start of the current substring.
// Create a map or object to store characters and their positions within the string.
// Iterate through the string with another pointer or index to represent the end of the current substring.
// As you encounter each character, check if it is already in the map/object. If it is, and its index is greater than or equal to the current start of the substring, move the start to the index after the repeated character.
// Update the map/object with the current character's latest index.
// Calculate the length of the current substring and update the longest length if necessary.
// Return the longest length found.

function findLongestSubstring(str) {
    let longestLength = 0;
    let start = 0;
    const charMap = {};

    for (let end = 0; end < str.length; end++) {
        const currentChar = str[end];

        if (charMap[currentChar] >= start) {
            start = charMap[currentChar] + 1;
        }

        charMap[currentChar] = end;
        longestLength = Math.max(longestLength, end - start + 1);
    }

    return longestLength;
}

// Multiple Problems 

// Question 1: Count Unique Values

//Implement a function called countUniqueValues, which accepts a sorted array, and counts the unique values in the array. There can be negative numbers in the array, but it will always be sorted.

//solutions 
// If the array is empty, return 0.
// Initialize a pointer or index (i) to start at the first element of the array.
// Iterate through the array with another pointer or index (j), starting from the second element.
// Compare the elements at i and j. If they are different, increment i, and set the value at i to the value at j. This effectively moves unique values to the front of the array without needing an auxiliary data structure.
// The count of unique values will be i + 1 since i represents the index, and indexes are zero-based.
// Return i + 1.

function countUniqueValues(arr) {
    // If the array is empty, return 0
    if (arr.length === 0) {
        return 0;
    }

    // Initialize a pointer or index (i) to start at the first element of the array
    let i = 0;

    // Iterate through the array with another pointer or index (j), starting from the second element
    for (let j = 1; j < arr.length; j++) {
        // Compare the elements at i and j
        if (arr[i] !== arr[j]) {
            // If they are different, increment i, and set the value at i to the value at j
            i++;
            arr[i] = arr[j];
        }
    }

    // The count of unique values will be i + 1 since i represents the index, and indexes are zero-based
    return i + 1;
}

//Question 2 

//Write a function called averagePair. Given a sorted array of integers and a target average, determine if there is a pair of values in the array where the average of the pair equals the target average. There may be more than one pair that matches the average target.

//solution steps 

// If the array is empty, return false.
// Initialize two pointers: one at the start (start) of the array and the other at the end (end).

// While the start pointer is less than the end pointer:
//     Calculate the average of the values at the start and end pointers.
//     If the calculated average is equal to the target average, return true.
//     If the calculated average is less than the target average, move the start pointer up (increment start) to try and increase the average.
//     If the calculated average is greater than the target average, move the end pointer down (decrement end) to try and decrease the average.
// If no pair is found that matches the target average, return false.

function averagePair(arr, target) {
    // If the array is empty, return false
    if (arr.length === 0) {
        return false;
    }

    let start = 0;
    let end = arr.length - 1;

    while (start < end) {
        const average = (arr[start] + arr[end]) / 2;

        if (average === target) {
            return true;
        } else if (average < target) {
            start++;
        } else {
            end--;
        }
    }

    return false;
}

//Divide and Conquer 

//Question 1  Find First and Last Position of Element in Sorted Array

//The Divide and Conquer strategy is an algorithm design paradigm that solves a problem by recursively breaking it down into two or more sub-problems of the same or related type, until these become simple enough to be solved directly. Solutions to the sub-problems are then combined to give a solution to the original problem.

// Given an array of integers sorted in ascending order, find the starting and ending position of a given target value. If the target is not found in the array, return [-1, -1].

//solution 

// Binary Search for First Position: Implement a modified binary search to find the first occurrence of the target. If the target is found, instead of returning immediately, continue searching to the left (lower indices) to see if there are earlier occurrences.
// Binary Search for Last Position: Implement a modified binary search to find the last occurrence of the target. If the target is found, continue searching to the right (higher indices) to see if there are later occurrences.
// Return Positions: Use the results from the two modified binary searches to return the start and end positions of the target value in the array.

function searchRange(nums, target) {
    // Function to find the first occurrence of the target
    const findFirst = () => {
        let left = 0;
        let right = nums.length - 1;
        let firstOccurrence = -1;

        while (left <= right) {
            const mid = Math.floor((left + right) / 2);
            if (nums[mid] >= target) {
                right = mid - 1;
                if (nums[mid] === target) {
                    firstOccurrence = mid;
                }
            } else {
                left = mid + 1;
            }
        }

        return firstOccurrence;
    };

    // Function to find the last occurrence of the target
    const findLast = () => {
        let left = 0;
        let right = nums.length - 1;
        let lastOccurrence = -1;

        while (left <= right) {
            const mid = Math.floor((left + right) / 2);
            if (nums[mid] <= target) {
                left = mid + 1;
                if (nums[mid] === target) {
                    lastOccurrence = mid;
                }
            } else {
                right = mid - 1;
            }
        }

        return lastOccurrence;
    };

    const firstPosition = findFirst();
    const lastPosition = findLast();

    return [firstPosition, lastPosition];
}

//Question 2 Pow(x, n)

//Implement pow(x, n), which calculates x raised to the power n (i.e., x^n).

//solution 

// Handle Base Case: If n is 0, return 1.
// Handle Negative Power: If n is negative, convert the problem into calculating pow(x, -n) and take the reciprocal at the end.
// Divide and Conquer: Use the property that x^n = x^(n/2) * x^(n/2) for even n, and for odd n, it's x * x^(n/2) * x^(n/2). This reduces the problem size by half with each recursive call.
// Combine Results: Calculate pow(x, n/2) once and use it to compute the final result to avoid redundant calculations.

function myPow(x, n) {
    // Handle Base Case: If n is 0, return 1
    if (n === 0) {
        return 1;
    }

    // Handle Negative Power: If n is negative, convert the problem into calculating pow(x, -n) and take the reciprocal at the end
    if (n < 0) {
        x = 1 / x;
        n = -n;
    }

    // Divide and Conquer
    const powHalf = myPow(x, Math.floor(n / 2));

    // Combine Results
    if (n % 2 === 0) {
        // For even n
        return powHalf * powHalf;
    } else {
        // For odd n
        return x * powHalf * powHalf;
    }
}

//Question 3 Merge Sort 

// Implement Merge Sort, a sorting algorithm that follows the Divide and Conquer paradigm.

//Solution 

// Divide: If the array has more than one element, split the array into two halves.
// Conquer: Recursively apply merge sort to both halves.
// Combine: Merge the two sorted halves into a single sorted array.
// Base Case: If the array has only one element, it is already sorted.

function mergeSort(arr) {
    // Base Case: If the array has only one element, it is already sorted
    if (arr.length <= 1) {
        return arr;
    }

    // Divide: Split the array into two halves
    const mid = Math.floor(arr.length / 2);
    const leftHalf = arr.slice(0, mid);
    const rightHalf = arr.slice(mid);

    // Conquer: Recursively apply merge sort to both halves
    const sortedLeftHalf = mergeSort(leftHalf);
    const sortedRightHalf = mergeSort(rightHalf);

    // Combine: Merge the two sorted halves into a single sorted array
    return merge(sortedLeftHalf, sortedRightHalf);
}

// Merge Function
function merge(arr1, arr2) {
    let mergedArray = [];
    let i = 0; // Pointer for arr1
    let j = 0; // Pointer for arr2

    // Iterate over both arrays and compare elements to merge them in sorted order
    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            mergedArray.push(arr1[i]);
            i++;
        } else {
            mergedArray.push(arr2[j]);
            j++;
        }
    }

    // If any elements remaining in arr1 or arr2, append them to the mergedArray
    while (i < arr1.length) {
        mergedArray.push(arr1[i]);
        i++;
    }

    while (j < arr2.length) {
        mergedArray.push(arr2[j]);
        j++;
    }

    return mergedArray;
}

//Question 4: Quick sort 

//Implement Quick Sort, a sorting algorithm that follows the Divide and Conquer paradigm.

//solution steps 

// Choose Pivot: Select a pivot element from the array. The choice of pivot can affect the algorithm's performance but does not affect correctness. A common approach is to pick the last element as the pivot.
// Partition: Rearrange the array so that all elements less than the pivot come before it, and all elements greater come after it. After this step, the pivot is in its final position.
// Recursively Apply: Apply quick sort to the sub-arrays formed by dividing the array around the pivot.
// Base Case: If the array has one or no elements, it is already sorted.

function quickSort(arr) {
    // Base Case: If the array has one or no elements, it is already sorted
    if (arr.length <= 1) {
        return arr;
    }

    // Choose Pivot: Select the last element as the pivot
    const pivot = arr[arr.length - 1];
    const leftArray = [];
    const rightArray = [];

    // Partition: Rearrange the array based on the pivot
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] < pivot) {
            leftArray.push(arr[i]);
        } else {
            rightArray.push(arr[i]);
        }
    }

    // Recursively Apply: Apply quick sort to the left and right sub-arrays
    const sortedLeftArray = quickSort(leftArray);
    const sortedRightArray = quickSort(rightArray);

    // Combine: Concatenate the sorted left sub-array, pivot, and sorted right sub-array
    return [...sortedLeftArray, pivot, ...sortedRightArray];
}