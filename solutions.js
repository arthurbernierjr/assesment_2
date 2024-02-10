//What is the diffrence between a parameter and an argument\\
    
    // 1. A paramater is a variable in a function or method.
    // 2. An argument is the actual value that is passed to a function or method when it is called.

    //Within a function, what is the difference between return and console.log\\
    
    // 1. Return is used to specify the value that a function should output or produce.
    // 2. Console.log is used for logging or printing info.




    //PALINDROME\\
//Convert the input string to lowercase to ensure the comparison is case-insensitive.
//Split the string into an array of characters, reverse the array, and then join it back into a string.
//Compare the original lowercase string with the reversed string.
//If they are the same, the function should return true; otherwise, it returns false.
//Commit your work with the message "palindrome completed".
    const palindrome = (string) => string.toLowerCase() === string.toLowerCase().split('').reverse().join('') ? true:false
    console.log(palindrome("racecar"))
    
   
   
    //SUM ARRAY\\
 //Initialize a variable to store the sum of the array elements.
//Use a for loop to iterate through the array.
//In each iteration, add the current element to the sum variable.
//After the loop, return the sum variable.
//Commit your work with the message "sum array complete

    function sumArray(num) {
        let sum = 0
        for(let i = 0; i < num.length; i++) {
            sum += num[1]
        }
        return sum
    }
        console.log(sumArray([5,6,7,8]))



    //PRIME NUMBERS\\
//Check if the number is less than or equal to 1. If so, return falsebecause it's not prime.
//Use a for loop to iterate from 2 up to the square root of the number.
//If the number is divisible by any number in this range, return false.
//If no divisors are found, return true.

    function checkPrime(num) {
        if(num <= 1) {
            return false
        }
        for(let i = 2; i < num; i++) {
            if(num % i === 0 ){
                return false
            }
        }
    }

//PRINT PRIME NUM\\
//Use a for loop to iterate through numbers from 2 up to the specified limit.
//For each number, use the checkPrimefunction to check if it's prime.
//If checkPrimereturns true, console.log the number.
//Commit your work with the message "prime numbers completed".

    function printPrimes(num) {
    for(let i = 2; i <= num; i++){
        if(checkPrime(i)){
            console.log(i)
             }
        }
    }
    printPrimes(19)


//Calculate the cube of the number by multiplying the number by itself twice.
//Return the result.
//Commit your work with the message "calculate the cube completed".

    const calculateCube = num => Math.pow(num, 3)
    console.log(calculateCube(2))



//IS A VOWEL\\
//Check if the input character is included in a string of vowels (both lowercase and uppercase).
//Return trueif the character is a vowel, otherwise return false.
//Commit your work with the message "is a vowel completed".

    const cheVowel = (char) => {
    const vowels = ['a', 'e', 'i', 'o', 'u']
    for (let i = 0; i <= vowels.length; i++) {
        if(char.toLowerCase() === vowels[i]){
            return true
         }
     }
     return false
    }
    console.log(cheVowel('a'))


//GET TWO LENGTHS\\
//Return an array containing the lengths of the two input strings.
//Commit your work with the message "get two lengths completed".


//GET MULTIPLE LENGTHS\\
//Use the mapfunction to transform each string in the input array into its length.
//Return the resulting array of lengths.
//Commit your work with the message "get multiple lengths completed".

    const inputArray = ["basketball", "football", "soccer", "baseball"]
    const resultLengths = inputArray.map(str => str.length)
    console.log(resultLengths)

//MAXIMUM OF THREE NUMBERS\\
//Use the Math.maxfunction to find the maximum of the three numbers.
//Return the maximum number.
//Commit your work with the message "maximum of three numbers completed".

    function findMax(...numbers) {
        if(numbers.length === 0) {
            return undefined
        }
        return Math.max(...numbers)
    }

    const result = findMax(15,35,12)
    console.log(result)

//PRINT LONGEST WORD\\
//Use the reducemethod to find the longest string in the array.
//In case of a tie, the first word in the array order is returned.
//Commit your work with the message "print longest word completed".

    const findLongestWord = ["Superman", "Batman", "WonderWoman"]
        const longestWord = findLongestWord.reduce((longest, current) => {
            return current.length > longest.length ? current : longest
        })

        console.log(longestWord)

//TRANSMOGRIFY THE NUMBERS\\
//Calculate the product of the first two numbers.
//Raise the product to the power of the third number.
//Return the result.
//Commit your work with the message "transmogrify the numbers completed".

        

//PROJECT EULER PROBLEM 2\\
//Initialize two variables to store the first two numbers of the Fibonacci sequence.
//Use a while loop to generate Fibonacci numbers up to the specified limit.
//Within the loop, check if the current number is even. If so, add it to the sum.
//Update the Fibonacci sequence variables for the next iteration.
//Return the sum of even Fibonacci numbers.
//Commit your work with the message "Project Euler Problem 2 completed".


function projEuler(limit) {
    let sum = 0
    let num1 = 1
    let num2 = 2
    while(num2 <= limit) {
        if(num2 % 2 === 0) {
            sum += num2
        }
        const nextNum = num1 + num2
        num1 = num2
        num2 = nextNum
    }
    return sum
}
console.log(projEuler(212))

//A NEEDLE IN A HAYSTACK\\
//Use the indexOfmethod to find the index of the "needle"in the array.
///Return a string that includes the index of the needle.
//Commit your work with the message "a needle in the haystack completed".

const needleInAHaystack = arr => arr.indexOf("needle")
console.log(needleInAHaystack(["Where", "Is", "This", "Needle", "In", "The", "Haystack"]))

//SUM THE POSITIVE\\
//Use the filtermethod to create a new array containing only positive numbers.
//Use the reducemethod to sum the values of the filtered array.
//Return the sum.
//Commit your work with the message "sum the positive completed".

function sumOfPositiveNumbers(numbers) {
    const positiveNums = numbers.filter(num => num > 0);
    const sum = positiveNums.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    return sum;
}

const nputArray = [2, -2, 1, -1, 3, -3];
const reesult = sumOfPositiveNumbers(inputArray);
console.log(reesult);
//////////////////////////////////////////////////////////////////////////////////////////////////////////////



//IDENTIFYING THE PROBLEM SOLVING PATTERS\\
//Step 1: Read and understand the pattern, and the code given in the example
//Step 2: Make sure you did step 1 it will just be confusing if you don't do step 1
//Step 3: Re-write the example in psuedo-code like the problems you were given above
//Step 4: Use the SOP we created in Outcomes to now try to solve the problems that are given

//Read the problem
//Understand the problem
//Explore Concrete Examples
//Break it down
//Simplify/Solve Loop
//Look Back and Refactor

//Step 5: After taking thirty minutes on each question, look up the answer online
//Step 6: Analyze the solution you found and compare it to yours
//Step 7: Write out the solution you found in psuedocode form and add it as comments in solutions.js and then try to solve it again as many times as you like using the psuedocode.
//Step 8: Doing it this way above is not the most fun way and may cause you're brain to hurt just a tad, this is good, this is an approved method no matter if you are nuerotypical or nuerodivergent
//Step 9: Trust the process and do not deviate to get the best benefit

//VALID ANAGRAM\\

function validAnagram(first, second) { //Takes Two Strings As Arguments //Function- a set of statements that perform a task or calculates a value
    if (first.length !== second.length) { //Determines if the lengths of the two strings are different?
        return false; //If they are not equal return false
    }

    const lookup = {}; //Sets an empty object call "lookup"

    for (let i = 0; i < first.length; i++) { //Goes through each character in the first string.
        let letter = first[i];
        // If letter exists, increment, otherwise set to 1
        lookup[letter] ? lookup[letter] += 1 : lookup[letter] = 1; // Checks to see if the current letter already exists as a key in the "lookup" object.
    }

    for (let i = 0; i < second.length; i++) { // Goes through each character in the second string.
        let letter = second[i];
        // Can't find letter or letter is zero then it's not an anagram
        if (!lookup[letter]) { // Checks if the current letter exists in the "lookup" object. If not return false because the current letter does not show in the first stringg.
            return false;
        } else {
            lookup[letter] -= 1;
        }
    }

    return true; // If the loops finish without returning false it means that boths strings have the same characters with the same frequencies making them
    //anagrams.
}


//Question 2: SAME FREQUENCY\\
    function equalFrequency(num1, num2) {
        let strNum1 = num1.toString()
        let strNum2 = num2.toString()
            if (strNum1.length !== strNum2.length) {
                return false;
            }

        let frequencyCounter1 = {}
        let frequencyCounter2 = {}
            for (let digit of strNum1) {
                frequencyCounter1[digit] = (frequencyCounter1[digit] || 0) + 1
            }

        for (let key in frequencyCounter1) {
            if (!(key in frequencyCounter2) || frequencyCounter1[key] !== frequencyCounter2[key]) {
                return false

            }
        }
        return true;
    }

        let answer = equalFrequency(34, 14)
        console.log(answer)




        //QUESTION 3: ARE THERE DUPLICATES\\
        ///MY ATTEMPT
        function areThereDuplicates(first,second,third) {
            if (first.length === second.length === third.length) {
                return true;
            }
            const lookup = {}
            for (let i =0; i < first.length; i++) {
                let num = first[i];
                lookup[num] = 1;
            }
                for (let i = 0; i < second.length; i ++) {
                    let num = second[i]
                    if (!lookup[num]) {
                        return false;
                    } else {
                        lookup[num] -= 1;
                }
        }
        return true
    }

    //LOOKED UP ANSWER
    function areThereDuplicates() {
        let frequencyCounter = {};
      
       
        for (let i = 0; i < arguments.length; i++) {
          let arg = arguments[i];
          frequencyCounter[arg] = (frequencyCounter[arg] || 0) + 1;
        }
      
     
        for (let key in frequencyCounter) {
         
          if (frequencyCounter[key] > 1) {
           
            return true;
          }
        }
      
     
        return false;
      }
      
     
      console.log(areThereDuplicates(1, 2, 3)); //false
      console.log(areThereDuplicates(1, 2, 2)); //true


      //SLIDING WINDOW\\
      //ARTHURS EXAMPLE\\
      function maxSubarraySum(arr, n) {
        let maxSum = 0;//Checks if the length of the arary is less then n. If true it means that the arr is smaller than the desired size,
        let tempSum = 0;//Checks if the length of the arary is less then n. If true it means that the arr is smaller than the desired size,
        if (arr.length < n) return null;// If the arr length is less than n return null
        
        // Initial window sum
        for (let i = 0; i < n; i++) { // Starts from i = 0 and iterates up to i = n-1
            maxSum += arr[i];
        }
        tempSum = maxSum;//tempSum is set to equal maxSum.
        
        // Slide the window
        for (let i = n; i < arr.length; i++) {//Loop starts from the index n and goes up to the end of the array.
            tempSum = tempSum - arr[i - n] + arr[i]; //Each iteration tempSum is updated subtracting the element at index i-n
            maxSum = Math.max(maxSum, tempSum);//Function compares maxSum and tempSum and assigns maximum value to maxSum.
        }
        
        return maxSum;
    }


    //QUESTION 1: MINSUBARRAYLEN\\
    //MY ANSWER
    function minSubArrayLen(nums, target) {
        let minLength = Infinity
        let start = 0
        let end = 0
        let sum = 0

            while (start < nums.length) {
                if (sum < target && end < nums.length) {
                    sum += nums[end]
                    end++
                } else if (sum >= target) {
                    minLength = Math.min(minLength, end - start)
                    sum -= nums[start]
                    start++
                } else {

                }
            }
            return minLength === Infinity ? 0 : minLength
    }

    const nums = [2,3,1,2,4,3]
    const target = 7
    const res = minSubArrayLen(nums, target)
    console.log(res)

    //QUESTION 2: FIND LONGEST SUBSTRING\\
    //LOOKED UP ANSWER\\
    function findLongestSubstring(str) {
        let longestLength = 0;
        let start = 0;
        const charIndexMap = {};
      
        for (let end = 0; end < str.length; end++) {
          const currentChar = str[end];
      
          if (charIndexMap[currentChar] >= start) {
           
            start = charIndexMap[currentChar] + 1;
          }
      
        
          charIndexMap[currentChar] = end;
      
        
          const currentLength = end - start + 1;
      
       
          longestLength = Math.max(longestLength, currentLength);
        }
      
        return longestLength;
      }
      
     
      const inputString = "thisisawesome";
      const ressult = findLongestSubstring(inputString);
      console.log(ressult);     