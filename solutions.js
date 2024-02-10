// Palindrome

function isPalindrome(inputString) {
    const lowercaseString = inputString.toLowerCase();
    const reversedString = lowercaseString.split('').reverse().join('');
    return lowercaseString === reversedString;
}

const input = 'Pop';
const result = isPalindrome(input);
console.log(result, input);

// Sum Array

function sumArray(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}

const array = [1, 2, 3, 4, 5];
const resultSum = sumArray(array);
console.log(resultSum);

// Prime Numbers

function checkPrime(number) {
    if (number <= 1) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            return false;
        }
    }
    return true;
}

function printPrimes(limit) {
    for (let i = 2; i <= limit; i++) {
        if (checkPrime(i)) {
            console.log(i);
        }
    }
}

const limit = 20;
printPrimes(limit);

// calculateCube

function calculateCube(number) {
    const result = Math.pow(number, 3);
    return result;
}
console.log(calculateCube(3));

// isAVowel

function isAVowel(character) {
    const vowels = "aeiouAEIOU";
    const isVowel = vowels.includes(character);
    return isVowel;
}
console.log(isAVowel("p"));

// getTwoLengths

function getTwoLengths(str1, str2) {
    const lengths = [str1.length, str2.length];
    return lengths;
}
console.log(getTwoLengths("pizza", "time"));

// getMultipleLengths

function getMultipleLengths(arr) {
    const lengths = arr.map(str => str.length);
    return lengths;
}
console.log(getMultipleLengths(["pie", "cake", "muffin", "cupcake"]));

// maximumOfThreeNumbers

function maximumOfThreeNumbers(num1, num2, num3) {
    const max = Math.max(num1, num2, num3);
    return max;
}
console.log(maximumOfThreeNumbers(13, 20, 2));

// printLongestWord

function printLongestWord(words) {
    const LongestWord = words.reduce((longest, current) => 
        current.length > longest.length ? current : longest
    );
    return LongestWord;
}
console.log(printLongestWord(["tie", "t-shirt", "pants"]));

// transmogrifyNumbers

function transmogrifyNumbers(num1, num2, num3) {
    const product = num1 * num2;
    const result = Math.pow(product, num3);
    return result;
}
console.log(transmogrifyNumbers(2, 3, 4));

// projectEulerProblem2

function projectEulerProblem2(limit) {
    let sum = 0;
    let first = 1;
    let second = 2;

    while (second <= limit) {
        if (second % 2 === 0) {
            sum += second;
        }
        const next = first + second;
        first = second;
        second = next;
    }

    return sum;
}
console.log(projectEulerProblem2(4000000));

// aNeedleInTheHaystack

function aNeedleInTheHaystack(haystack, needle) {
    const index = haystack.indexOf(needle);
    return "The needle is at index: " + index;
}
console.log(aNeedleInTheHaystack(["apple", "banana", "cherry"], "banana"));

// sumThePositive

function sumThePositive(numbers) {
    const positiveNumbers = numbers.filter(num => num > 0);
    const sum = positiveNumbers.reduce((acc, cur) => acc + cur, 0);
    return sum;
}
console.log(sumThePositive([-1, 2, 3, -4, 5]));

// Frequency counter

function frequencyCounter(arr) {
    let frequencies = {};

    for (let i = 0; i < arr.length; i++) {
        let element = arr[i];

        if (frequencies[element]) {
            frequencies[element]++;
        } else {
            frequencies[element] = 1;
        }
    }

    return frequencies;
}

const arr = [1, 2, 3, 4, 1, 2, 2, 3, 4, 4, 4];
console.log(frequencyCounter(arr));

// Valid anagram

function isAnagram(str1, str2) {
    if (str1.length !== str2.length) {
        return false;
    }

    let frequencyCounter1 = {};
    let frequencyCounter2 = {};

    for (let char of str1) {
        frequencyCounter1[char] = (frequencyCounter1[char] || 0) + 1;
    }

    for (let char of str2) {
        frequencyCounter2[char] = (frequencyCounter2[char] || 0) + 1;
    }

    for (let key in frequencyCounter1) {
        if (frequencyCounter1[key] !== frequencyCounter2[key]) {
            return false;
        }
    }

    return true;
}

const str1 = "cinema";
const str2 = "iceman";
console.log(isAnagram(str1, str2));

// Same Frequency
function sameFrequency(num1, num2) {
    const strNum1 = num1.toString();
    const strNum2 = num2.toString();
    
    if (strNum1.length !== strNum2.length) {
        return false;
    }

    const frequencyCounter1 = {};
    const frequencyCounter2 = {};

    for (let digit of strNum1) {
        frequencyCounter1[digit] = (frequencyCounter1[digit] || 0) + 1;
    }

    for (let digit of strNum2) {
        frequencyCounter2[digit] = (frequencyCounter2[digit] || 0) + 1;
    }

    for (let key in frequencyCounter1) {
        if (frequencyCounter1[key] !== frequencyCounter2[key]) {
            return false;
        }
    }

    return true;
}

console.log(sameFrequency(182, 281)); 
console.log(sameFrequency(34, 14));  
console.log(sameFrequency(3589578, 5879385));
console.log(sameFrequency(22, 222));

// Are there Duplicates

function areThereDuplicates() {
    const frequencyCounter = {};

    for (let arg of arguments) {
        frequencyCounter[arg] = (frequencyCounter[arg] || 0) + 1;
    }

    for (let key in frequencyCounter) {
        if (frequencyCounter[key] > 1) {
            return true;
        }
    }

    return false;
}

console.log(areThereDuplicates(1, 2, 3));
console.log(areThereDuplicates(1, 2, 2));
console.log(areThereDuplicates('a', 'b', 'c', 'a'));

// Sliding Window


// const arr3 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// function slidingWindow(arr, size, callback) {
//   if (size > arr.length) {
//     throw new Error("Window size is greater than array length");
//   }

//   for (let i = 0; i <= arr.length - size; i++) {
//     const window = arr.slice(i, i + size);
//     callback(window);
//   }
// }

// // Example usage:
// const windowSize = 3;
// slidingWindow(arr3, windowSize, (window) => {
//   console.log(window);
// });



function maxSubarraySum(arr, num) {
    if (num > arr.length) {
        return null;
    }

    let maxSum = 0;
    let tempSum = 0;

    // initialize the window
    for (let i = 0; i < num; i++) {
        maxSum += arr[i];
    }

    tempSum = maxSum;

    // slide the window over the array
    for (let i = num; i < arr.length; i++) {
        tempSum = tempSum - arr[i - num] + arr[i];
        maxSum = Math.max(maxSum, tempSum);
    }

    return maxSum;
}

const arr3 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const windowSize = 3;

maxSubarraySum(arr3, windowSize, (window) => {
    console.log(window);
});


// Max sub array

function maxSubarraySum(arr, n) {
    if (n > arr.length) {
        return null;
    }

    let maxSum = 0;
    for (let i = 0; i < n; i++) {
        maxSum += arr[i];
    }

    let tempSum = maxSum;

    for (let i = n; i < arr.length; i++) {
        tempSum = tempSum - arr[i - n] + arr[i];
        maxSum = Math.max(maxSum, tempSum);
    }

    return maxSum;
}

console.log(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 2));
console.log(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 4));
console.log(maxSubarraySum([4, 2, 1, 6, 2], 1));
console.log(maxSubarraySum([], 4));

// min SubArrayLen

function minSubArrayLen(nums, target) {
    if (!nums.length) {
        return 0;
    }

    let minLength = Infinity;
    let start = 0;
    let end = 0;
    let total = 0;

    while (end < nums.length) {
        total += nums[end];

        while (total >= target) {
            minLength = Math.min(minLength, end - start + 1);
            total -= nums[start];
            start++;
        }

        end++;
    }

    return minLength !== Infinity ? minLength : 0;
}

console.log(minSubArrayLen([2, 3, 1, 2, 4, 3], 7));  // Output: 2
console.log(minSubArrayLen([2, 1, 6, 5, 4], 9));     // Output: 2
console.log(minSubArrayLen([3, 1, 7, 11, 2, 9, 8, 21, 62, 33, 19], 52));

// find longest substring

function findLongestSubstring(s) {
    if (!s.length) {
        return 0;
    }

    let maxLength = 0;
    let start = 0;
    let charIndexMap = {};

    for (let end = 0; end < s.length; end++) {
        if (s[end] in charIndexMap && charIndexMap[s[end]] >= start) {
            start = charIndexMap[s[end]] + 1;
        }

        charIndexMap[s[end]] = end;
        maxLength = Math.max(maxLength, end - start + 1);
    }

    return maxLength;
}

console.log(findLongestSubstring('ihopisbetter'));
console.log(findLongestSubstring('Wafflehousesucks'));

// Multiple pointers

// // function sumZero(arr) {
//     let left = 0;
//     let right = arr.length - 1;
    
//     while (left < right) {
//         let sum = arr[left] + arr[right];
//         if (sum === 0) {
//             return [arr[left], arr[right]];
//         } else if (sum < 0) {
//             left++;
//         } else {
//             right--;
//         }
//     }
    
//     return undefined;
// }

function twoSum(nums, target) {
    let left = 0;
    let right = nums.length - 1;

    while (left < right) {
        let sum = nums[left] + nums[right];
        if (sum === target) {
            return [nums[left], nums[right]];
        } else if (sum < target) {
            left++;
        } else {
            right--;
        }
    }
    return undefined
}

// Example usage:
const nums = [-4, -3, -2, -1, 0, 1, 2, 5]
const target = 0
console.log(twoSum(nums, target))

// countUniqueValues

function countUniqueValues(arr) {
    if (arr.length === 0) {
        return 0;
    }
    
    let i = 0;
    for (let j = 1; j < arr.length; j++) {
        if (arr[i] !== arr[j]) {
            i++;
            arr[i] = arr[j];
        }
    }
    
    return i + 1;
}

console.log(countUniqueValues([1,1,1,1,1,2]))
console.log(countUniqueValues([1,2,3,4,4,4,7,7,12,12,13]))
console.log(countUniqueValues([]))
console.log(countUniqueValues([-2,-1,-1,0,1]))

// averagePair

function averagePair(arr, target) {
    if (arr.length === 0) {
        return false;
    }
    
    let start = 0;
    let end = arr.length - 1;
    
    while (start < end) {
        let average = (arr[start] + arr[end]) / 2;
        if (average === target) {
            return true;
        } else if (average < target) {
            start++;
        } else {
            end--;
        }
    }
    
    return false;
}

console.log(averagePair([1, 2, 3], 2.5));
console.log(averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8));
console.log(averagePair([-1, 0, 3, 4, 5, 6], 4.1));
console.log(averagePair([], 4));


// Divide and conquer

// function divideAndConquer(arr, target) {
//     // Base case: if array is empty, return false
//     if (arr.length === 0) {
//         return false;
//     }
    
//     // Base case: if array has only one element, check if it equals target
//     if (arr.length === 1) {
//         return arr[0] === target;
//     }
    
//     // Find the middle index of the array
//     const midIndex = Math.floor(arr.length / 2);
    
//     // Divide the array into two halves
//     const leftHalf = arr.slice(0, midIndex);
//     const rightHalf = arr.slice(midIndex);
    
//     // Recursively call divideAndConquer on both halves
//     return divideAndConquer(leftHalf, target) || divideAndConquer(rightHalf, target);
// }

// console.log(divideAndConquer([1, 2, 3, 4, 5], 3)); 
// console.log(divideAndConquer([1, 2, 3, 4, 5], 6)); 

function search(array, val) {
    let left = 0;
    let right = array.length - 1;

    while (left <= right) {
        let middle = Math.floor((left + right) / 2);
        let currentElement = array[middle];

        if (currentElement === val) {
            return middle;
        } else if (currentElement < val) {
            left = middle + 1;
        } else {
            right = middle - 1;
        }
    }

    return -1;
}

// Sorted Array
function findFirstAndLastPosition(nums, target) {
    function binarySearch(isFirst) {
        let left = 0;
        let right = nums.length - 1;
        let result = -1;

        while (left <= right) {
            const mid = Math.floor((left + right) / 2);
            if (nums[mid] === target) {
                result = mid;
                if (isFirst) {
                    right = mid - 1;
                } else {
                    left = mid + 1;
                }
            } else if (nums[mid] < target) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }

        return result;
    }

    const firstPos = binarySearch(true);
    const lastPos = binarySearch(false);

    return [firstPos, lastPos];
}
console.log(findFirstAndLastPosition([5,7,7,8,8,10], 8))
console.log(findFirstAndLastPosition([5,7,7,8,8,10], 6))
console.log(findFirstAndLastPosition([], 6))

// Pow(x, n)
function pow(x, n) {
    if (n === 0) return 1;
    if (n < 0) {
        x = 1 / x;
        n = -n;
    }
    return n % 2 === 0 ? pow(x * x, Math.floor(n / 2)) : x * pow(x * x, Math.floor(n / 2));
}

console.log(pow(2, 10))
console.log(pow(2, -2))
console.log(pow(2, 0))

// Merge Sort
function mergeSort(arr) {
    if (arr.length <= 1) return arr;

    const mid = Math.floor(arr.length / 2);
    const leftHalf = mergeSort(arr.slice(0, mid));
    const rightHalf = mergeSort(arr.slice(mid));

    return merge(leftHalf, rightHalf);
}

function merge(leftArr, rightArr) {
    const mergedArr = [];
    let leftIndex = 0;
    let rightIndex = 0;

    while (leftIndex < leftArr.length && rightIndex < rightArr.length) {
        if (leftArr[leftIndex] < rightArr[rightIndex]) {
            mergedArr.push(leftArr[leftIndex]);
            leftIndex++;
        } else {
            mergedArr.push(rightArr[rightIndex]);
            rightIndex++;
        }
    }

    return mergedArr.concat(leftArr.slice(leftIndex)).concat(rightArr.slice(rightIndex));
}

console.log(mergeSort([3, 2, 1, 5, 4]))

// Quick Sort
function quickSort(arr) {
    if (arr.length <= 1) return arr;

    const pivot = arr[arr.length - 1];
    const leftArr = [];
    const rightArr = [];

    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] < pivot) {
            leftArr.push(arr[i]);
        } else {
            rightArr.push(arr[i]);
        }
    }

    return [...quickSort(leftArr), pivot, ...quickSort(rightArr)];
}

console.log(quickSort([3, 2, 1, 5, 4]))
