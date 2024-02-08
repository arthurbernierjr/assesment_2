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