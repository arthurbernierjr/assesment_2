// Verbal Questions
// What is the difference between a parameter and an argument?

// A parameter is something declared in a closing parantheses in a function. And an argument is something thats being manipulated to that parameter. 
// Argument argues the parameter the parameter IS what we are going to define.

// Within a function, what is the difference between return and console.log?

// My answer: A console log is to log a section of code to print out what its doing wether what its calling what it is and or how it runs. Used for debugging and finding out what is actually happening to your code.
// My answer: A return is actually running the part of a function where it was called. Returns are the run part of a function.

// Chat GPT: return:

// return is a keyword used to exit a function and specify the value that the function should return to the caller.
// When a function encounters a return statement, it immediately exits the function and returns the specified value (if any) to the location where the function was called.
// It allows a function to produce a result that can be used by the caller or other parts of the program.

// Chat GPT console.log 

// console.log() is a method used for logging information to the console, primarily for debugging purposes.
// It does not affect the flow of the function or the program; it simply outputs the provided data to the console.
// console.log() can be used to display the value of variables, objects, or any other data types during the execution of a program.


//CODING QUESTIONS 


//Palindrome
// Convert the input string to lowercase to ensure the comparison is case-insensitive. https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toLowerCase     
// Split the string into an array of characters, reverse the array, and then join it back into a string. https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split / then reverse search and join
// Compare the original lowercase string with the reversed string.
// If they are the same, the function should return true; otherwise, it returns false. // will be ussing === for when coding
// Commit your work with the message "palindrome completed".

function palindrome(str) { //addd a str parameter in the function
    str = str.toLowerCase() 
    // console.log(str) // print out lower case

    const unoReverse = str.split('').reverse().join('') // reverse doesnt need('') because its not the actual content we are changing we are chaging the whole function reversed
    // now unoReverse should be the reversed lowercase str 
    //ORIGINAL CODE NEEDS TO BE A RETURN // console.log(str) === unoReverse;
    return str === unoReverse;
}
// palindrome("Hello World");
console.log(palindrome("Lol"))
console.log(palindrome("wow"))
console.log(palindrome("Not Forward Or Backwards"))
// Notes we need to lowercase everything so it can end up truthy if it uses the same characters. 
//We nee to split reverse and join the str incase its multiple parts and so it ends up being one str so it can recognize that it can or cant be truthy otherwise it will always be false
// We need to return the str === unoReveser const to compare to see if its truthy or not // We also cant just console log it because that wont solve our issue for actually running the function.
// palindome completed  

// Sum Array
// Initialize a variable to store the sum of the array elements.
// Use a for loop to iterate through the array.
// In each iteration, add the current element to the sum variable.
// After the loop, return the sum variable.
// Commit your work with the message "sum array completed".

function sumArray(arr) {
    let sum = 0; // we are using let because we will be changing the value of sumb. // ALWAYS start at 0 if the loop i = 0

    //my attempt of a loop 
    //for (let i = 0) i < arr.length) 0 ++ 1) {
    //    sum + arr[i]
    //  }
    //chat GPT correct model
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i]; // You forgot the += operator here to add the current element to the sum
    }
    // chat gpt end
    console.log(sum); // test the console log 
}
sumArray([1,5,22,55,77])
//Notes 
// we need to set sum at 0 for the loop to know when to start running at what value
//for the arr.length we will ++ which is add one of each part of the arr because the loop is telling us to keep running
// the sum + arr[i] adds the sum of each part of the array because the loop is doing the value amount of the arr.length
// I used console.log but i can change it with a return statement

// //Chat gpt finale 
// function sumArray(arr) {
//     let sum = 0; // Initialize sum to 0
    
//     for (let i = 0; i < arr.length; i++) {
//         sum += arr[i]; // Add each element of the array to sum
//     }
    
//     return sum; // Return the total sum
// }

// // Example usage:
// console.log(sumArray([1, 2, 3, 4, 5])); // Output: 15

// sum array completed


// Prime Numbers
// checkPrime
// Check if the number is less than or equal to 1. If so, return falsebecause it's not prime.
// Use a for loop to iterate from 2 up to the square root of the number.
// If the number is divisible by any number in this range, return false.
// If no divisors are found, return true.
// printPrimes
// Use a for loop to iterate through numbers from 2 up to the specified limit.
// For each number, use the checkPrimefunction to check if it's prime.
// If checkPrimereturns true, console.log the number.
// Commit your work with the message "prime numbers completed".

function checkPrime(number) {
    if (number <= 1) {
        return false; // Numbers less than or equal to 1 are not prime
    }
    //My attempt
    // for (let i = 2; i <= Math.sqrt(number); i++){ //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/sqrt
    //     if (number i === 0) {
    //      console.log('false');
    //     }
    // }
//Chat GPT
    for (let i = 2; i <= Math.sqrt(number); i++) { 
        if (number % i === 0) {
            return false; // If divisible by any number, it's not prime
        }
    }
    return true; // If no divisors found, it's prime
}
// Chat GPT End
//My Attempt printPrimes
// function printPrimes(max,checkPrime) { //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/max
//     for (let i = 2; i <= max; i++) {
//         if (checkPrime(i)){
//             console.log(i);
//         }
//     }
// }

//Chat GPT version
function printPrimes(limit) {
    for (let i = 2; i <= limit; i++) {
        if (checkPrime(i)) {
            console.log("prime number: " + i); // Print the prime number
        }
    }
}
printPrimes(69); 
//Ghat gpt end version
// Notes 
//we literally do the math for what a prime number is for checkPrime, square root is the closes way i was able to find. Then we have loop what is considered false and whats true for prime numbers.
// Now that we created what a Prime number is , we use a second function in order to run the Prime function, the reason we do this is because we use a loop to print out a set amount of numbers based what we put.
// Seems like we use 2 functions so checkPrime can be reusable, while if we kept it in one function it would strictly do one thing, print out all prime numbers. functions DO not go as a parameter in a new function...

//prime numbers completed//


// Calculate the Cube
// Calculate the cube of the number by multiplying the number by itself twice.
// Return the result.
// Commit your work with the message "calculate the cube completed".

//My attempt
let cubed = 0
function calculateCube(number, cubed) { // always use number when we are using the number parameter
    return cubed = number * number
}
console.log(calculateCube(3)) 
console.log(calculateCube(15))
// Notes 
// I gave a let cubed set to 0 because ill be changing it.
// Not sure how to pursue this problem but i knew i was multiplying the number twice to itself and i was given that it would return the rsult. 
// so i let cubed which i defined its number * * itself twice.
// So far the only one i was able to code from scratch under 20 minutes... without cheating and only searched up parameter rules in order to get cubed to work because it wasnt inside the functions scope.


//calculate the cube completed//

// Is a Vowel?
// Check if the input character is included in a string of vowels (both lowercase and uppercase). 
// Return trueif the character is a vowel, otherwise return false.
// Commit your work with the message "is a vowel completed".

// Pre notes we are gonna need to pull the parameter of characters like we do for numbers either letter, character
// My attempt 

// function vowel(){
//     let vowels = "aeiouAEIOU"; // uppercase vowels and lowerchase
//     // return true;
//     if vowels {
//         return true
//     }
//     else {
//         return false
//     }
// }
// console.log(vowel('s'))
// My attempt... End 
//Chat Gpt 

function isVowel(letter) {
    let vowels = "aeiouAEIOU"; // Define a string containing all vowels (both lowercase and uppercase)

    // Check if the input letter is included in the string of vowels
    if (vowels.includes(letter)) {
        return true; // If the letter is a vowel, return true
    } else {
        return false; // If the letter is not a vowel, return false
    }
}
console.log(isVowel('A'));
console.log(isVowel('s')); // Output: false

//Chat Gpt end 

// Get Two Lengths
// Return an array containing the lengths of the two input strings.
// Commit your work with the message "get two lengths completed".
// Get Multiple Lengths
// Use the mapfunction to transform each string in the input array into its length.
// Return the resulting array of lengths.
// Commit your work with the message "get multiple lengths completed".


// Maximum of Three Numbers
// Use the Math.maxfunction to find the maximum of the three numbers.
// Return the maximum number.
// Commit your work with the message "maximum of three numbers completed".
// Print Longest Word
// Use the reducemethod to find the longest string in the array.
// In case of a tie, the first word in the array order is returned.
// Commit your work with the message "print longest word completed".
// Transmogrify the Numbers
// Calculate the product of the first two numbers.
// Raise the product to the power of the third number.
// Return the result.
// Commit your work with the message "transmogrify the numbers completed".
// Project Euler Problem 2
// Initialize two variables to store the first two numbers of the Fibonacci sequence.
// Use a while loop to generate Fibonacci numbers up to the specified limit.
// Within the loop, check if the current number is even. If so, add it to the sum.
// Update the Fibonacci sequence variables for the next iteration.
// Return the sum of even Fibonacci numbers.
// Commit your work with the message "Project Euler Problem 2 completed".
// A Needle in the Haystack
// Use the indexOfmethod to find the index of the "needle"in the array.
// Return a string that includes the index of the needle.
// Commit your work with the message "a needle in the haystack completed".
// Sum the Positive
// Use the filtermethod to create a new array containing only positive numbers.
// Use the reducemethod to sum the values of the filtered array.
// Return the sum.
// Commit your work with the message "sum the positive completed".