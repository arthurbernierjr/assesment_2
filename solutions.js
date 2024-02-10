//VERBAL QUESTIONS
//Parameters are kind of like placeholders that become arguments when the function is invoked.
//Console.log passes an argument to console while return is used to end/execute a function.

//PALINDROME
function palindromeQ(str) {
    const lowercaseStr = str.toLowerCase()
    const reversedStr = lowercaseStr.split('').reverse().join('')
    return lowercaseStr === reversedStr
}
const palindrome = "Level"
console.log(palindromeQ(palindrome))

//SUM ARRAY
function SumArrQ(arr) {
    let sum = 0
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i]
    }
    return sum
}
const array = [11, 13, 32, 1]
console.log(sumArray(array))

//PRIME
function checkPrime (num) { //check
    if(num <= 1){
        return false
    }
    for(let i = 2; i < num; i++){
    if (num % i == 0) {
        return false
    }
}
    return true
}
console. log (checkPrime (9))

function printPrimes(limit) { //print
    for (let i = 2; i <= limit; i++) {
        if (checkPrime(i)) {
            console.log(i)
        }
    }
}

const limit = 20
printPrimes(limit)

//CALCULATE THE CUBE
function calculateCube(number) {
    return number * number * number
}

const num = 5
const cube = calculateCube(num)
console.log(`${num} cubed is ${cube}`)

//IS IT A VOWEL
function isVowel(char) {
    const vowels = "aeiou"
    return vowels.includes(char)
}

console.log(isVowel('a'))
console.log(isVowel('b'))

//GET TWO STRING LENGTHS
function twoStrLengths(str1, str2) {
    return [str1.length, str2.length]
}

const string1 = "Hello"
const string2 = "World"
console.log(getTwoLengths(string1, string2))

//GET MULTIPLE LENGTHS
function getMultipleLengths(arr) {
    return arr.map(str => str.length)
}

const strings = ["red", "blue", "green", "magenta"]
console.log(getMultipleLengths(strings))

//GET MAX NUM 
function maximumOfThreeNumbers(num1, num2, num3) {
    return Math.max(num1, num2, num3)
}

const maxNumber = maximumOfThreeNumbers(10, 5, 8)
console.log(maxNumber)

//PRINT LONGEST WORD
function printLongestWord(words) {
    if (words.length === 0) {
        return null
    }
    return words.reduce((longest, current) => {
        return current.length > longest.length ? current : longest;
    })
}

const wordsArray = ["pneumonoultramicroscopicsilicovolcanoconiosis", "dog", "golf", "grapefruit", "rainfall"]
console.log(printLongestWord(wordsArray))

//TRANSMOG THE NUMBERS
function transmogrify(num1, num2, num3) {
    const product = num1 * num2
    return Math.pow(product, num3)
}

const transmogResult = transmogrify(2, 3, 4)
console.log(transmogResult)

//PROJECT EULER PROB 2
function evenFibonacciSum(max) {
    let fib1 = 1
    let fib2 = 2
    let sum = 0

    while (fib2 <= max) {
        if (fib2 % 2 === 0) {
            sum += fib2;
        }
        const nextFib = fib1 + fib2;
        fib1 = fib2;
        fib2 = nextFib;
    }

    return sum;
}

const max = 10000
console.log("The sum of even Fibonacci numbers up to", max, "is", evenFibonacciSum(max))

//NEEDLE IN THE HAYSTACK
function findNeedle(haystack) {
    const needleIndex = haystack.indexOf("needle")
    if (needleIndex !== -1) {
        return `Found needle at ${needleIndex}.`
    } else {
        return "Needle wasn't found"
    }
}

const haystack = ["richard", "golf course", "needle", "computer", "tarzana, ca"]
console.log(findNeedle(haystack))

//SUM THE POSITIVE
function sumPositiveNumbers(arr) {
    const positiveNumbers = arr.filter(num => num > 0)
    const sum = positiveNumbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0)
    return sum
}

const numbers = [-21, 16, 3, -3, 37, -12, 12]
console.log("sum = ", sumPositiveNumbers(numbers))

//////////////////////////////////////////////////////////////////////////////////////////////////////

//QUESTION 1
//check if the lengths of the strings are equal. If not return false
//count letters in both strings
//iterate through the characters of the first string and update the count of each letter in the object
//iterate through the characters of the second string and update the count of each letter in the object
//check if all letters exist inthe other object the same amount of times. return false if not. return true if otherwise

//QUESTION 2
//convert numbers to string
//initialize frequency counters for each number
//populate frequency counters by iterating trough each string
//compare the freq counters
//if they match, return true otherwise return false

function sameFrequency(num1, num2) {
    const str1 = num1.toString()
    const str2 = num2.toString()
    const counter1 = {}
    const counter2 = {}

    for (let num of str1) {
        counter1[num] = (counter1[num] || 0) + 1
    }
    for (let num of str2) {
        counter2[num] = (counter2[num] || 0) + 1
    }
    for (let key in counter1) {
        if (counter1[key] !== counter2[key]) {
            return false
        }
    }
    return true
}
console.log(sameFrequency(218, 128))
console.log(sameFrequency(12, 211))

//QUESTION 3
// initialize empty object frequency counter
//for each number increment the count in frequency counter
//if value greater than 1, return true
//if value less than less than 1 return false

function areThereDuplicates() {
    const counter = {}
    for (let num of numbers) {
        counter[num] = (counter[num] || 0) + 1
    }
    for (let key in counter) {
        if (counter[key] > 1) {
            return true
        }
    }
    return false
}

console.log(areThereDuplicates(4, 5, 6))
console.log(areThereDuplicates(4, 3, 4))

//QUESTION 4
//check if n is greater than the array length
//calculate the sum of the first n elements to initialize the max sum
//start a loop from the nth element of the array.
//update the max sum if the new sum is greater than the current max sum
//return the max sum 