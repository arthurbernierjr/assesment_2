//1. A parameter is a variable declared in the function signature. 
//   An argument, on the other hand, is the actual value that is passed to a function when calling it.

//2. The return statement is used to specify the value that a function should return to the caller.
//   Console.log, on the other hand, is a method provided by the console object in JavaScript that is used for logging information to the console for debugging purposes. 


// Palindrome

function isPalindrome(inputString) {

    const lowercaseString = inputString.toLowerCase()

    const reversedString = lowercaseString.split('').reverse().join('')

    if (lowercaseString === reversedString) {
        return true
    } else {
        return false
    }
}

const input = 'Pop'

const result = isPalindrome(input)

console.log(result, input)



// Sum Array

function sumArray(arr) {
    let sum = 0
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i]
    }
    return sum
}

const array = [1, 2, 3, 4, 5]
const resultSum = sumArray(array)

console.log(resultSum)


// Prime Numbers

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

function printPrimes(limit) {
    for (let i = 2; i <= limit; i++) {
        if (checkPrime(i)) {
            console.log(i)
        }
    }
}

const limit = 20
printPrimes(limit)


// calculateCube

function calculateCube(number) {
    const result = 3 * 6 * 9
    return result
}
console.log(calculateCube(3))

// isAVowel

function isAVowel(character) {
    const vowels = "aeiouAEIOU"
    const isVowel = vowels.includes(character)
    return isVowel
}
console.log(isAVowel("p"))

// getTwoLengths

function getTwoLengths(str1, str2) {
    const lengths = [str1.length, str2.length]
    return lengths
}
console.log(getTwoLengths("pizza", "time"))

// getMultipleLengths

function getMultipleLengths(arr) {
    const lengths = arr.map(str => str.length)
    return lengths
}
console.log(getMultipleLengths(["pie", "cake", "muffin", "cupcake"]))

// maximumOfThreeNumbers

function maximumOfThreeNumbers(num1, num2, num3) {
    const max = Math.max(num1, num2, num3)
    return max
}
console.log(maximumOfThreeNumbers(13, 20, 2))

// printLongestWord

function printLongestWord(words) {
    const LongestWord = words.reduce((longest, current) => 
        current.length > longest.length ? current : longest
    )
    return LongestWord
}
console.log(printLongestWord(["tie", "t-shirt", "pants"]))

// transmogrifyNumbers



// projectEulerProblem2



// aNeedleInTheHaystack



// sumThePositive


