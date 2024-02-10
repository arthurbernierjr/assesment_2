// 1. What is the difference between a **parameter** and an **argument**?

// Parameters: Variables defined in a function
// Arguments: Actual values that are passed to a function when it is called

// 2. Within a function, what is the difference between **return** and **console.log**?

// return is a keyword that ends the function's execution and returns a value
// console.log is a function that prints information to the browser's console

function isPalindrome(str) {
    const lowercaseStr = str.toLowerCase()
    const reversedStr = lowercaseStr.split('').reverse().join('')
    return lowercaseStr === reversedStr
  }
  
const palindrome1 = "Radar"
const palindrome2 = "Hello World"
  
console.log(isPalindrome(palindrome1)) // Output: true
console.log(isPalindrome(palindrome2)) // Output: false

function sumArray(arr) {
    let sum = 0
  
    for (let i = 0; i < arr.length; i++) {
      sum += arr[i]
    }
  
    return sum
}
  
const arrayToSum = [1, 2, 3, 4, 5]
const sumArrayResult = sumArray(arrayToSum)
  
console.log(sumArrayResult) // Output: 15


function checkPrime(number) {
    if (number <= 1) {
      return false
    }
  
    for (let i = 2; i <= Math.sqrt(number); i++) {
      if (number % i === 0) {
        return false
      }
    }
  
    return true
}

const num1 = 5
const num2 = 12
  
console.log(`${num1} is prime? ${checkPrime(num1)}`) // Output: true
console.log(`${num2} is prime? ${checkPrime(num2)}`) // Output: false


const calculateCube = (number) => number ** 3

let cubeNumber = 8
let cubeResult = calculateCube(cubeNumber)

console.log(`Cube of ${cubeNumber} = ${cubeResult}`)


function isVowel(char) {
    const lowercaseChar = char.toLowerCase()
  
    const vowels = "aeiou"
  
    return vowels.includes(lowercaseChar)
}
  
console.log(isVowel('A')) // Output: true
console.log(isVowel('B')) // Output: false
console.log(isVowel('C')) // Output: false


function getTwoLengths(str1, str2) {
    const length1 = str1.length
    const length2 = str2.length

    return [length1, length2]
}

const inputString1 = "One"
const inputString2 = "Two"

const lengthsArray = getTwoLengths(inputString1, inputString2)
console.log(lengthsArray) // Output: [3, 3]


function getMultipleLengths(arr) {
    const lengthsArray = arr.map(str => str.length)
    
    return lengthsArray
}
  
const lengthsArrayInput = ['check', 'one', 'two', 'working']
const lengthsArrayResult = getMultipleLengths(lengthsArrayInput)
  
console.log(lengthsArrayResult) // Output: [5, 3, 3, 7]


function findMaximum(a, b, c) {
    let maxNumber = Math.max(a, b, c)
  
    return maxNumber
}
  
let maxResult = findMaximum(100, 1, 50)
console.log(maxResult) // Output: 100


const words = ["check", "one", "two", "working", "hello", "world"]

const longestWord = words.reduce((longest, current) => {
  if (current.length > longest.length) {
    return current
  } else {
    return longest
  }
}, "")

console.log(longestWord) // Output: working


function transmogrify(num1, num2, num3) {
    let product = num1 * num2

    let transmogrifyResult = Math.pow(product, num3)

    return transmogrifyResult // (num1 * num2) ^ num3
}

let transmogrifyResult = transmogrify(1, 2, 10)
console.log(transmogrifyResult) // Output: 1024


// Project Euler Problem 2: Sum of even Fibonacci numbers below **limit**
function evenFibonacciSum(limit) {
    let a = 1, b = 2
    let evenSum = 0
    
    while (a <= limit) {
        if (a % 2 === 0) {
            evenSum += a
        }
        
        [a, b] = [b, a + b] // Fibonacci sequence
    }
    
    return evenSum
}

let eulerResult = evenFibonacciSum(4000000) // Limit = 4 million
console.log(eulerResult) // Output: 4613732


function findNeedleIndex(haystack) {
    const index = haystack.indexOf("needle") 
  
    if (index !== -1) {
      return "Found the needle at index " + index
    } else {
      return "Needle not found in the haystack"
    }
}
  
const haystackArray = ["check", "one", "two", "needle", "hello", "world"]
console.log(findNeedleIndex(haystackArray))  // Output: Found at index 3


function sumPositive(numbers) {
    const positiveNumbers = numbers.filter(num => num > 0);
  
    const sum = positiveNumbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
  
    return sum
}
  
const anyNumbers = [1, 10, -2, -4, 5]
const sumPositiveResult = sumPositive(anyNumbers)
console.log(sumPositiveResult) // Output: 16


// Problem-Solving Patterns

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

const isAnagramResult1 = validAnagram("secure", "rescue")
console.log(isAnagramResult1) // Output: true
  
const isAnagramResult2 = validAnagram("taco", "cat")
console.log(isAnagramResult2) // Output: false  


function sameFrequency(num1, num2) {
    const strNum1 = num1.toString()
    const strNum2 = num2.toString();
  
    const counter1 = {}
    const counter2 = {}
  
    for (let digit of strNum1) {
      counter1[digit] = (counter1[digit] || 0) + 1
    }
  
    for (let digit of strNum2) {
      counter2[digit] = (counter2[digit] || 0) + 1
    }
  
    for (let digit in counter1) {
      if (counter1[digit] !== counter2[digit]) {
        return false
      }
    }
  
    return true
}
  
const sameFrequencyResult1 = sameFrequency(182, 281);
console.log(sameFrequencyResult1) // Output: true
  
const sameFrequencyResult2 = sameFrequency(34, 14)
console.log(sameFrequencyResult2) // Output: false
  
const sameFrequencyResult3 = sameFrequency(3589578, 5879385)
console.log(sameFrequencyResult3) // Output: true
  
const sameFrequencyResult4 = sameFrequency(22, 222)
console.log(sameFrequencyResult4) // Output: false  


function areThereDuplicates() {
    const counter = {}
  
    for (let arg of arguments) {
      counter[arg] = (counter[arg] || 0) + 1
    }
  
    for (let value in counter) {
      if (counter[value] > 1) {
        return true
      }
    }
  
    return false
}
  
const duplicatesResult1 = areThereDuplicates(1, 2, 3)
console.log(duplicatesResult1) // Output: false
  
const duplicatesResult2 = areThereDuplicates(1, 2, 2)
console.log(duplicatesResult2) // Output: true
  
const duplicatesResult3 = areThereDuplicates('1', '2', 'a', 'b')
console.log(duplicatesResult3) // Output: true  


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

const maxSubarrayArray = [1, 2, 5, 2, 8, 1, 5] 
const windowSize = 2
console.log(maxSubarraySum(maxSubarrayArray, windowSize)) // Output: 10 (8 + 2)


function minSubArrayLen(nums, target) {
    let start = 0
    let end = 0
    let minLen = Infinity
    let sum = 0

    while (start < nums.length) {
        // if sum <= target, expand the window
        if (sum < target && end < nums.length) {
            sum += nums[end]
            end++
        }
        // if sum >= target, shrink the window
        else if (sum >= target) {
            minLen = Math.min(minLen, end - start)
            sum -= nums[start]
            start++
        }
        // break if the end has been reached, window can't expand anymore
        else {
            break
        }
    }

    return minLen === Infinity ? 0 : minLen
}

console.log(minSubArrayLen([2, 3, 1, 2, 4, 3], 7)) // Output: 2
console.log(minSubArrayLen([2, 1, 6, 5, 4], 9)) // Output: 2
console.log(minSubArrayLen([3, 1, 7, 11, 2, 9, 8, 21, 62, 33, 19], 52)) // Output: 1
console.log(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 39)) // Output: 3
console.log(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 55)) // Output: 5
console.log(minSubArrayLen([4, 3, 3, 8, 1, 2, 3], 11)); // Output: 2
console.log(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 95)) // Output: 0


function findLongestSubstring(str) {
    let longest = 0
    let seen = {}
    let start = 0

    for (let end = 0; end < str.length; end++) {
        let char = str[end]

        if (seen[char] >= start) {
            start = seen[char] + 1
        }

        seen[char] = end
        longest = Math.max(longest, end - start + 1)
    }

    return longest
}

console.log(findLongestSubstring('')); // Output: 0
console.log(findLongestSubstring('thisisawesome')) // Output: 6
console.log(findLongestSubstring('thecatinthehat')) // Output: 7
console.log(findLongestSubstring('bbbbbb')); // Output: 1
console.log(findLongestSubstring('longestsubstring')) // Output: 8
console.log(findLongestSubstring('thisishowwedoit')) // Output: 6


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

const exampleArray1 = [-4, -3, -2, -1, 0, 1, 2, 3, 10]
const sumZeroResult1 = sumZero(exampleArray1)

if (sumZeroResult1) {
    console.log(`Pair with sum zero: [${sumZeroResult1[0]}, ${sumZeroResult1[1]}]`)
} else {
    console.log("No pair with sum zero found.")
}

