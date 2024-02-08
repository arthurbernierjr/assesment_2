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

