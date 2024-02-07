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

