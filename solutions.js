// Verbal Questions

// 1. What is the difference between a parameter and an argument?

// Answer: a parameter is a variable or placeholder that's meant to signify what type of data should be passed into the function when it is called. An argument is a piece of data that is passed into the function when it is called (in a sense, "replacing" the placeholder parameter).  

// Parameter example: function fakeFunction(num) {...}
// Argument example: fakeFunction(40)

// 2. Within a function, what is the difference between return and console.log?

// Answer: a console.log merely prints whatever data is passed as its argument (usually for testing purposes) while a return actually passes the data value that the called function is meant to produce. That is, a return actually gives the coder access to some value that can then be used in another part of the code.

// PALINDROME

// Convert the input string to lowercase to ensure the comparison is case-insensitive

function palindrome(str) {
  let lowerCaseStr = str.toLowerCase()

// Split the string into an array of characters, reverse the array, and then join it back into a string.
  
  let reversedStr = lowerCaseStr.split('').reverse().join('')

// Compare the original lowercase string with the reversed string.

// If they are the same, then function should return true; otherwise, returns false.

  if(lowerCaseStr === reversedStr) {
    return true
  } else {return false}
}


// SUM ARRAY

// Initialize a variable to store the sum of the array elements

function sumArray(arrOfNums) {
  let sum = 0

// Use a for loop to iterate through the array

  for (i = 0; i < arrOfNums.length; i++) {

// In each iteration, add the current element to the sum variable

  sum = sum + arrOfNums[i]
  }

// After the loop, return the sum variable

  return sum

}


// PRIME NUMBERS

// checkPrime

// Check if the number is less than or equal to 1. If so, return false because it's not prime.

function checkPrime(num) {
  if (num <= 1) {
    return false
  }

// Use a for loop to iterate from 2 up to the square root of the number.

  for (let i = 2; i <= Math.sqrt(num); i++ ) {

// If the number is divisible by an number in this range, return false.

    if (num % i === 0) {
      return false
    }
  }

// If no divisors are found, return true.

  return true
}

// printPrimes

// Use a for loop to iterate through numbers from 2 up to the specified limit

function printPrimes(limit) {

  for (let i = 2; i <= limit; i++) {

// For each number, use the checkPrime function to check if it's prime

// If checkPrimes returns true, console.log the number
  
    if (checkPrime(i) === true) {
      console.log(i)
    }
  }
}


// CALCULATE THE CUBE

// Calculate the cube of the number by multiplying the number by itself twice.

function calcCube(num) {
  let numSquared = num * num

  let numCubed = numSquared * num

// Return result

  return numCubed
}


// IS A VOWEL?

// Check if the input character is included in a string of vowels (both lowercase and uppercase)

function isAVowel(char) {

  let vowelStr = 'aeiouyAEIOUY'

// Return true if the character is a vowel, otherwise return false

  if (vowelStr.includes(char)) {
    return true
  } else {return false}
}


// GET TWO LENGTHS

// Return an array containing the lengths of the two input strings

function getTwoLengths(str1, str2) {
  let str1Length = str1.length
  let str2Length = str2.length

  let outputArr = []
  outputArr.push(str1Length, str2Length)

  return outputArr
}


// GET MULTIPLE LENGTHS

// Use the map function to transform each string in the input array into its length

function getMultipleLengths(arr) {

  let mappedLengths = arr.map( (str) => str.length)

// Return the resulting array of lengths
  
  return mappedLengths
}


// MAXIMUM OF THREE NUMBERS

// Use the Math.max function to find the maximum of the three numbers

function maxOfThreeNumbers (num1, num2, num3) {

  let maxNum = Math.max(num1, num2, num3)

// Return the maximum numbers

  return maxNum
}


// PRINT LONGEST WORD

// Use the reduce method to find the longest string in the array

function printLongestWord (arr) {
  
  let strLengthArr = []

  for (let i = 0; i < arr.length; i++) {
    let subArr = arr[i].split('')
    strLengthArr.push(subArr.length)
  }

  const maxLength = strLengthArr.reduce( (accumulator, currentValue) => 
    Math.max(accumulator, currentValue)
  )

  // In case of a tie, the first word in the array order is returned

  // indexOf will select the index of the first element in the array that has the max length value, so we should be good in case of a tie

  let maxIndex = strLengthArr.indexOf(maxLength)
  return arr[maxIndex]
}


// TRANSMORGRIFY THE NUMBERS

// Calculate the product of the first two numbers

function transmorgrifyNums (num1, num2, num3) {
  let product = num1 * num2

// Raise the product to the power of the third number

  let result = product ** num3

// Return result

  return result
}


// PROJECT EULER PROBLEM 2

// Initialize two variables to store the first two numbers of the Fibonacci sequence

function evenFibSum(limit) {
  let num1 = 1
  let num2 = 2

// Use a while loop to generate Fibonacci numbers up to the specified limit
  let sum = 0
  let i = 1
  while (i <= limit) {

// Within the loop, check if the current number is even. If so, add it to the sum

    if (num1 % 2 === 0) {
      sum = sum + num1
    }
    
// Update the Fibonacci sequence variables for the next iteration

    let nextNum = num1 + num2
    num1 = num2
    num2 = nextNum

    i++
  }

// Return the sum of even Fibonacci numbers

  return sum
}


// A NEEDLE IN THE HAYSTACK

// Use the indexOf method to find the index of the "needle" in the array

function findNeedle(arr) {

  let needleIndex = arr.indexOf('needle')

  let string = `The needle is at index ${needleIndex}`

// Return a string that includes the index of the needle
  
  return string
}


// SUM THE POSITIVE

// Use the filter method to create a new array containing only positive numbers

function sumThePositive(arr) {

  let positives = arr.filter((num) => num > 0)

// Use the reduce method to sum the values of the filtered array

  let sum = 0

  for (let number of positives) {
    sum = sum + number
  }

// Return sum

  return sum
}


// PART 2

// PROBLEM SOLVING PATTERNS

// FREQUENCY COUNTER

// Question 1 (example): Valid Anagram

// Pseudocode for solution:

// 1. Check if lengths of strings are the same.  If not, return false.

// 2. Create an empty object to serve as the frequency counter.

// 3. Use a for loop to iterate through the first string. Use a ternary operator to check if the letter is already a key in the object.  If it is, increase the value by one.  If it's not, set the value to one.

// 4. Use a second for loop to iterate through the second string.  Check each letter to see if it is already present as a key in the frequency counter.  If it is, decrease the value of that key by one.  If it's not, return false.

// 5. If the second for loop is able to finish running without having returned false, then the strings are anagrams and the function should return true.


// Question 2: SAME FREQUENCY

// *** Solution attempt (figured it out) ***:

function sameFreq(num1, num2) {
  // Convert both numbers to string representations to easily iterate over the digits
  
    const str1 = num1.toString()
    const str2 = num2.toString()
  
    // Forgot this step on original attempt!
    if (str1.length !== str2.length) {
      return false
    }
  
  // Initialize two frequency counter objects for each number
  
    const counter1 = {}
    const counter2 = {}
  
    // Populate the frequency counters by iterating over each digit of the two numbers
  
    for (let i = 0; i < str1.length; i++) {
      counter1[str1[i]] ? counter1[str1[i]] += 1 : counter1[str1[i]] = 1
    }
  
    for (let i = 0; i < str2.length; i++) {
      counter2[str2[i]] ? counter2[str2[i]] += 1 : counter2[str2[i]] = 1
    }
  
    // Compare the two requency counters.  If they have the same keys with the same values, the numbers have the same frequency of digits; otherwise, they do not.
  
    // Return true if the frequencies match, otherwise return false
  
    for (let key in counter1) {
      let counter2Keys = Object.keys(counter2)
      if (!(counter2Keys.includes(key))) {
        return false
      }
      if (!(counter2[key] === counter1[key])) {
        return false
      }
    } 
    return true
  }
  
  // Answer found online with my pseudocode:
  
  function sameFrequency(a, b){
      let integerA = a.toString();
      let integerB = b.toString();
      if (integerA.length !== integerB.length) {
          return false;
          
      }
      const lookup = {};
      for (let i = 0; i < integerA.length; i++) {
          let number = integerA[i];
          lookup[number] ? lookup[number] += 1 : lookup[number] = 1;
      }
      for (let i = 0; i < integerB.length; i++) {
          let number = integerB[i];
          if (!lookup[number]){
              return false;
          } else {
            lookup[number] -= 1;  
          }
      }
      return true
  }
  
  // 1. convert both integers to strings
  
  // 2. check if they are the same length.  If they aren't return false. 
  
  // 3. assign empty object to variable for a frequency counter
  
  // 4. loop through the first integer's digits and add key value pairs to lookup object.
  
  // 5. loop through second integer's digits and check if they are in the frequency counter object.  If one isn't, return false.  If one is, decrease the frequency of the value of that key.
  
  // 6. Return true if it makes it through loop without returning false. Note: they solved this very similar to the validAnagram case, but I'm not sure it's in line with the instructions provided for the problem.
  
  
  
  // Question 3: ARE THERE DUPLICATES
  
  // *** Solution attempt (figured out) ***
  
  function areThereDuplicates(...args) {
  
    // Use a frequency counter object to count the occurrences of each argument
    
    counter = {}
  
    // Populate frequency counter by iterating over the arguments
  
    for (let i = 0; i < args.length; i++) {
      counter[args[i]] ? counter[args[i]] += 1 : counter[args[i]] = 1
    }
  
    // Iterate through the values of the frequency counter.  If any value is greater than 1, it means a duplicate exists.
  
    // Return true if any duplicates are found, otherwise return false.
  
    for (let key in counter) {
      if (counter[key] > 1) {
        return true
      }
    }
  
    return false
  
    // NOTE: as currently set up, 2 and '2' will count as a duplicates. Instructions were unclear whether this is permissible or not. In interview, ask about it!
  }
  
  // Answer found online with my pseudocode:
  
  const areThereDuplicatesSolution = (...args) => {
    const argFrequency = {};
    for (let idx = 0; idx < args.length; idx += 1) {
      argFrequency[args[idx]] = (argFrequency[args[idx]] || 0) + 1;
    }
    const argFrequencyVals = Object.values(argFrequency);
    for (let idx = 0; idex <= argFrequencyVals.length; idx += 1) {
      if (argFrequencyVals[idx] > 1) {
        return true
      }
    }
    return false
  
  // Note: we solved this very similarly.
  }
  
  // 1. Assign an empty object to a variable to act as a frequency counter
  
  // 2. Set up a for loop to iterate over arguments and add them as keys to the frequency counter.  The way they do it is they set the value of the key by first checking if it's in the counter with a disjunction. If it's not, it's added with a value of 0 and one is added to it. If it is, just increases the value by one.
  
  // 3. Assigns a variable to the object values in the frequency counter
  
  // 4. Loops through the values of the keys in the frequency counter to check if any are any that are equal to more than one. If so, there are duplicates, so return true. If the loop finishes and no duplicates are found, return false.
  
  