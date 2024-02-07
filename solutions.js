// What is the difference between a parameter and an argument?
// A prameter is a placeholder in a function defenition, while the arguments are the actual values that pass through the function code.

//Within a function, what is the difference between return and console.log?
// Return is used to send a value back and end the functions excecution, while console.log sends information to the console for debugging purposes.

// Palindrome

function palindrome(word) {
        // Convert the input string to lowercase
        word = word.toLowerCase()
    
    
        // Split the string into an array of characters, reverse it, and then join it back into a string
        let reversedWord = word.split('').reverse().join('')
    
        // Compare the original lowercase string with the reversed string
        if (word === reversedWord) {
            return true // If they are the same, return true
        } else {
            return false // Otherwise, return false
        }
    }
    
// Test cases
 console.log(isPalindrome("radar")) // true
 console.log(isPalindrome("hello")) // false

 function sumArray(array) {
    // variable to store the sum of the array
    let sum = 0

    // for loop to iterate through the array
    for (let i = 0; i < array.length; i++) {
        // add the current element to the sum variable
        sum = sum + array[i]
    }

    // After the loop, return the sum variable
    return sum
}

let array = [1, 2, 3, 4, 5]
console.log(sumArrayElements(array)) // Output 15
