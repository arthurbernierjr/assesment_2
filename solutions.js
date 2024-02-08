// What is the difference between a parameter and an argument?
    // Parameters are the placeholders that are used to indicate which arguments must be passed into a function in order for it to be functional.
// Within a function, what is the difference between return and console.log?
    // Return will "return" a specific piece of data when a function is called, whereas console.log will return any piece of data directly to the console. Console.log does not have to be associated with a function.

// Palindrome
// Convert the input string to lowercase to ensure the comparison is case-insensitive.
// Split the string into an array of characters, reverse the array, and then join it back into a string.
// Compare the original lowercase string with the reversed string.
// If they are the same, the function should return true; otherwise, it returns false.
// Commit your work with the message "palindrome completed".
const palindrome = (string) => string.toLowerCase() === string.toLowerCase().split('').reverse().join('') ? true:false
console.log(palindrome("racecar"))

// Sum Array
// Initialize a variable to store the sum of the array elements.
// Use a for loop to iterate through the array.
// In each iteration, add the current element to the sum variable.
// After the loop, return the sum variable.
// Commit your work with the message "sum array completed".
function sumArray(num) {
    let sum = 0
    for(let i = 0; i < num.length; i++){
        sum += num[i]
    }
    return sum
}
console.log(sumArray([1,2,3,4]))