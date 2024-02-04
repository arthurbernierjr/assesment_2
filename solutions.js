/*
*******************************************************

Verbal Question Responses. Lazariuk. General Assembly. Liberty.

1. A paramater is the characters used to represent what you are inputting into a program or function or etc. They are the theoretical placeholders of where the actual data will be inserted.
2. Within a function, the act of console.logging is exclusively a debugging / programming / internal developer communications tool. It does not initiate or manipulate the actual data in a functional manner.

*******************************************************
*/



// PALINDROME.
// 1. Convert the input string to lowercase to ensure the comparison is cas-sensitive.

// 2. Split the string into an array of characters, reverse the array, and join it back into a string.
// 3. Compare the original lowercase string with the reversed string
// 4. If they are the same, the function should return true. Otherwise, it returns false.
// 5. COMMIT WORK with message: 'palindrome completed'

function palindrome(string) {
    const arg = string.toLowerCase()
    const argArray = arg.split('').reverse('').join('')
if (arg !== argArray ){
    return false
}
    return true
}

// End of Function List. Begin console logs below.
console.log("palindrome: " + palindrome("racecar")) // expect result true
