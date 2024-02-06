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